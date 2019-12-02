
import React from 'react'
import { Spin } from 'antd';

export default (props) => (
    <div className="loading">
        <Spin size="large" tip={props.msj} />
    </div> 
  )