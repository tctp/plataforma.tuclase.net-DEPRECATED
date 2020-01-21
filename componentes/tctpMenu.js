import React from 'react'
import Router from 'next/router'
import { Menu } from 'antd'
import Link from 'next/link'

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
        switch (sistemaActual) {
            case "tctp-lms-bs":
                    return <Menu mode="inline" openKeys={openKeys} selectedKeys={current} onOpenChange={this.onOpenChange} onClick={this.onMenuClick}>
                    <SubMenu key="fase-edicion" title={"Fase de edicion"} onTitleClick={this.onTitleSubMenuClick}>    
                        <SubMenu key="contenidos" title={"Contenidos"} className="menuTercerNivel">
                                <Menu.Item key={`administracion-de-cursos`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/contenidos/administracion-de-cursos`}><a>Administración de cursos</a></Link></Menu.Item>                                                       
                        </SubMenu>                    
                        <SubMenu key="evaluacion" title={"Evaluación"} className="menuTercerNivel">
                            <Menu.Item key={`cuestionarios`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/cuestionarios`}><a>Cuestionarios</a></Link></Menu.Item>
                            <Menu.Item key={`buzon`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/buzon`}><a>Buzón</a></Link></Menu.Item>
                            <Menu.Item key={`calificaciones`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/calificaciones`}><a>Calificaciones</a></Link></Menu.Item>
                            <Menu.Item key={`premios`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/premios`}><a>Premios</a></Link></Menu.Item>
                            <Menu.Item key={`lista-de-control`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/lista-de-control`}><a>Lista de control</a></Link></Menu.Item>
                            <Menu.Item key={`encuestas`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/encuestas`}><a>Encuestas</a></Link></Menu.Item>
                            <Menu.Item key={`autoevaluacion`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/autoevaluacion`}><a>Autoevaluacion</a></Link></Menu.Item>
                            <Menu.Item key={`rubricas`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/rubricas`}><a>Rubricas</a></Link></Menu.Item>
                            <Menu.Item key={`resultados-de-aprendizaje`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/resultados-de-aprendizaje`}><a>Resultados de aprendizaje</a></Link></Menu.Item>
                            <Menu.Item key={`evaluacion-rapida`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/evaluacion/evaluacion-rapida`}><a>Evaluación rápida</a></Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="comunicacion" title={"Comunicación"} className="menuTercerNivel" onTitleClick={this.onTitleSubMenuSegundoClick}>
                            <Menu.Item key={`debates`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/debates`}><a>Debates</a></Link></Menu.Item>
                            <Menu.Item key={`agentes-inteligentes`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/agentes-inteligentes`}><a>Agentes inteligentes</a></Link></Menu.Item>
                            <Menu.Item key={`aulas-virtuales`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/aulas-virtuales`}><a>Aulas virtuales</a></Link></Menu.Item>
                            <Menu.Item key={`retroalimentacion`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/retroalimentacion`}><a>Retroalimentación</a></Link></Menu.Item>
                            <Menu.Item key={`video-tareas`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/comunicacion/video-tareas`}><a>Video tareas</a></Link></Menu.Item>
                            <Menu.Item key={`herramientas-de-comunicacion`}><Link href={`/${lang}/${sistemaActual}/fase-edicion/herramientas-de-comunicacion`}><a>Herramientas de comunicación</a></Link></Menu.Item>                            
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="fase-despliegue" title={"Fase de despliegue"} onTitleClick={this.onTitleSubMenuClick}>                                                
                        <Menu.Item key={`curso-tutoreado`}><Link href={`/${lang}/${sistemaActual}/fase-despliegue/curso-tutoreado`}><a>Curso tutoreado</a></Link></Menu.Item>
                        <Menu.Item key={`curso-autoinstruccional`}><Link href={`/${lang}/${sistemaActual}/fase-despliegue/curso-autoinstruccional`}><a>Curso autoinstruccional</a></Link></Menu.Item>
                        <Menu.Item key={`curso-instructor`}><Link href={`/${lang}/${sistemaActual}/fase-despliegue/curso-instructor`}><a>Curso con instructor</a></Link></Menu.Item>
                        <Menu.Item key={`curso-autoinstruccional-sin-clase`}><Link href={`/${lang}/${sistemaActual}/fase-despliegue/curso-autoinstruccional-sin-clase`}><a>Curso autoinstruccional sin clase</a></Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="fase-ejecucion" title={"Fase de ejecución"} onTitleClick={this.onTitleSubMenuClick}>                                                
                        <Menu.Item key={`informe-cierre`}><Link href={`/${lang}/${sistemaActual}/fase-ejecucion/informe-cierre`}><a>Informe de cierre</a></Link></Menu.Item>
                        {/* <Menu.Item key={`roles-y-permisos`}><Link href={`/${lang}/${sistemaActual}/fase-ejecucion/roles-y-permisos`}><a>Roles y permisos</a></Link></Menu.Item> */}
                    </SubMenu>
                    <SubMenu key="fase-analisis" title={"Fase de análisis"} onTitleClick={this.onTitleSubMenuClick}>                        
                        <Menu.Item key={`progreso`}><Link href={`/${lang}/${sistemaActual}/fase-analisis/progreso`}><a>Progreso del curso</a></Link></Menu.Item>
                    </SubMenu>
                </Menu>
                    break;  
            case "tctp-catalogo-bs":
                   return <Menu mode="inline" openKeys={openKeys} selectedKeys={current} onOpenChange={this.onOpenChange} onClick={this.onMenuClick}>
                        <SubMenu key="administrador" title={"Administrador"}>
                            <Menu.Item key={`catalogo-de-cursos`}><Link href={`/${lang}/${sistemaActual}/administrador/catalogo-de-cursos`}><a>Catálogo de cursos</a></Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                    break;  
            case "tctp-comunidad-hh":
                    return <Menu mode="inline" openKeys={openKeys} selectedKeys={current} onOpenChange={this.onOpenChange} onClick={this.onMenuClick}>
                    <SubMenu key="administrador" title={"Administrador"}>
                        <Menu.Item key={`comunidad-humhub`}><Link href={`/${lang}/${sistemaActual}/administrador/comunidad-humhub`}><a>Comunidad HumHub</a></Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                    break;      
            default:
                    return <Menu mode="inline"></Menu>       
        }

    }



}