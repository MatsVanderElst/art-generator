import './App.css';
import React from 'react';


class Form extends React.Component {
   types = ['rect', 'circle', 'triangle', 'quarter'];

  constructor({color1="#990000",color2="#009900",color3="#000099", count=165, width=50 }) {
    super();
    this.handleColor1Change = this.handleColor1Change.bind(this);
    this.handleColor2Change = this.handleColor2Change.bind(this);
    this.handleColor3Change = this.handleColor3Change.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.state = {count: count, width: width, color1: color1, color2: color2, color3: color3 };
  }

  componentDidMount = () => {
    this.rebuildSVGList();
  }

  handleColor1Change(e) {
    this.setState({color1: [e.target.value]});
    this.rebuildSVGList();
  }

  handleColor2Change(e) {
    this.setState({color2: [e.target.value]});
    this.rebuildSVGList();
  }

  handleColor3Change(e) {
    this.setState({color3: [e.target.value]});
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
        switch (this.getRandomSVGType()) {
          case 'rect':
            list.push(<SVGRect key={i} width={width} height={width} fill={this.getRandomColor()} />)
            break;
          case 'triangle':
            list.push(<SVGTriangle key={i} width={width} height={width} fill={this.getRandomColor()} transform={this.getRandomRotation()} />)
            break;
          
          default:
            list.push(<SVGCircle key={i} width={width} height={width} fill={this.getRandomColor()} />)
            break;
        }
    
    }
    this.setState({ list: list });
  }

  getRandomColor = () => {
    const colors = [this.state.color1, this.state.color2, this.state.color3];
    return colors[Math.floor(Math.random() * (3))];
  }

  getRandomSVGType = () => {
    const typeIndex = Math.floor(Math.random() * (3));
    return this.types[typeIndex];
  }

  getRandomRotation = () => {
    const rotationIndex = Math.floor(Math.random() * (3));

    switch (rotationIndex) {
      case 0:
        return 'rotate(90)'
        break;
      case 1:
        return 'rotate(180)'
        break;
      case 2:
        return 'rotate(270)'
        break;
    
      default:
        return 'rotate(360)'
        break;
    }
  }

  render() {
    return (  
      <div>
      <form>
        <input onChange={this.handleColor1Change} type="color" id="color0" name="color" required size="10" value={this.state.color1}></input>
        <input onChange={this.handleColor2Change} type="color" id="color1" name="color" required size="10" value={this.state.color2}></input>
        <input onChange={this.handleColor3Change} type="color" id="color2" name="color" required  size="10" value={this.state.color3}></input>
        <input onChange={this.handleCountChange} type="number" id="count" name="count" required value={this.state.count}></input>
        <input onChange={this.handleWidthChange} type="number" id="width" name="width" required value={this.state.width}></input>
      </form>
        
        <div className='art__container'>
          {this.state.list}
        </div>
      </div>
    );
  }
}



const SVGRect = ({width = 200, height = 200, fill = "rgb(0,0,255)", stroke = "rgb(0,0,0)", strokeWidth = 10 }) => {
  return (
    <svg width={width/* +strokeWidth */} height={height/* +strokeWidth */}>
      <rect /* x={(5)} y={(5)} */ width={width} height={height} style={{fill:fill,stroke:stroke,strokeWidth:strokeWidth}} />
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

const SVGTriangle = ({points = `0,200 200,100 0,0`, height = 200, width = 200, stroke = "rgb(0,0,0)", strokeWidth = 10, fill = "rgb(0,0,255)", transform="rotate(0)" }) => {
  return (
    <svg height={height} width={width} >
      <polygon points={`0,${width} ${width},${width/2} 0,0`} stroke={stroke} strokeWidth={strokeWidth} fill={fill} transform={transform} transform-origin={"center"} />
    </svg>
    );
}

const SVGQuoarterCircle = ({height = 200, width = 200, cx=0, cy=200, r=width, stroke = "rgb(0,0,0)", strokeWidth = width/20, fill = "rgb(0,0,255)"   }) => {
  return (
    <svg height={height} width={width}>
      <circle cx={cx} cy={cy} r={r} stroke={stroke} strokeWidth={strokeWidth} fill={fill} />
    </svg>
    );
}




function App() {
  return (
    <div className="App">
      <div className="form__container">
        <Form />
      </div>
    </div>
  );
}

export default App;
