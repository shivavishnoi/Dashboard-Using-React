function Book(props) {
  return (
    <div className="book">
      <img src={props.details.image} />
      <h4>{props.details.title}</h4>
      <span>Author: {props.details.author}</span>
      <button>
        <a href={props.details.website}>Buy Now</a>
      </button>
    </div>
  );
}

export default Book;
