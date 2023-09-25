import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="src\assets\Header.jpg" alt="Header Image" />
      <h1 className={styles.header__title}>
        We help you find amazing books on any topic!{" "}
      </h1>
    </div>
  );
};

export default Header;
