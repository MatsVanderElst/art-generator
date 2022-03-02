import logo from './logo.svg';
import './App.css';

const SVGComponent = ({width = 200}) => {
  return (
    <svg width={width} height="200">
      <rect width={width} height="200" style={{fill:"rgb(0,0,255)",stroke:"rgb(0,0,0)",strokeWidth:"10"}} />
    </svg>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SVGComponent/>
        <SVGComponent width={180} />
        
      </header>
    </div>
  );
}

export default App;
