import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = { name: "", number: "" };

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  // const handleSubmit = (values, actions) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name: values.name,
  //     number: values.number,
  //   };
  //   dispatch(addContact(newContact));
  //   actions.resetForm();
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.formWrap}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formWrap}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={numberFieldId}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            title="Please enter a valid phone number in the format: 123-456-7890"
          ></Field>
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

// const id = useId();

// const handleSubmit = evt => {
//   evt.preventDefault();

//   const idNano = nanoid();
//   const name = evt.target.elements.name.value;
//   const number = evt.target.elements.number.value;

//   onAddContact({ id: idNano, name, number });

//   evt.target.reset();
// };

// return (
//   <form className={css.form} onSubmit={handleSubmit}>
//     <div className={css.formWrap}>
//       <label htmlFor={`${id}-name`}>Name:</label>
//       <input type="text" name="name" id={`${id}-name`} />
//       <label htmlFor={`${id}-number`}>Number:</label>
//       <input type="text" name="number" id={`${id}-number`} />
//       <button type="submit">Add contact</button>
//     </div>
//   </form>
// );
