import logo from './logo.svg';
import './App.css';

const SVGRect = ({width = 200, height = 200, fill = "rgb(0,0,255)", stroke = "rgb(0,0,0)", strokeWidth = 10 }) => {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} style={{fill:fill,stroke:stroke,strokeWidth:strokeWidth}} />
    </svg>
    );
}

const SVGCircle = ({height = 200, width = 200, cx=1/2*width, cy=1/2*width, r=1/2*width, stroke = "rgb(0,0,0)", strokeWidth = 10, fill = "rgb(0,0,255)"   }) => {
  return (
    <svg height={height} width={width}>
      <circle cx={cx} cy={cy} r={r} stroke={stroke} strokeWidth={strokeWidth} fill={fill} />
    </svg>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SVGRect />
        <SVGRect width={180}  fill="rgb(0,255,0)"/>
        <SVGRect width={200} fill="rgb(255,0,0)" />
        <SVGCircle />
      </header>
    </div>
  );
}

export default App;
