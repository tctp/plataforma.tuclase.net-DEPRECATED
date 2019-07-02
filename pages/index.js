import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  componentDidMount(){
    Router.push('/home_es-cl');
  }
  render(){
    return <span></span>
  }
}