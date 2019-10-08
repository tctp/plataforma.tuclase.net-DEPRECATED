import React from 'react'
import { Row, Col } from 'antd'

export default class extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Row>
        <Col xs={4} sm={6} md={6} lg={6} xl={5}></Col>
          <Col xs={16} sm={12} md={12} lg={12} xl={14}>
            <h1>Bienvenidos al sitio de documentación</h1>
            <p>Aqui encontrarás información relacionada con los sistemas utilizados en Tu clase, tu país. <br/>La información esta orientada al conocimiento general de los sistemas. Los recursos utilizados para documentar consideran videos, imágenes y links a documentación oficial.</p>
            <p>Puedes utilizar el buscador para encontrar información específica o navegar a través del menú, para encontrar los contenidos disponibles</p>
          </Col>
          <Col xs={4} sm={6} md={6} lg={6} xl={5}></Col>
        </Row>
      </div>
    );
  }
}