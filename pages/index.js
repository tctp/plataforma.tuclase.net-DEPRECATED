import React from 'react'
import Router from 'next/router'
import Loading from '../componentes/loading'

export default class extends React.Component {
  componentDidMount() {
    Router.push(`/home_${this.props.lang}`)
  }
  render() {
    return <Loading />
  }
}