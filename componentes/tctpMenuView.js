
import React from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import { IntlProvider, FormattedMessage } from 'react-intl';
import mensajes from '../config/mensajes';

const SubMenu = Menu.SubMenu;

const SysMenu = (props) => {

    function onSubOpenChange(e) {
        props.change(e);
    }

    function onSubClick(e) {
        props.click(e);
    }

    let { lang, sys } = props;    

    if (sys == "tctp-lms-bs") {
        return <IntlProvider locale={lang} messages={mensajes[lang]}>
            <Menu mode="inline" openKeys={props.open} selectedKeys={props.selected} onOpenChange={onSubOpenChange} onClick={onSubClick}>
                <SubMenu key="administrador" title={<FormattedMessage id="administrador" defaultMessage="Administrador" />} onTitleClick={() => Router.push(`/${sys}/administrador/home_${lang}`)} >
                    <SubMenu key="gestion-usuarios" title={<FormattedMessage id="gestionUsuarios" defaultMessage="Gestion de usuarios" />} className="menuTercerNivel">
                        <Menu.Item key={`about_${lang}`}><Link href={`/${sys}/administrador/gestion-usuarios/about_${lang}`}><a><FormattedMessage id="about" defaultMessage="Quienes somos" /></a></Link></Menu.Item>
                        <Menu.Item key={`contacto_${lang}`}><Link href={`/${sys}/administrador/gestion-usuarios/contacto_${lang}`}><a><FormattedMessage id="contacto" defaultMessage="Contacto" /></a></Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="gestor" title={<FormattedMessage id="gestor" defaultMessage="Gestor campus" />} onTitleClick={() => Router.push(`/${sys}/gestor/home_${lang}`)}>
                    <Menu.Item key={`tutorial_${lang}`}><Link href={`/${sys}/gestor/tutorial_${lang}`}><a>Tutorial</a></Link></Menu.Item>
                    <Menu.Item key={`documentos_${lang}`}><Link href={`/${sys}/gestor/documentos_${lang}`}><a>Documentos</a></Link></Menu.Item>
                </SubMenu>
                <SubMenu key="tutor" title={<FormattedMessage id="tutor" defaultMessage="Tutor" />} onTitleClick={() => Router.push(`/${sys}/tutor/home_${lang}`)}>
                    <Menu.Item key={`blog_${lang}`}><Link href={`/${sys}/tutor/blog_${lang}`}><a>Blog</a></Link></Menu.Item>
                    <Menu.Item key={`documentacion_${lang}`}><Link href={`/${sys}/tutor/documentacion_${lang}`}><a>Documentacion</a></Link></Menu.Item>
                    <Menu.Item key={`video_${lang}`}><Link href={`/${sys}/tutor/video_${lang}`}><a>Video</a></Link></Menu.Item>
                </SubMenu>
                <SubMenu key="supervisorTutor" title={<FormattedMessage id="supervisorTutor" defaultMessage="Supervisor Tutor" />} onTitleClick={() => Router.push(`/${sys}/supervisorTutor/home_${lang}`)}>
                    <Menu.Item key={`evaluacion_${lang}`}><Link href={`/${sys}/supervisorTutor/evaluacion_${lang}`}><a>Evaluacion</a></Link></Menu.Item>
                    <Menu.Item key={`tutoriales_${lang}`}><Link href={`/${sys}/supervisorTutor/tutoriales_${lang}`}><a>Blog</a></Link></Menu.Item>
                </SubMenu>
                <SubMenu key="editor" title={<FormattedMessage id="editor" defaultMessage="Editor de cursos" />} onTitleClick={() => Router.push(`/${sys}/editor/home_${lang}`)}>
                    <Menu.Item key={`herramientas-de-comunicacion_${lang}`}><Link href={`/${sys}/editor/herramientas-de-comunicacion_${lang}`}><a>Herramientas de comunicación</a></Link></Menu.Item>
                    <SubMenu key="evaluacion" title={<FormattedMessage id="evaluacion" defaultMessage="Evaluación" />} className="menuTercerNivel">                    
                        <Menu.Item key={`cuestionarios_${lang}`}><Link href={`/${sys}/editor/evaluacion/cuestionarios_${lang}`}><a><FormattedMessage id="cuestionarios" defaultMessage="Cuestionarios" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`buzon_${lang}`}><Link href={`/${sys}/editor/evaluacion/buzon_${lang}`}><a><FormattedMessage id="buzon" defaultMessage="Buzon" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`calificaciones_${lang}`}><Link href={`/${sys}/editor/evaluacion/calificaciones_${lang}`}><a><FormattedMessage id="calificaciones" defaultMessage="Calificaciones" /></a></Link></Menu.Item>                                                    
                        <Menu.Item key={`premios_${lang}`}><Link href={`/${sys}/editor/evaluacion/premios_${lang}`}><a><FormattedMessage id="premios" defaultMessage="Premios" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`lista-de-control_${lang}`}><Link href={`/${sys}/editor/evaluacion/lista-de-control_${lang}`}><a><FormattedMessage id="lista-de-control" defaultMessage="Lista de control" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`encuestas_${lang}`}><Link href={`/${sys}/editor/evaluacion/encuestas_${lang}`}><a><FormattedMessage id="encuestas" defaultMessage="Encuestas" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`autoevaluacion_${lang}`}><Link href={`/${sys}/editor/evaluacion/autoevaluacion_${lang}`}><a><FormattedMessage id="autoevaluacion" defaultMessage="Autoevaluacion" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`rubricas_${lang}`}><Link href={`/${sys}/editor/evaluacion/rubricas_${lang}`}><a><FormattedMessage id="rubricas" defaultMessage="Rubricas" /></a></Link></Menu.Item>                            
                    </SubMenu>
                    <SubMenu key="comunicacion" title={<FormattedMessage id="comunicacion" defaultMessage="Comunicación" />} className="menuTercerNivel">
                        <Menu.Item key={`debates_${lang}`}><Link href={`/${sys}/editor/comunicacion/debates_${lang}`}><a><FormattedMessage id="debates" defaultMessage="Debates" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`agentes-inteligentes_${lang}`}><Link href={`/${sys}/editor/comunicacion/agentes-inteligentes_${lang}`}><a><FormattedMessage id="agentes-inteligentes" defaultMessage="Agentes inteligentes" /></a></Link></Menu.Item>                            
                    </SubMenu>                                       
                </SubMenu>
                <SubMenu key="disenador" title={<FormattedMessage id="disenador" defaultMessage="Diseñador Gráfico" />} onTitleClick={() => Router.push(`/${sys}/disenador-grafico/home_${lang}`)}>
                    {/* no hay contenido por el monmento */}
                </SubMenu>
                <SubMenu key="desarrollador" title={<FormattedMessage id="desarrollador" defaultMessage="Desarrollador SW" />} onTitleClick={() => Router.push(`/${sys}/desarrollador/home_${lang}`)}>
                    <Menu.Item key={`api_${lang}`}><Link href={`/${sys}/desarrollador/api_${lang}`}><a>Api</a></Link></Menu.Item>
                </SubMenu>
            </Menu>
        </IntlProvider>
    } else if (sys == "tctp-catalogo-bs") {
        return <IntlProvider locale={lang} messages={mensajes[lang]}>
            <Menu mode="inline" openKeys={props.open} selectedKeys={props.selected} onOpenChange={onSubOpenChange} onClick={onSubClick}>
                <SubMenu key="administrador" title={<FormattedMessage id="administrador" defaultMessage="Administrador" />} onTitleClick={() => Router.push(`/${sys}/administrador/home_${lang}`)}>
                    <Menu.Item key="7">Home</Menu.Item>
                    <Menu.Item key="8">About</Menu.Item>
                    <Menu.Item key="9">Contacto</Menu.Item>
                </SubMenu>
                <SubMenu key="organizador" title={<FormattedMessage id="organizador" defaultMessage="Organizador" />} onTitleClick={() => Router.push(`/${sys}/organizador/home_${lang}`)}>
                    <Menu.Item key="7">Home</Menu.Item>
                    <Menu.Item key="8">About</Menu.Item>
                    <Menu.Item key="9">Contacto</Menu.Item>
                </SubMenu>
            </Menu>
        </IntlProvider>
    } else if (sys == "tctp-comunidad-hh") {
        return <IntlProvider locale={lang} messages={mensajes[lang]}>
            <Menu mode="inline" openKeys={props.open} selectedKeys={props.selected} onOpenChange={onSubOpenChange} onClick={onSubClick}>
                <SubMenu key="administrador" title={<FormattedMessage id="administrador" defaultMessage="Administrador" />} onTitleClick={() => Router.push(`/${sys}/administrador/home_${lang}`)}>
                    <Menu.Item key="7">Home</Menu.Item>
                    <Menu.Item key="8">About</Menu.Item>
                    <Menu.Item key="9">Contacto</Menu.Item>
                </SubMenu>
            </Menu>
        </IntlProvider>
    } else {
        return <Menu mode="inline"></Menu>
    }
    
}

export default SysMenu
