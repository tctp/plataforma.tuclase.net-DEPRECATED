import { Row, Col, Alert, Icon, Drawer, Button } from 'antd';

export default class extends React.Component {

  state = { visible: false, placement: 'top', loading: true };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  componentDidMount() {
    this.setState({ loading: false })
  }

  setResourcesRender = () => {
    let { video, tipo, children } = this.props;
    if (tipo == 'youtube') {
      return <div className="embed-container">
        <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${video}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; cc_load_policy=1; hl=es;" frameBorder="0" allowFullScreen></iframe>
      </div>
    } else if (tipo == 'vimeo') {
      return <div className="embed-container"><iframe width="90%" height="700" src={`https://player.vimeo.com/video/${video}?title=0&byline=0&portrait=0`} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe></div>
    } else if (tipo == 'props') {
      return <div className="embed-container"><iframe width="90%" height="700" src={`https://cdn.tuclase.net/catalogo-multimedia/${video}/story_html5.html`} frameBorder="0" allowFullScreen></iframe></div>
    }
  }

  render() {
      return (
        <div>
          <br />
          <Row type="flex" justify="space-around" align="middle">
            <Col span={1}></Col>
            <Col span={20}>
              {this.setResourcesRender(this.props)}
              <Button type="link" style={{ float: 'right' }} onClick={this.showDrawer}><Icon type="eye" theme="filled" /> Traducir subtítulos</Button>
            </Col>
            <Col span={1}></Col>
          </Row>
          <Drawer
            title="Traducción de subtitulos"
            placement={this.state.placement}
            closable={false}
            height={'350px'}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div>
              Para traducir los subtitulos de los videos, haz clic en <Icon type="setting" /> para ir a configuración y luego /subtítulos/traducción automática/español<br /><br />
              <img src="/static/imagenes/ayuda/menu-subtitulos.png" />
            </div>
          </Drawer>
        </div>
      )
    
  }

}
