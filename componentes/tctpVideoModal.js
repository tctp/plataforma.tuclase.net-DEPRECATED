
import { Modal, Button, Icon } from 'antd';

export default class extends React.Component {

  state={
    visible:false    
  }

  setResourcesRender=()=> {        
    let {data, tipo, children} = this.props;
    if (tipo == 'youtube') {
      return <div className="embed-container">
        <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${data}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; cc_load_policy=1; hl=es;" frameBorder="0" allowFullScreen></iframe>
      </div>
    } else if (tipo == 'vimeo') {
      return <div className="embed-container"><iframe width="90%" height="700" src={`https://player.vimeo.com/video/${data}?title=0&byline=0&portrait=0`} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe></div>
    } else if (tipo == 'props') {
      return <div className="embed-container"><iframe width="90%" height="700" src={`https://cdn.tuclase.net/catalogo-multimedia/${data}/story_html5.html`} frameBorder="0" allowFullScreen></iframe></div>
    }
}

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };


  render() {      
      return(
      <div>
        <Button type="link" onClick={this.showModal}><Icon type="video-camera" />Ver video explicativo</Button>        
          <Modal
            title={this.props.titulo}
            width={'50%'}
            destroyOnClose={true}
            visible={this.state.visible}
            onOk={this.hideModal}
            onCancel={this.hideModal}
            okText="Ok"
            cancelText="Cancelar"
          >
            {this.setResourcesRender(this.props)}
          </Modal>
      </div>
      )
  }

}
