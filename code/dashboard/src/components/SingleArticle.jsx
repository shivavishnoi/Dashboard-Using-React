import React from 'react';
import { Audio } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
class SingleArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }
  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ article: data });
      });
  }
  render() {
    if (!this.state.article) {
      return (
        <div className="loader">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      );
    }
    return (
      <section className="single-article">
        <span>
          <Link to="/articles">👈 Go Back to articles</Link>
        </span>
        <h3>{this.state.article.title}</h3>
        <p>{this.state.article.body}</p>
      </section>
    );
  }
}
export default SingleArticle;
