import BookCard from "../BookCard/BookCard";
import styles from "./BooksList.module.scss";
import { fetchBooks } from "../../services/fetchBooks";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const BooksList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [modalIndex, setModalIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    setBooks([]);

    fetchBooks(searchTerm).then((books) => {
      setBooks(books);
    });
  }, [searchTerm]);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const changeModalIndex = (index) => {
    setModalIndex(index);
  };

  return (
    <div className={styles.booksList}>
      {books.map((book, index) => {
        return (
          <BookCard
            key={index}
            index={index}
            data={book}
            showModal={toggleShowModal}
            setIndex={changeModalIndex}
          />
        );
      })}

      {showModal && (
        <Modal
          toggleShowModal={toggleShowModal}
          modalIsShown={showModal}
          item={{ ...books[modalIndex] }}
        />
      )}
    </div>
  );
};

export default BooksList;

// const BooksList = (data) => {
// const numberOfItems = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

//   return (
//     <div className={styles.booksList}>
//       { numberOfItems.map((item, index) => (
//         <BookCard key={index}>Hello</BookCard>
//       ))}
//     </div>
//   );
// };
