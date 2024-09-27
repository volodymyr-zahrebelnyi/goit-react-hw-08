import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { selectLoading, selectError } from "../../redux/contacts/selectors";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "../ContatcsPage/ContactsPage.module.css";

export default function ContactsPage() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Request in progress...</b>}
      {error && <b>Error</b>}
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
