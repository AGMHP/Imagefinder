import React from 'react';
import './image-list.css';

class imagecard extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { span:0 };
        this.imageRef = React.createRef();
    }
    
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.spanSet);
    }
    spanSet = () =>{
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height/10 +1);
        console.log(height+" "+span);
        this.setState({span});
    }
    render(){
     return(
         <div style={{gridRowEnd:`span ${this.state.span}`}}>
            <img ref={this.imageRef}
            src={this.props.image.urls.regular} 
            alt={this.props.image.alt_description} 
            />
          </div>  
        );
    };    
}

export default imagecard;