import React from 'react'
import { Icon, message } from 'antd';

function copyToClipboard(){   
  let textField = document.createElement('textarea')
    textField.innerText = window.location.href
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    message.success('Url copiada');
}

export default () => (
  <div className={'iconCopy'} onClick={copyToClipboard}>
    <Icon type="copy"/>&nbsp;
  </div>
)