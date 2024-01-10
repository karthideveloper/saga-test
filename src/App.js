import logo from './logo.svg';
import './App.css';
import { Provider} from 'react-redux';
import configStore from './store';
import TestComp from './reduxTestComp';

function App() {
  return (
    <Provider store={configStore()}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TestComp/>
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
    </Provider>
  );
}

export default App;
