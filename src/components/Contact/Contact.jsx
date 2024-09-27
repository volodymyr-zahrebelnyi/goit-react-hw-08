import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactWrap}>
        <li className={css.contactItem}>
          <IoPerson className={css.icon} />
          {name}
        </li>
        <li className={css.contactItem}>
          <FaPhone className={css.icon} />
          {number}
        </li>
      </ul>
      <div className={css.btnWrap}>
        <button className={css.btn} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
