import { Collapse  } from 'antd';
import Router from 'next/router'
const { Panel } = Collapse;

export default class extends React.Component {

  state={    
    hash:null,
    isReady:false
  }

  setHash=(e)=> {         
    window.location.hash = e ? e : '';             
  }

  componentDidMount(){          
    this.setState({isReady:true})    
  }

  
  setImg(img){    
    if(img){
      if(Array.isArray(img)){       
       return img.map((i, n)=>{
        return <span key={n}>{n+1} <img src={i} style={{width:'100%', maxWidth:'900px'}}/><br/><br/></span>
       })
      }else{
        return <img src={this.props.imgPath} style={{width:'100%', maxWidth:'900px'}}/>
      }
    }else{
      return <span></span>
    }

  }

  limpiarCadenaTexto(txt) {
    let r = txt.toLowerCase();
    r = r.replace(new RegExp(/ /g), "-");
    r = r.replace(new RegExp(/[àáâãäå]/g), "a");
    r = r.replace(new RegExp(/ç/g), "c");
    r = r.replace(new RegExp(/[èéêë]/g), "e");
    r = r.replace(new RegExp(/[ìíîï]/g), "i");
    r = r.replace(new RegExp(/[òóôõö]/g), "o");
    r = r.replace(new RegExp(/[ùúûü]/g), "u");
    r = r.replace(new RegExp(/[?¿!¡]/g), "");
    return r;
  }

  render() {          
    let id = this.limpiarCadenaTexto(this.props.titulo); 
    if(this.state.isReady){
      let hash = window.location.hash.split('#')[1];         
      return (
        <div id={id}>        
          <Collapse key={id} accordion bordered={false} defaultActiveKey={hash} onChange={() => { this.setHash(id) }}>
            <Panel header={this.props.titulo} key={id}>
             <p dangerouslySetInnerHTML={{__html: this.props.html}}></p>
             {this.setImg(this.props.imgPath)}
            </Panel>
          </Collapse>        
        </div>
      )
    }else{
      return <span></span>
    }

  }

}
