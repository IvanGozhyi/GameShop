import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/style.css";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/features/users.js";
import {useNavigate} from "react-router-dom";

const LoginSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email")
        .required("Required"),
    password: Yup.string()
        .min(6, "Min 6 symbols")
        .required("Required"),
});

export default function AuthForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                dispatch(loginUser({ email: values.email, password: values.password }));
                navigate("/");
            }}

        >
            {() => (
                <Form className="form">
                    <h2>Login</h2>

                    <Field name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="error" />

                    <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" className="error" />

                    <button type="submit">Login</button>
                </Form>
            )}
        </Formik>
    );
}
