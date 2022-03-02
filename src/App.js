import logo from './logo.svg';
import './App.css';

const SVGComponent = ({width = 200, height = 200, fill = "rgb(0,0,255)", stroke = "rgb(0,0,0)", strokeWidth = 10 }) => {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} style={{fill:fill,stroke:stroke,strokeWidth:strokeWidth}} />
    </svg>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SVGComponent/>
        <SVGComponent width={180}  fill="rgb(0,255,0)"/>
        <SVGComponent width={200}  fill="rgb(255,0,0)"/>
      </header>
    </div>
  );
}

export default App;
