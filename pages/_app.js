import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { addLocaleData } from 'react-intl';
import TctpAnchor from '../componentes/tctpAnchor'
import TctpCopy from '../componentes/tctpCopy'
import { Affix, Layout, Row, Col, Select, Icon, Input, Tag, Menu, Dropdown, Button } from 'antd'
import TctpSideBarNav from '../componentes/tctpSideBarNav'
import Loading from '../componentes/loading'
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
    currentYear: (new Date()).getFullYear(),
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentDidMount() {
    this.getIdioma(this.state.lang);
  }

  getIdioma = (i) => {
    addLocaleData(require(`react-intl/locale-data/${i.slice(0, 2)}`)); //carga dinamica de libreria para idioma        
  }

  handleIdiomaChange = (value) => {
    console.log("value", value);
    this.getIdioma(value.key);
    this.setState({ lang: value.key })
    Router.push(`${Router.router.pathname.substring(0, Router.router.pathname.lastIndexOf("_"))}_${value.key}`)
  }

  onBreakpointChange = (broken) => {
    if (broken) {
      this.setState({
        mobile: true,
        collapsed: true
      });
    } else {
      this.setState({
        mobile: false,
        collapsed: false
      });
    }
  }

  render() {
    let {currentYear} = this.state;
    

    return (
      <Layout>
        <Head>
          <title>Documentación tu clase, tu país</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />          
        </Head>
        <Header style={{ background: '#f0f2f5' }}>
          <Row gutter={12}>
            <Col xs={24} sm={24} md={6} lg={6} xl={3} xxl={4}>
              <img src="https://catalogo.tuclase.net/Theme/MainLogo?themeId=2&lastModified=636935293663870000" width="100" />
            </Col>
            <Col xs={0} sm={0} md={18} lg={18} xl={21} xxl={20}>
              <Search placeholder="Buscar..." onSearch={value => console.log(value)} style={{ width: '60%' }} />
              <span style={{ float: 'right', marginRight: '10px' }}>
                <Dropdown className="localeBtn" overlay={(
                  <Menu onClick={this.handleIdiomaChange}>
                    <Menu.Item key="es-cl">Español</Menu.Item>
                    <Menu.Item key="pt-br">Portugues</Menu.Item>
                  </Menu>
                )}>                 
                    <Icon type="global" style={{ fontSize: '16px', color: '#666' }}/>
                </Dropdown>

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
                  <TctpSideBarNav lang={this.state.lang} />
                </Affix>
                :
                <TctpSideBarNav lang={this.state.lang} />
            }
          </Sider>
          <Content style={{ padding: '24px 10px 0px 24px', background: '#fff', minHeight: 800, minWidth: 400 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <TctpAnchor isMobile={this.state.mobile} />
            <TctpCopy />
            <Row gutter={12}>
              <Col offset={2} xs={17} sm={17} md={17} lg={18} xl={18} xxl={18}>
                {React.cloneElement(this.props.children, { lang: this.state.lang })}
              </Col>
            </Row>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', backgroundColor: '#FAFAFA' }}>
            Tu clase, tu país ©{currentYear} <br/>
            <p style={{fontSize:'11px', color:'#666'}}>Versión publicada: {v.version}</p>            
        </Footer>
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



