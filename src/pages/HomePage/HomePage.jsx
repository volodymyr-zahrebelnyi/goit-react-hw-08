import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>
        <span className={css.spanTitle}>ContactBook</span> welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          📙
        </span>
      </PageTitle>
      <p>
        Welcome to ContactBook, your personal tool for effortlessly managing
        contacts. Keep all your important connections organized in one place,
        easily searchable and accessible whenever you need them. Whether you're
        adding new contacts, updating information, or finding the right person
        in seconds, ContactBook is designed to simplify your life. Enjoy a
        seamless experience and never lose track of your network again!
      </p>
    </div>
  );
}
