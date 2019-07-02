import { Collapse  } from 'antd';
import Router from 'next/router'
const Panel = Collapse.Panel;

export default class extends React.Component {

  state={    
    hash:null
  }
  setHash=(e)=> {        
    window.location.hash = e ? e : '';    
  }

  componentDidMount(){
    this.getUrlHash();
    Router.events.on('routeChangeComplete', this.handleRouteChange)      
  }

  handleRouteChange = () => {
    this.getUrlHash();
  }

  getUrlHash(){     
    this.setState({hash:Router.router.asPath.split('#')[1]})
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
    let {hash} = this.state;      
    let id = this.limpiarCadenaTexto(this.props.titulo); 
    return (
      <div>
        <Collapse bordered={false} defaultActiveKey={hash} onChange={()=>{this.setHash(id)}}>
          <Panel header={this.props.titulo} key={id} id={id}>
           <p dangerouslySetInnerHTML={{__html: this.props.html}}></p>
            {
              this.props.imgPath ? <img src={this.props.imgPath} /> : <span></span>
            }
          </Panel>
        </Collapse>
      </div>
    )
  }

}
