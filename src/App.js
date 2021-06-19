import logo from './logo.svg';
import './App.scss';
import bcrypt from 'bcryptjs';

const passwordHash = "$2a$10$isYv/GTTBnMGvpFUXHr6Eu44aox/r/rbE3nO4VOxKEj6LhnOwIs3K";


function App() {
  // var salt = bcrypt.genSaltSync(10);
  // var hash = bcrypt.hashSync("password!", salt);
  // console.log(hash);

  var isAuthtorized = bcrypt.compareSync("password!", passwordHash);
  console.log(isAuthtorized);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Edited!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
