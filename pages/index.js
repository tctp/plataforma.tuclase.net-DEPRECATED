import React from 'react'
import Router from 'next/router'

class Index extends React.Component {
  componentDidMount() {    
    Router.push('/home_es-cl')
  }

  render() {    
    return (
       <div>
            Cargando...
      </div>
    )
  }
}

export default Index