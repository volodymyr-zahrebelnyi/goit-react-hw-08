import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer} autoComplete="off">
        <div className={css.formWrap}>
          <label className={css.label}>Username</label>
          <Field className={css.input} type="text" name="name" />
          <label className={css.label}>Email</label>
          <Field className={css.input} type="email" name="email" />
          <label className={css.label}>Password</label>
          <Field className={css.input} type="password" name="password" />
        </div>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
