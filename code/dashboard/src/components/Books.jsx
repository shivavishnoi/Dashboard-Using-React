import books from '../data/books.json';
import Book from './Book';
function Books() {
  return (
    <section className="books">
      {books.map((book) => {
        return <Book details={book} key={book.isbn} />;
      })}
    </section>
  );
}
export default Books;
