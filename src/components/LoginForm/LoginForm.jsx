import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { selectIsLoading } from "../../redux/auth/selectors";

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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
        <button className={css.btn} type="submit" disabled={isLoading}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
