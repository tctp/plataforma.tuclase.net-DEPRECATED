import React from 'react'
import './tctpGaleriaMultimedia.css';
import { Carousel, Modal, Icon, Button, Row, Col } from 'antd';


let slide;

function setResourcesRender(app) {
  if (app.key == 'youtube') {    
    return  <div className="embed-container">    
    <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${app.props.data}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; cc_load_policy=1; hl=es;" frameBorder="0" allowFullScreen></iframe>
    </div>
  } else if (app.key == 'vimeo') {
    return <div className="embed-container"><iframe width="90%" height="700" src={`https://player.vimeo.com/video/${app.props.data}?title=0&byline=0&portrait=0`} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe></div>
  } else if (app.key == 'app') {
    return <div className="embed-container"><iframe width="90%" height="700" src={`https://cdn.tuclase.net/catalogo-multimedia/${app.props.data}/story_html5.html`} frameBorder="0" allowFullScreen></iframe></div>
  } else if (app.key == 'img') {
    return <img width="90%" height="700" src={app.props.data} />
  }
}


function next() {
  slide.slick.slickNext()
}

function prev() {
  slide.slick.slickPrev()
}

export const TctpGaleriaMultimedia = (props) => {

  let { children } = props;
  
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={1}>
        {
          children.length > 0 ? <Button shape="circle" icon="left" onClick={prev} /> :<span></span>
        }
          
        </Col>
        <Col span={20}>
          <Carousel ref={node => { slide = node }} {...settings}>
            {
              children.length > 0 ?
                children.map((app, i) => {
                  return <div key={i}>
                    {setResourcesRender(app)}
                  </div>
                })
                :
                setResourcesRender(children)
            }
          </Carousel>
        </Col>
        <Col span={1}>
          {
            children.length > 0 ? <Button shape="circle" icon="right" onClick={next} /> :<span></span>
          }
        </Col>
      </Row>
    </div>
  )
}

export const TctpMedia = (props) => <p></p>

