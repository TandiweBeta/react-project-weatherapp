
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>
        <footer>
          This project was coded by
          <a
            href="https://github.com/TandiweBeta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Tandiwe Beta
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/TandiweBeta/react-project-weatherapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on Github{" "}
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weatherapp-react-tandi.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}


