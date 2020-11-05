import React from 'react';
import Badge from "react-bootstrap/Badge";
import './App.css';
let marked=require("marked");

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      markdown:"",
    };
  }

  showPreview(markdown){
    this.setState({markdown});
  }

  render(){
    var textStyle={
      width:"500px",
      height:"50vh",
      marginLeft:"auto",
      marginRight:"auto",
      padding:"10px",
      borderWidth:"3px",
      borderColor:"black",
      borderRadius:"10px"
    };
    var previewStyle={
      width:"500px",
      height:"50vh",
      marginLeft:"auto",
      marginRight:"auto",
      backgroundColor:"#DCDCDC",
      padding:"10px",
      borderRadius:"10px"
    };

    
    return(
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
        <h1>
          <Badge variant="light" className="text-align-center">MARKDOWN PREVIEWER</Badge>
        </h1>
        </div>
        </div>
      
        <div className="row mt-4">
          <div className="col-md-6">
          <div className="col text-center">
            <h3>
              <Badge className="text-align-center" variant="secondary">MARKDOWN INPUT</Badge>
              <div className="mark-input" style={textStyle} >
              <textarea className="input"  style={textStyle} value={this.state.markdown} onChange={(e)=>{
                this.showPreview(e.target.value);
              }}>Write your text here</textarea>
            </div>
            </h3>
          </div>
          </div>
            
          <div className="col-md-6">
          <div className="col text-center">
            <h3>
              <Badge className="text-align-center" variant="secondary">MARKDOWN OUTPUT</Badge>
            </h3>
          </div>
          <div class="preeti" style={previewStyle}  dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}}></div>
          </div>
        </div>

       </div>
    </div>
    );
  }
} 
