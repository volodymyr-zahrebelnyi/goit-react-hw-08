import { Formik, Form, Field } from "formik";
// import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.formContainer}>
        <div className={css.formWrap}>
          <label className={css.label}>Email</label>
          <Field className={css.input} type="email" name="email" />
          <label className={css.label}>Password</label>
          <Field className={css.input} type="password" name="password" />
        </div>
        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
