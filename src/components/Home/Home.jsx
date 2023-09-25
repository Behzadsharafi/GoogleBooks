import styles from "./Home.module.scss";
import Header from "../Header/Header";
import Form from "../Form/Form";
import { useState } from "react";
import BooksList from "../BooksList/BooksList";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className={styles.home}>
      <Header />
      <Form onSubmit={handleSubmit} />
      <BooksList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
