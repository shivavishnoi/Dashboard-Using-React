import people from '../data/got.json';
import React from 'react';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  handleSearch = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    //modify using concat
    let filteredArray = people
      .reduce((acc, cv) => {
        cv.people.forEach((person) => {
          acc.push(person);
        });
        return acc;
      }, [])
      .filter((person) =>
        person.name
          .toLowerCase()
          .includes(this.state.searchText.toLocaleLowerCase())
      );
    // console.log(filteredArray);
    return (
      <section>
        <input
          type="text"
          value={this.state.searchText}
          className="search-bar"
          placeholder="Search People"
          onChange={this.handleSearch}
        />
        <div className="people">
          {filteredArray.map((person) => {
            return (
              <div key={person.name} className="person-card">
                <div className="main-info">
                  <img src={person.image} />
                  <h4>{person.name}</h4>
                </div>
                <p>{person.description}</p>
                <a href={person.wikiLink}>Learn More</a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default People;
