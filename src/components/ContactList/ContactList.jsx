import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.gridList}>
      {filteredContacts.map(contact => (
        <li className={css.gridListItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
