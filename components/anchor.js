
import React from 'react'

class Anchor extends React.Component {

  state={
    loading:true
  }
  componentDidMount() {
    this.setState({loading:false})
  }

  createTextNode(){
    let nodes = document.querySelectorAll("h3 > a");    
    nodes.forEach((node)=>{
      let textnode = document.createTextNode(" ¶ ");
      node.appendChild(textnode);  
      node.classList.add("anchor")
    })  
  }

  render() {   
    if(!this.state.loading){
      return (
        <div>   
          {this.createTextNode()}       
       </div>
     )
    }else{
      return <div>cargando...</div>
    }

  }
}

export default Anchor