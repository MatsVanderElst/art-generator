import logo from './logo.svg';
import './App.css';

const SVGComponent = (props) => {
  return (
    <svg width={props.width} height="200">
      <rect width={props.width} height="200" style={{fill:"rgb(0,0,255)",stroke:"rgb(0,0,0)",strokeWidth:"10"}} />
    </svg>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SVGComponent width={200} />
        <SVGComponent width={180} />
        
      </header>
    </div>
  );
}

export default App;
