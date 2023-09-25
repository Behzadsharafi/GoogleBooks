import styles from "./Form.module.scss";
import magnifier from "../../assets/Magnifier.svg";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className={styles.form} action="">
      <input
        className={styles.form__input}
        onChange={onInputChange}
        type="text"
        placeholder="Search by title"
      />
      <button onClick={handleSubmit}>
        <img src={magnifier} alt="magnifier" />
      </button>
    </form>
  );
};

export default Form;
