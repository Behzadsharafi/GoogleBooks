import styles from "./BookCard.module.scss";
import noImageAvailable from "../../assets/NoImageAvailable.png";

const BookCard = ({ data, index, showModal, setIndex }) => {
  const { title, author, image, description } = data;

  const handleClick = (index) => {
    showModal();
    setIndex(index);
  };

  return (
    <article
      className={styles.bookCard}
      onClick={() => {
        handleClick(index);
      }}
    >
      <div className={styles.bookCard__details}>
        <h4 className={styles.bookCard__title}> {data.title}</h4>
        <p className={styles.bookCard__author}>
          {" "}
          <span>Author:</span> {data.author}
        </p>
        <p>
          {" "}
          <span> Release Date:</span> {data.releaseDate}
        </p>
      </div>
      <img src={data.image || noImageAvailable} alt="book's image" />
      {/* <img src={data.image || noImage} alt="book's image" /> */}
    </article>
  );
};

export default BookCard;
