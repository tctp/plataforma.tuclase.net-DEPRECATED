import React from 'react'
import Router from 'next/router'
import { message } from 'antd';

export default class extends React.Component {

  state = {
    loading: true,
  }

  componentDidMount() {
    this.setState({ loading: false })
    this.createIconNode();
    Router.events.on('routeChangeComplete', this.handleRouteChange)
  }

  handleRouteChange = () => {
    this.createIconNode();
  }

  copyToClipboard = (e) => {
    console.log(e);
    let textField = document.createElement('textarea')
    let id = e;
    textField.innerText = `${window.location.origin}${window.location.pathname}#${id}`
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    message.success('Url copiada');
  }

  createIconNode() {
    let nodes = document.querySelectorAll("h3");
    let comprobar = document.querySelector(".iconCopy");
    if (!comprobar) {
      nodes.forEach((node) => {
        let span = node.querySelector('span');
        if (span) {
          span.classList.add('iconCopy');
          let that = this;
          span.innerHTML = `<svg viewBox="64 64 896 896" class="" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg>&nbsp;`
          span.addEventListener('click', function () {
            that.copyToClipboard(span.id)
          });
        }
      })
    }
  }


  render() {
    if (!this.state.loading) {
      return (
        <div>&nbsp;</div>
      )
    } else {
      return <div>cargando...</div>
    }

  }
}