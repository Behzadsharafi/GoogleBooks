import styles from "./Header.module.scss";
import HeaderImage from "../../assets/Header.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={HeaderImage} alt="Header Image" />
      <h1 className={styles.header__title}>
        We help you find amazing books on any topic!
      </h1>
    </div>
  );
};

export default Header;
