import './App.css';
import MiniDrawer from './components/Drawer/Drawer';
import book2 from './assets/book2.svg';
function App() {
  return (
    <>
      <MiniDrawer></MiniDrawer>
      <div className="main-container">
        <div className="content">
          <div className="text-container">
            <h1>Welcome to LiBee</h1>
            <span>Search for random books</span>
            <span>Save your favorite books and mark them as read</span>
            <span>Customize your own library</span>
          </div>
          <div className="img-container">
            <img src={book2} alt="book2" />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="footer__copyright">Made with 💜 by Yasmim Corrêa</p>
      </footer>
    </>
  );
}

export default App;
