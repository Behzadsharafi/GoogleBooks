import styles from "./Error.module.scss";

const Error = ({ searchTerm }) => {
  return (
    <div className={styles.error}>
      No results were found for "<strong>{searchTerm}</strong>"
      <p>Please try different keywords</p>
    </div>
  );
};

export default Error;
