import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';



const app = express();
const PORT = 3000;


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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));