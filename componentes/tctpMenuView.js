
import React from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import { IntlProvider, FormattedMessage } from 'react-intl';
import mensajes from '../config/mensajes';

const SubMenu = Menu.SubMenu;

const SysMenu = (props) => {
    console.log("props", props);
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
                <SubMenu key="administrador" title={<FormattedMessage id="administrador" defaultMessage="Administrador" />} onTitleClick={() => Router.push(`/${lang}/${sys}/administrador/home`)} >
                    <SubMenu key="gestion-usuarios" title={<FormattedMessage id="gestionUsuarios" defaultMessage="Gestion de usuarios" />} className="menuTercerNivel">
                        <Menu.Item key={`about`}><Link href={`/${lang}/${sys}/administrador/gestion-usuarios/about`}><a><FormattedMessage id="about" defaultMessage="Quienes somos" /></a></Link></Menu.Item>
                        <Menu.Item key={`contacto`}><Link href={`/${lang}/${sys}/administrador/gestion-usuarios/contacto`}><a><FormattedMessage id="contacto" defaultMessage="Contacto" /></a></Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="gestor" title={<FormattedMessage id="gestor" defaultMessage="Gestor campus" />} onTitleClick={() => Router.push(`/${lang}/${sys}/gestor/home`)}>
                    <Menu.Item key={`tutorial`}><Link href={`/${lang}/${sys}/gestor/tutorial`}><a>Tutorial</a></Link></Menu.Item>
                    <Menu.Item key={`documentos`}><Link href={`/${lang}/${sys}/gestor/documentos`}><a>Documentos</a></Link></Menu.Item>
                </SubMenu>
                <SubMenu key="tutor" title={<FormattedMessage id="tutor" defaultMessage="Tutor" />} onTitleClick={() => Router.push(`/${lang}/${sys}/tutor/home`)}>
                    <Menu.Item key={`blog`}><Link href={`/${lang}/${sys}/tutor/blog`}><a>Blog</a></Link></Menu.Item>
                    <Menu.Item key={`documentacion`}><Link href={`/${lang}/${sys}/tutor/documentacion`}><a>Documentacion</a></Link></Menu.Item>
                    <Menu.Item key={`video`}><Link href={`/${lang}/${sys}/tutor/video`}><a>Video</a></Link></Menu.Item>
                </SubMenu>
                <SubMenu key="supervisorTutor" title={<FormattedMessage id="supervisorTutor" defaultMessage="Supervisor Tutor" />} onTitleClick={() => Router.push(`/${lang}/${sys}/supervisorTutor/home`)}>
                    <Menu.Item key={`evaluacion`}><Link href={`/${lang}/${sys}/supervisorTutor/evaluacion`}><a>Evaluacion</a></Link></Menu.Item>
                    <Menu.Item key={`tutoriales`}><Link href={`/${lang}/${sys}/supervisorTutor/tutoriales`}><a>Blog</a></Link></Menu.Item>
                </SubMenu>
                <SubMenu key="editor" title={<FormattedMessage id="editor" defaultMessage="Editor de cursos" />} onTitleClick={() => Router.push(`/${lang}/${sys}/editor/home`)}>
                    <Menu.Item key={`herramientas-de-comunicacion`}><Link href={`/${lang}/${sys}/editor/herramientas-de-comunicacion`}><a>Herramientas de comunicación</a></Link></Menu.Item>
                    <SubMenu key="evaluacion" title={<FormattedMessage id="evaluacion" defaultMessage="Evaluación" />} className="menuTercerNivel">                    
                        <Menu.Item key={`cuestionarios`}><Link href={`/${lang}/${sys}/editor/evaluacion/cuestionarios`}><a><FormattedMessage id="cuestionarios" defaultMessage="Cuestionarios" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`buzon`}><Link href={`/${lang}/${sys}/editor/evaluacion/buzon`}><a><FormattedMessage id="buzon" defaultMessage="Buzon" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`calificaciones`}><Link href={`/${lang}/${sys}/editor/evaluacion/calificaciones`}><a><FormattedMessage id="calificaciones" defaultMessage="Calificaciones" /></a></Link></Menu.Item>                                                    
                        <Menu.Item key={`premios`}><Link href={`/${lang}/${sys}/editor/evaluacion/premios`}><a><FormattedMessage id="premios" defaultMessage="Premios" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`lista-de-control`}><Link href={`/${lang}/${sys}/editor/evaluacion/lista-de-control`}><a><FormattedMessage id="lista-de-control" defaultMessage="Lista de control" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`encuestas`}><Link href={`/${lang}/${sys}/editor/evaluacion/encuestas`}><a><FormattedMessage id="encuestas" defaultMessage="Encuestas" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`autoevaluacion`}><Link href={`/${lang}/${sys}/editor/evaluacion/autoevaluacion`}><a><FormattedMessage id="autoevaluacion" defaultMessage="Autoevaluacion" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`rubricas`}><Link href={`/${lang}/${sys}/editor/evaluacion/rubricas`}><a><FormattedMessage id="rubricas" defaultMessage="Rubricas" /></a></Link></Menu.Item>                            
                    </SubMenu>
                    <SubMenu key="comunicacion" title={<FormattedMessage id="comunicacion" defaultMessage="Comunicación" />} className="menuTercerNivel">
                        <Menu.Item key={`debates`}><Link href={`/${lang}/${sys}/editor/comunicacion/debates`}><a><FormattedMessage id="debates" defaultMessage="Debates" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`agentes-inteligentes`}><Link href={`/${lang}/${sys}/editor/comunicacion/agentes-inteligentes`}><a><FormattedMessage id="agentes-inteligentes" defaultMessage="Agentes inteligentes" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`aulas-virtuales`}><Link href={`/${lang}/${sys}/editor/comunicacion/aulas-virtuales`}><a><FormattedMessage id="aulas-virtuales" defaultMessage="Aulas virtuales" /></a></Link></Menu.Item>                            
                        <Menu.Item key={`retroalimentacion`}><Link href={`/${lang}/${sys}/editor/comunicacion/retroalimentacion`}><a><FormattedMessage id="retroalimentacion" defaultMessage="Retroalimentación" /></a></Link></Menu.Item>                            
                    </SubMenu>                                       
                </SubMenu>
                <SubMenu key="disenador" title={<FormattedMessage id="disenador" defaultMessage="Diseñador Gráfico" />} onTitleClick={() => Router.push(`/${lang}/${sys}/disenador-grafico/home`)}>
                    {/* no hay contenido por el monmento */}
                </SubMenu>
                <SubMenu key="desarrollador" title={<FormattedMessage id="desarrollador" defaultMessage="Desarrollador SW" />} onTitleClick={() => Router.push(`/${lang}/${sys}/desarrollador/home`)}>
                    <Menu.Item key={`api`}><Link href={`/${lang}/${sys}/desarrollador/api`}><a>Api</a></Link></Menu.Item>
                </SubMenu>
            </Menu>
        </IntlProvider>
    } else if (sys == "tctp-catalogo-bs") {
        return <IntlProvider locale={lang} messages={mensajes[lang]}>
            <Menu mode="inline" openKeys={props.open} selectedKeys={props.selected} onOpenChange={onSubOpenChange} onClick={onSubClick}>
                <SubMenu key="administrador" title={<FormattedMessage id="administrador" defaultMessage="Administrador" />} onTitleClick={() => Router.push(`/${lang}/${sys}/administrador/home`)}>
                    <Menu.Item key="7">Home</Menu.Item>
                    <Menu.Item key="8">About</Menu.Item>
                    <Menu.Item key="9">Contacto</Menu.Item>
                </SubMenu>
                <SubMenu key="organizador" title={<FormattedMessage id="organizador" defaultMessage="Organizador" />} onTitleClick={() => Router.push(`/${lang}/${sys}/organizador/home`)}>
                    <Menu.Item key="7">Home</Menu.Item>
                    <Menu.Item key="8">About</Menu.Item>
                    <Menu.Item key="9">Contacto</Menu.Item>
                </SubMenu>
            </Menu>
        </IntlProvider>
    } else if (sys == "tctp-comunidad-hh") {
        return <IntlProvider locale={lang} messages={mensajes[lang]}>
            <Menu mode="inline" openKeys={props.open} selectedKeys={props.selected} onOpenChange={onSubOpenChange} onClick={onSubClick}>
                <SubMenu key="administrador" title={<FormattedMessage id="administrador" defaultMessage="Administrador" />} onTitleClick={() => Router.push(`/${lang}/${sys}/administrador/home`)}>
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
