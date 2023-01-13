import { Link } from 'react-router-dom';
function Home() {
  return (
    <section className="home">
      <h3>Welcome to Homepage 🚀</h3>
      <div className="home-links">
        <div>
          <Link to="/articles">Articles Page</Link>
        </div>
        <div>
          <Link to="/books">Books Page</Link>
        </div>
        <div>
          <Link to="/people">People Page</Link>
        </div>
      </div>
    </section>
  );
}
export default Home;
