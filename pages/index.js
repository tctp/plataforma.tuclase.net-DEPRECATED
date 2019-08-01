import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  componentDidMount(){
    Router.push('/es-cl/tctp-lms-bs/home');
  }
  render(){
    return <span></span>
  }
}