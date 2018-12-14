
import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;

export default class extends React.Component {

  state={
    loading:true,
    menu:[]
  }
  componentDidMount() {
    this.setState({loading:false})
    this.createTextNode();
  }

  createTextNode(){
    let array=[];
    let nodes = document.querySelectorAll("h3 > a");    
    nodes.forEach((node)=>{
      let textnode = document.createTextNode(" ¶ ");
      node.appendChild(textnode);  
      node.classList.add("anchor")
      let items = {
        title:node.innerHTML.replace("¶", ""),
        href:node.href
      }
      array.push(items);
    })  
    this.setState({menu:array}); 
  }

  render() {   
    if(!this.state.loading){
      return (
        <div style={{float:'right'}}>   
              <Anchor affix={true}>
                  {
                      this.state.menu.map((m, i)=>{
                        return <Link key={i} href={m.href} title={m.title}/>
                      })
                  }
              </Anchor>      
       </div>
     )
    }else{
      return <div>cargando...</div>
    }

  }
}