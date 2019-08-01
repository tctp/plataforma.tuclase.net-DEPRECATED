
import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { addLocaleData } from 'react-intl';
import TctpAnchor from '../componentes/tctpAnchor'
import TctpCopy from '../componentes/tctpCopy'
import { Affix, Layout, Row, Col, Icon, Input, Menu, Dropdown } from 'antd'
import TctpMenu from '../componentes/tctpMenu'
import v from '../config/version.json'
import './style.css'

const Search = Input.Search;
const { Header, Content, Footer, Sider } = Layout;

class SmartComponent extends React.Component {

  state = {
    lang: 'es-cl',
    collapsed: false,
    mobile: false,
    loading: true,
    currentYear: (new Date()).getFullYear(),
    sistemaActual:undefined
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onClickSistemaActual=(e)=>{
    this.setState({sistemaActual: e.key})
    Router.push(`/${this.state.lang}/${e.key}/home`)
    console.log("e",e);
  }

  componentDidMount() {
    this.getIdioma(this.state.lang);    
    let arrayRutas = Router.router.pathname.split('/').filter(Boolean);
    this.setState({sistemaActual:arrayRutas[1]})    
  }

  getIdioma = (i) => {
    addLocaleData(require(`react-intl/locale-data/${i.slice(0, 2)}`)); //carga dinamica de libreria para idioma        
  }

  handleIdiomaChange = (value) => {
    console.log("value", value);
    this.getIdioma(value.key);
    this.setState({ lang: value.key })
    Router.push(`/${value.key}/${Router.router.pathname.substring(0, Router.router.pathname.lastIndexOf("_"))}`)
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
    console.log("this,state.sistemaActual", this.state.sistemaActual);
    return (
      <Layout>
        <Head>
          <title>Documentación tu clase, tu país</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />                              
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"/>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.1/antd.min.css"/>
          <script src="/static/lib/js/tctpAlgoliaDocsearch.js"></script>
        </Head>
        <Header style={{ background: '#f0f2f5' }}>
          <Row gutter={12}>
            <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}>
              <img src="https://catalogo.tuclase.net/Theme/MainLogo?themeId=2&lastModified=636935293663870000" width="100" />
            </Col>
            <Col xs={7} sm={13} md={15} lg={15} xl={15} xxl={15}>
              <Menu onClick={this.onClickSistemaActual} selectedKeys={[this.state.sistemaActual]} mode="horizontal" style={{background:'none', lineHeight:'60px'}}>
                <Menu.Item key="tctp-lms-bs">
                <Icon type="cloud-server" />
                  LMS Brightspace
                </Menu.Item>
                <Menu.Item key="tctp-catalogo-bs">
                <Icon type="file-search" />
                  Catálogo Brightspace
                </Menu.Item>
                <Menu.Item key="tctp-comunidad-hh">
                <Icon type="team" />
                  Comunidad Humhub
                </Menu.Item>
              </Menu>
            </Col>
            <Col xs={17} sm={11} md={9} lg={7} xl={7} xxl={7}>            
              <Search id="tctpSearch" style={{width:'100%'}} placeholder="Buscar..."/> 
            </Col>
          </Row>
        </Header>
        <Layout>   
          <div style={{minHeight: 800}}>
              <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                theme={'light'}
                style={{ paddingTop: '24px' }}
                collapsedWidth={0}
                onBreakpoint={this.onBreakpointChange}
                breakpoint="lg"
                width={this.state.mobile ? '80%' : 250}>
                    <TctpMenu lang={this.state.lang} sistemaActual={this.state.sistemaActual}/>
              </Sider>
          </div>       
          <Content style={{ padding: '24px 10px 0px 4%', lineHeight:'24px', background: '#fff', minHeight: 800, minWidth: 400 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />            
            <Row gutter={48} type="flex" justify="center" align="top">
              <Col xs={24} sm={24} md={16} lg={19} xl={19} xxl={19}>
              <TctpCopy />              
                {React.cloneElement(this.props.children, { lang: this.state.lang })}
              </Col>
              <Col xs={0} sm={0} md={8} lg={5} xl={5} xxl={5}>
                  <TctpAnchor />
              </Col>              
            </Row>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', backgroundColor: '#FAFAFA' }}>
            Tu clase, tu país ©{currentYear}&nbsp;&nbsp;
            <Dropdown className="localeBtn" overlay={(
                  <Menu onClick={this.handleIdiomaChange}>
                    <Menu.Item key="es-cl">Español</Menu.Item>
                    <Menu.Item key="pt-br">Portugues</Menu.Item>
                  </Menu>
                )}>                 
                    <Icon type="global" style={{ fontSize: '16px', color: '#666' }}/>
                </Dropdown>
            <p style={{fontSize:'11px', color:'#666'}}>Versión publicada: {v.version}</p>                                   
        </Footer>
      </Layout>
    )
  }
}

export default class AppDoc extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);      
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props
      return (
        <Container>
          <SmartComponent>
            <Component {...pageProps} />
          </SmartComponent>
        </Container>
      )
    
  }
}



