
import { Modal, Button, Icon } from 'antd';

export default class extends React.Component {

  state={
    visible:false    
  }

  setResourcesRender = () => {
    let { video } = this.props;    
    video = new URL(video);
  
    if (video.host == 'www.youtube.com') {      
      return <div className="embed-container">
          <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${video.searchParams.get('v')}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; cc_load_policy=1; hl=es;" frameBorder="0" allowFullScreen></iframe>
      </div>
    } else if (video.host == 'vimeo.com') {      
      return <div className="embed-container"><iframe width="90%" height="700" src={`https://player.vimeo.com/video/${video.pathname.substring(1)}?title=0&byline=0&portrait=0`} frameBorder="1" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe></div>
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
        <Button type="default" icon="video-camera" onClick={this.showModal}>Ver video explicativo</Button>        
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
