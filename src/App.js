import './App.css';
import React from 'react';


class Form extends React.Component {
  constructor({colors=["#990000","#009900","#000099"], count=5, width=150 }) {
    super();
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.state = { colors: colors, count: count, width: width };
    this.rebuildSVGList();
  }

  handleColorChange(e) {
    newColors = [];
    this.setState({colors: [e.target.value]});
    this.rebuildSVGList();
  }

  handleCountChange(e){
    this.setState({count: e.target.value}); 
    this.rebuildSVGList(e.target.value);
  }

  handleWidthChange(e) {
    this.setState({width: e.target.value});
    this.rebuildSVGList(this.state.count, e.target.value);
  }

  rebuildSVGList(count=this.state.count, width=this.state.width) {
    const list = [];
    for (let i = 1; i <= count; i++) {
      list.push(
        <SVGRect key={i} width={width} height={width} fill="rgb(255,0,0)" />
      )
    }
    this.setState({ list: list });
  }

  render() {
    return (  
      <div>
        <input onChange={this.handleColorChange} type="color" id="color0" colorIndex={0} name="color" required size="10" value={this.state.colors[0]}></input>
        <input onChange={this.handleColorChange} type="color" id="color1" colorIndex={1} name="color" required size="10" value={this.state.colors[1]}></input>
        <input onChange={this.handleColorChange} type="color" id="color2" colorIndex={2} name="color" required  size="10" value={this.state.colors[2]}></input>
        <input onChange={this.handleCountChange} type="number" id="count" name="count" required value={this.state.count}></input>
        <input onChange={this.handleWidthChange} type="number" id="width" name="width" required value={this.state.width}></input>
        <div className='art__container'>
          {this.state.list}
        </div>
      </div>
    );
  }
}

const getRandomColor = () => {
  return this.state.colors(getRandomInt(3));
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
        
      </header>
      <div className="form__container">
        <Form />
      </div>
      
    </div>
  );
}

export default App;
