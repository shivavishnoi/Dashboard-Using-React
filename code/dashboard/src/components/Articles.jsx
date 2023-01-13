import React from 'react';
import { Audio } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      data: null,
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  handleSearch = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    if (!this.state.data) {
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
    let filteredData = this.state.data.filter((data) => {
      return data.title
        .toLowerCase()
        .includes(this.state.searchText.toLocaleLowerCase());
    });
    return (
      <section className="articles">
        <input
          type="text"
          className="search-bar"
          value={this.state.searchText}
          onChange={this.handleSearch}
          placeholder="Search Articles"
        />
        {filteredData.map((article) => (
          <Link key={article.id} to={`/articles/${article.id}`}>
            <h3>{article.title}</h3>
          </Link>
        ))}
      </section>
    );
  }
}
export default Articles;
