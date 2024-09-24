import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const filteredContacts = useSelector(selectFilteredContacts);
  // const items = useSelector(state => {
  //   state.contacts.items;
  // });

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
