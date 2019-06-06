import { Collapse  } from 'antd';
const Panel = Collapse.Panel;

export default class extends React.Component {

  setHash=(e)=> {        
    window.location.hash = e ? e : '';    
  }

  render() {   
    let hash = window.location.hash.split('#')[1];  
    return (
      <div>
        <Collapse bordered={false} defaultActiveKey={hash} onChange={()=>{this.setHash(this.props.id)}}>
          <Panel header={this.props.titulo} key={this.props.id} id={this.props.id}>
            {this.props.html}
            {
              this.props.imgPath ? <img src={this.props.imgPath} /> : <span></span>
            }
          </Panel>
        </Collapse>
      </div>
    )
  }

}
