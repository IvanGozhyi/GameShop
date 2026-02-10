import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import bcrypt from 'bcrypt';
import * as jwt from "crypto.js";



const app = express();
const PORT = 3000;
const sessions = {};


app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://bashmack007_db_user:dt24evr@gameshop.nwexfyr.mongodb.net/gameshop?retryWrites=true&w=majority"
)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB error:", err));



const GameSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    picture: String,
    genres: [String],
}, { timestamps: true });

const Game = mongoose.model("games", GameSchema);

//Specified scheme for users
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    email:{
        type:String,
        unique:true,
        required: true,
        lowercase: true,
    },
    password:{
        type:String,
        required: true,
        select:true,
    },
    role:{
        type:String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true });

const User = mongoose.model("users", UserSchema);



//Back for games
app.get('/api/games', async (req, res) => {
    res.set('Cache-Control', 'no-store');
    try {
        const games = await Game.find();
        res.json(games);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching games' });
    }
});


app.post('/api/games', async (req, res) => {
    try {
        const game = await Game.create(req.body);
        res.json(game);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error adding game' });
    }
});


app.put('/api/games/:id', async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating game' });
    }
});


app.delete('/api/games/:id', async (req, res) => {
    try {
        const deletedGame = await Game.findByIdAndDelete(req.params.id);
        res.json({ message: "Game deleted", game: deletedGame });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting game' });
    }
});

app.get('/api/games/:id', async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);

        if (!game) {
            return res.status(404).json({ error: 'Game not found' });
        }

        res.json(game);
    } catch (error) {
        console.error("Error fetching single game:", error);
        res.status(500).json({ error: 'Server error' });
    }
});

//REGISTER
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role: email === "givan2981@gmail.com" ? "admin" : "user"
        });

        const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, { httpOnly: true })
            .status(201)
            .json({
                id: newUser._id,
                userName: newUser.username,
                email: newUser.email,
                role: newUser.role,
            });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Registration error' });
    }
});

//LOGIN
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const sessionId = crypto.randomUUID();
        sessions[sessionId] = user._id;

        res.json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
            sessionId,
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));