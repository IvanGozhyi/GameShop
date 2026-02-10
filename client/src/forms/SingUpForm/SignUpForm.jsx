import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/style.css";
import {useDispatch} from "react-redux";
import {registerUser} from "../../store/features/users.js";

const RegisterSchema = Yup.object({
    username: Yup.string()
        .min(3, "Min 3 symbols")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required"),
    password: Yup.string()
        .min(6, "Min 6 symbols")
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
});

export default function SignUpForm() {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={({ username, email, password }) => {
                console.log("Submitting payload:", { username, email, password });
                dispatch(registerUser({ username, email, password }));
            }}
        >
            {() => (
                <Form className="form">
                    <h2>Register</h2>

                    <Field name="username" placeholder="Username" />
                    <ErrorMessage name="username" component="div" className="error" />

                    <Field name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="error" />

                    <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" className="error" />

                    <Field
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                    />
                    <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="error"
                    />

                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
}
