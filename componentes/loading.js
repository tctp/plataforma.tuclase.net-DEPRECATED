
import React from 'react'
import { Spin, Icon } from 'antd';

export default (props) => (
    <div className="loading">        
        <Spin size="large" tip={props.msj} />
    </div> 
  )