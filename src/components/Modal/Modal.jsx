import { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import noImageAvailable from "../../assets/NoImageAvailable.png";

const Modal = ({ showModal, item }) => {
  const [modalShown, setModalShown] = useState(true);
  const {
    title,
    author,
    description,
    image,
    language,
    googleBooks,
    releaseDate,
  } = item;

  useEffect(() => {
    if (!modalShown) {
      return;
    }
    const escapeListen = (e) => {
      if (e.key === "Escape") {
        showModal();
        setModalShown(false);
      }
    };
    window.addEventListener("keydown", escapeListen);
    return () => window.removeEventListener("keydown", escapeListen);
  }, []);

  return (
    <>
      <div className={styles.overlay} onClick={showModal}></div>
      <article className={styles.card}>
        <div className={styles.card__details}>
          <h4 className={styles.card__title}> {item.title}</h4>
          <p className={styles.card__author}>
            {" "}
            <span>Author:</span> {item.author}
          </p>
          <p>
            {" "}
            <span> Release Date:</span> {item.releaseDate}
          </p>
          <p>
            {" "}
            <span> Language:</span> {item.language}
          </p>
          <p>
            {" "}
            <span> Description:</span> {item.description}
          </p>
        </div>
        <img
          className={styles.card__image}
          src={item.image || noImageAvailable}
          alt="book's image"
        />
      </article>
    </>
  );
};

export default Modal;
