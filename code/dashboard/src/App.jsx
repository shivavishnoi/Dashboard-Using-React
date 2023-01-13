import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero">
        <Sidebar />
        <Main />
      </section>
    </div>
  );
}
//Header,sidebar,Main
export default App;
