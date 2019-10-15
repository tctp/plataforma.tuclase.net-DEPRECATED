import React from 'react'
import Router from 'next/router'
import { Menu } from 'antd'
import Link from 'next/link'
import { IntlProvider, FormattedMessage } from 'react-intl';
import mensajes from '../config/mensajes';

const SubMenu = Menu.SubMenu;

// example header component
export default class extends React.Component {    

    state = {
        openKeys: [],
        current: [],        
        loading: true,        
    }

    onMenuClick = (e) => {             
        this.setState({
            current: [e.key],
        });
    }    

    onTitleSubMenuClick=(e)=>{        
        let { sistemaActual, lang } = this.props;          
        Router.push(`/${lang}/${sistemaActual}/${e.key}/home`)
    }

    componentDidMount() {            
        let itemActual = Router.router.pathname.substring(Router.router.pathname.lastIndexOf("/")).substr(1);
        let arrayRutas = Router.router.pathname.split('/').filter(Boolean);      
        this.setState({ current: [itemActual], openKeys: arrayRutas});
    }

    onOpenChange = (openKeys) => {             
        this.setState({ openKeys });
    }

    render() {
        let { openKeys, current } = this.state;
        let { sistemaActual, lang } = this.props;  
        console.log("this.state", this.state);                    
        if (sistemaActual == "tctp-lms-bs") {
            return <IntlProvider locale={lang} messages={mensajes[lang]}>                
                <Menu mode="inline" openKeys={openKeys} selectedKeys={current} onOpenChange={this.onOpenChange} onClick={this.onMenuClick}>
                    <SubMenu key="fase-edicion" title={<FormattedMessage id="fase-edicion" defaultMessage="Fase de edicion" />} onTitleClick={this.onTitleSubMenuClick}>                        
                        <SubMenu key="evaluacion" title={<FormattedMessage id="evaluacion" defaultMessage="Evaluación" />} className="menuTercerNivel">
                            <Menu.Item key={`cuestionarios`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/cuestionarios`}><a><FormattedMessage id="cuestionarios" defaultMessage="Cuestionarios" /></a></Link></Menu.Item>
                            <Menu.Item key={`buzon`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/buzon`}><a><FormattedMessage id="buzon" defaultMessage="Buzon" /></a></Link></Menu.Item>
                            <Menu.Item key={`calificaciones`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/calificaciones`}><a><FormattedMessage id="calificaciones" defaultMessage="Calificaciones" /></a></Link></Menu.Item>
                            <Menu.Item key={`premios`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/premios`}><a><FormattedMessage id="premios" defaultMessage="Premios" /></a></Link></Menu.Item>
                            <Menu.Item key={`lista-de-control`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/lista-de-control`}><a><FormattedMessage id="lista-de-control" defaultMessage="Lista de control" /></a></Link></Menu.Item>
                            <Menu.Item key={`encuestas`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/encuestas`}><a><FormattedMessage id="encuestas" defaultMessage="Encuestas" /></a></Link></Menu.Item>
                            <Menu.Item key={`autoevaluacion`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/autoevaluacion`}><a><FormattedMessage id="autoevaluacion" defaultMessage="Autoevaluacion" /></a></Link></Menu.Item>
                            <Menu.Item key={`rubricas`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/rubricas`}><a><FormattedMessage id="rubricas" defaultMessage="Rubricas" /></a></Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="comunicacion" title={<FormattedMessage id="comunicacion" defaultMessage="Comunicación" />} className="menuTercerNivel" onTitleClick={this.onTitleSubMenuSegundoClick}>
                            <Menu.Item key={`debates`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/debates`}><a><FormattedMessage id="debates" defaultMessage="Debates" /></a></Link></Menu.Item>
                            <Menu.Item key={`agentes-inteligentes`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/agentes-inteligentes`}><a><FormattedMessage id="agentes-inteligentes" defaultMessage="Agentes inteligentes" /></a></Link></Menu.Item>
                            <Menu.Item key={`aulas-virtuales`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/aulas-virtuales`}><a><FormattedMessage id="aulas-virtuales" defaultMessage="Aulas virtuales" /></a></Link></Menu.Item>
                            <Menu.Item key={`retroalimentacion`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/retroalimentacion`}><a><FormattedMessage id="retroalimentacion" defaultMessage="Retroalimentación" /></a></Link></Menu.Item>
                            <Menu.Item key={`video-tareas`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/video-tareas`}><a><FormattedMessage id="video-tareas" defaultMessage="Video tareas" /></a></Link></Menu.Item>
                            <Menu.Item key={`herramientas-de-comunicacion`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/herramientas-de-comunicacion`}><a>Herramientas de comunicación</a></Link></Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="fase-despliegue" title={<FormattedMessage id="fase-despliegue" defaultMessage="Fase de despliegue" />} onTitleClick={this.onTitleSubMenuClick}>                                                
                        <Menu.Item key={`curso-tutoreado`}><Link href={`/${lang}/${sistemaActual}/fase-despliegue/curso-tutoreado`}><a><FormattedMessage id="curso-tutoreado" defaultMessage="Curso tutoreado" /></a></Link></Menu.Item>
                        <Menu.Item key={`curso-autoinstruccional`}><Link href={`/${lang}/${sistemaActual}/fase-despliegue/curso-autoinstruccional`}><a><FormattedMessage id="curso-autoinstruccional" defaultMessage="Curso autoinstruccional" /></a></Link></Menu.Item>
                        <Menu.Item key={`curso-instructor`}><Link href={`/${lang}/${sistemaActual}/fase-despliegue/curso-instructor`}><a><FormattedMessage id="curso-instructor" defaultMessage="Curso con instructor" /></a></Link></Menu.Item>
                        <Menu.Item key={`curso-autoinstruccional-sin-clase`}><Link href={`/${lang}/${sistemaActual}/fase-despliegue/curso-autoinstruccional-sin-clase`}><a><FormattedMessage id="curso-autoinstruccional-sin-clase" defaultMessage="Curso autoinstruccional sin clase" /></a></Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="fase-ejecucion" title={<FormattedMessage id="fase-ejecucion" defaultMessage="Fase de ejecución" />} onTitleClick={this.onTitleSubMenuClick}>                                                
                        <Menu.Item key={`informe-cierre`}><Link href={`/${lang}/${sistemaActual}/fase-ejecucion/informe-cierre`}><a><FormattedMessage id="informe-cierre" defaultMessage="Informe de cierre" /></a></Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="fase-analisis" title={<FormattedMessage id="fase-analisis" defaultMessage="Fase de análisis" />} onTitleClick={this.onTitleSubMenuClick}>                        
                        <Menu.Item key={`progreso`}><Link href={`/${lang}/${sistemaActual}/fase-analisis/progreso`}><a><FormattedMessage id="progreso-del-curso" defaultMessage="Progreso del curso" /></a></Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </IntlProvider>
        } else if (sistemaActual == "tctp-catalogo-bs") {
            return <IntlProvider locale={lang} messages={mensajes[lang]}>
                <Menu mode="inline" openKeys={openKeys} selectedKeys={current} onOpenChange={this.onOpenChange} onClick={this.onMenuClick}>
                    <SubMenu key="administrador" title={<FormattedMessage id="administrador" defaultMessage="Administrador" />}>
                        <Menu.Item key={`catalogo-de-cursos`}><Link href={`/${lang}/${sistemaActual}/administrador/catalogo-de-cursos`}><a><FormattedMessage id="catalogo-de-cursos" defaultMessage="Catálogo de cursos" /></a></Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </IntlProvider>
        } else if (sistemaActual == "tctp-comunidad-hh") {
            return <IntlProvider locale={lang} messages={mensajes[lang]}>
                <Menu mode="inline" openKeys={openKeys} selectedKeys={current} onOpenChange={this.onOpenChange} onClick={this.onMenuClick}>
                    <SubMenu key="administrador" title={<FormattedMessage id="administrador" defaultMessage="Administrador" />}>
                        <Menu.Item key={`comunidad-tuclase`}><Link href={`/${lang}/${sistemaActual}/administrador/comunidad-tuclase`}><a><FormattedMessage id="comunidad-tuclase" defaultMessage="Comunidad Tu clase" /></a></Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </IntlProvider>
        } else {
            return <Menu mode="inline"></Menu>
        }
        //</div>
        //)
    }



}