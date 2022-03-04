import './App.css';
import React from 'react';


class Form extends React.Component {
  constructor({color="Blue", count=5 }) {
    super();
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.state = { color: color, count: count };
    this.rebuildSVGList();
  }

  handleColorChange(e) {
    this.setState({color: e.target.value});
    this.rebuildSVGList();
  }

  handleCountChange(e){
    this.setState({count: e.target.value});
    this.rebuildSVGList();
  }

  rebuildSVGList() {
    const list = [];
    for (let i = 0; i <= this.state.count; i++) {
      list.push(
        <SVGRect key={i} width={200} fill="rgb(255,0,0)" />
      )
    }
    this.setState({ list: list });
  }

  render() {
    return (  
      <div>
        <input onChange={this.handleColorChange} type="color" id="color" name="color" required  size="10" value={this.state.color}></input>
        <input onChange={this.handleCountChange} type="number" id="count" name="count" required value={this.state.count}></input>
        {this.state.list}
      </div>
    );
  }
}

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

const SVGTriangle = ({points = "0,200 200,100 0,0", height = 200, width = 200, stroke = "rgb(0,0,0)", strokeWidth = 20, fill = "rgb(0,0,255)" }) => {
  return (
    <svg height={height} width={width} >
      <polygon points={points} stroke={stroke} strokeWidth={strokeWidth} fill={fill}   />
    </svg>
    );
}

const SVGQuoarterCircle = ({height = 200, width = 200, cx=0, cy=200, r=width, stroke = "rgb(0,0,0)", strokeWidth = 10, fill = "rgb(0,0,255)"   }) => {
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
        {/* <SVGRect />
        <SVGRect width={200}  fill="rgb(0,255,0)"/>
        <SVGRect width={200} fill="rgb(255,0,0)" />
        <SVGCircle />
        <SVGTriangle fill="rgb(255,0,0)" />
        <SVGQuoarterCircle /> */}
      </header>
      <Form />
      {/* <List /> */}
    </div>
  );
}

export default App;
