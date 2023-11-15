import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src="https://www.inc-aus.com/wp-content/uploads/sites/2/2023/02/getty_655998316_2000149920009280219_363765.jpg?w=733"
        alt="Header Image"
      />
      <h1 className={styles.header__title}>
        We help you find amazing books on any topic!!
      </h1>
    </div>
  );
};

export default Header;
