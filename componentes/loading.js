
import React from 'react'
import { Spin } from 'antd';

export default () => (
    <div className="loading">
        <Spin size="large" tip="Cargando sitio por favor espere..." />
    </div> 
  )