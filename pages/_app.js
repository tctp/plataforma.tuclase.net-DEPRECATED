import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { addLocaleData } from 'react-intl';
import { Affix, Layout, Row, Col, Select, Icon, Input } from 'antd'
import Menu from '../components/menu'
import Loading from '../components/loading'
import v from '../config/version.json'
import './style.css'

const Search = Input.Search;
const Option = Select.Option;
const { Header, Content, Footer, Sider } = Layout;

class SmartComponent extends React.Component {

  state = {
    lang: 'es-cl',
    collapsed: false,
    mobile: false,
    loading: true,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentDidMount(){
    this.getIdioma(this.state.lang);
  }
  
  getIdioma=(i)=>{          
    addLocaleData(require(`react-intl/locale-data/${i.slice(0,2)}`)); //carga dinamica de libreria para idioma        
  }

  handleChange = (value) => {
    this.getIdioma(value);
    this.setState({ lang: value })
    Router.push(`${Router.router.pathname.substring(0, Router.router.pathname.lastIndexOf("_"))}_${value}`)
  }

  onBreakpointChange = (broken) => {
    if (broken) {
      this.setState({
        mobile: true,
        collapsed:true
      });
    } else {
      this.setState({
        mobile: false,
        collapsed:false
      });
    }
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Documentación tu clase, tu país</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
          <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
        </Head>
        <Header style={{background:'#f0f2f5'}}>
          <Row gutter={12}>
            <Col xs={24} sm={24} md={6} lg={6} xl={3} xxl={4}>
              <img src="https://cursos.tuclase.net/shared/login/net/img/logo-tctp-net-d2l.png" width="100" />
            </Col>
            <Col xs={0} sm={0} md={18} lg={18} xl={21} xxl={20}>
              <Search placeholder="Buscar..." onSearch={value => console.log(value)} style={{ width: '70%' }} />
                <span style={{float:'right', marginRight:'10px'}}>
                    <Select defaultValue="Español" style={{ width: 120}} onChange={this.handleChange}>
                      <Option value="es-cl">Español</Option>
                      <Option value="pt-br">Portugués</Option>
                    </Select>     
                    &nbsp;&nbsp;&nbsp;
                    {v.version}
                </span>                                
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            theme={'light'}
            style={{ paddingTop: '24px' }}
            collapsedWidth={0}
            onBreakpoint={this.onBreakpointChange}
            breakpoint="md"
            width={this.state.mobile ? '80%' : 250}>
            {
              !this.state.collapsed && !this.state.mobile ?
                <Affix>
                  <Menu lang={this.state.lang} />
                </Affix>
                :
                <Menu lang={this.state.lang} />
            }
          </Sider>
          <Content style={{ padding: 24, background: '#fff', minHeight: 800, minWidth: 400 }}>          
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
           {React.cloneElement(this.props.children, { lang: this.state.lang })}
          </Content>
        </Layout>
        <Footer style={{textAlign:'center'}}>Tu clase, tu país ©2018</Footer>
      </Layout>
    )
  }
}

export default class AppDoc extends App {

  state = {
    loading: true,
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { Component } = this.props
    // console.log("props", this.props);
    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <Container>
          <SmartComponent>
            <Component {...this.props} />
          </SmartComponent>
        </Container>
      )
    }
  }
}



