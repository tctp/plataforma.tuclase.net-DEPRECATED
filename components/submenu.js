
import React from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import Router from 'next/router'

const SubMenu = Menu.SubMenu;


const SysMenu = (props) => {

    function onSubOpenChange(e) {
        props.change(e);
    }    

    function onSubClick(e){
        props.click(e);
    }

    let lang = props.lang;    
    if (props.sys == "tctp-lms-bs") {
        return <Menu mode="inline" openKeys={props.open} selectedKeys={props.selected} onOpenChange={onSubOpenChange} onClick={onSubClick}>
            <SubMenu key="administrador" title="Administrador" onTitleClick={() => Router.push(`/tctp-lms-bs/administrador/home_${lang}`)} className="menuSegundoNivel" >
                <SubMenu key="gestion-usuarios" title="Gestion de usuarios" className="menuTercerNivel">
                    <Menu.Item key={`about_${lang}`}><Link href={`/tctp-lms-bs/administrador/gestion-usuarios/about_${lang}`}><a>About</a></Link></Menu.Item>
                    <Menu.Item key={`contacto_${lang}`}><Link href={`/tctp-lms-bs/administrador/gestion-usuarios/contacto_${lang}`}><a>Contacto</a></Link></Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="gestor" title="Gestor campus" onTitleClick={() => Router.push(`/tctp-lms-bs/gestor/home_${lang}`)} className="menuSegundoNivel">
                <Menu.Item key={`tutorial_${lang}`}><Link href={`/tctp-lms-bs/gestor/tutorial_${lang}`}><a>Tutorial</a></Link></Menu.Item>
                <Menu.Item key={`documentos_${lang}`}><Link href={`/tctp-lms-bs/gestor/documentos_${lang}`}><a>Documentos</a></Link></Menu.Item>
            </SubMenu>
            <SubMenu key="tutor" title="Tutor" onTitleClick={() => Router.push(`/tctp-lms-bs/tutor/home_${lang}`)} className="menuSegundoNivel">
                <Menu.Item key={`blog_${lang}`}><Link href={`/tctp-lms-bs/tutor/blog_${lang}`}><a>Blog</a></Link></Menu.Item>
                <Menu.Item key={`documentacion_${lang}`}><Link href={`/tctp-lms-bs/tutor/documentacion_${lang}`}><a>Documentacion</a></Link></Menu.Item>
                <Menu.Item key={`video_${lang}`}><Link href={`/tctp-lms-bs/tutor/video_${lang}`}><a>Video</a></Link></Menu.Item>
            </SubMenu>
            <SubMenu key="supervisorTutor" title="SupervisorTutor" onTitleClick={() => Router.push(`/tctp-lms-bs/supervisorTutor/home_${lang}`)} className="menuSegundoNivel">
                <Menu.Item key={`evaluacion_${lang}`}><Link href={`/tctp-lms-bs/supervisorTutor/evaluacion_${lang}`}><a>Evaluacion</a></Link></Menu.Item>
                <Menu.Item key={`tutoriales_${lang}`}><Link href={`/tctp-lms-bs/supervisorTutor/tutoriales_${lang}`}><a>Blog</a></Link></Menu.Item>
            </SubMenu>
            <SubMenu key="editor" title="Editor de cursos" onTitleClick={() => Router.push(`/tctp-lms-bs/editor/home_${lang}`)} className="menuSegundoNivel">
                <Menu.Item key={`herramientas-de-comunicacion_${lang}`}><Link href={`/tctp-lms-bs/editor/herramientas-de-comunicacion_${lang}`}><a>Herramientas de comunicación</a></Link></Menu.Item>
            </SubMenu>
            <SubMenu key="disenador-grafico" title="Diseñador gráfico" onTitleClick={() => Router.push(`/tctp-lms-bs/disenador-grafico/home_${lang}`)} className="menuSegundoNivel">
                {/* no hay contenido por el monmento */}
            </SubMenu>
            <SubMenu key="desarrollador" title="Desarrollador SW" onTitleClick={() => Router.push(`/tctp-lms-bs/desarrollador/home_${lang}`)} className="menuSegundoNivel">
                <Menu.Item key={`api_${lang}`}><Link href={`/tctp-lms-bs/desarrollador/api_${lang}`}><a>Api</a></Link></Menu.Item>
            </SubMenu>
        </Menu>
    } else if (props.sys == "tctp-catalogo-bs") {
        return <Menu mode="inline" openKeys={props.open} selectedKeys={props.selected} onOpenChange={onSubOpenChange} onClick={onSubClick}>
            <SubMenu key="administrador" title="Administrador" onTitleClick={() => Router.push(`/tctp-catalogo-bs/administrador/home_${lang}`)} className="menuSegundoNivel">
                <Menu.Item key="7">Home</Menu.Item>
                <Menu.Item key="8">About</Menu.Item>
                <Menu.Item key="9">Contacto</Menu.Item>
            </SubMenu>
            <SubMenu key="organizador" title="Organizador" onTitleClick={() => Router.push(`/tctp-catalogo-bs/organizador/home_${lang}`)} className="menuSegundoNivel">
                <Menu.Item key="7">Home</Menu.Item>
                <Menu.Item key="8">About</Menu.Item>
                <Menu.Item key="9">Contacto</Menu.Item>
            </SubMenu>
        </Menu>
    } else if (props.sys == "tctp-comunidad-hh") {
        return <Menu mode="inline" openKeys={props.open} selectedKeys={props.selected} onOpenChange={onSubOpenChange} onClick={onSubClick}>
            <SubMenu key="administrador" title="Administrador" onTitleClick={() => Router.push(`/tctp-comunidad-hh/administrador/home_${lang}`)} className="menuSegundoNivel">
                <Menu.Item key="7">Home</Menu.Item>
                <Menu.Item key="8">About</Menu.Item>
                <Menu.Item key="9">Contacto</Menu.Item>
            </SubMenu>
        </Menu>
    } else {
        return <Menu mode="inline"></Menu>
    }
}

export default SysMenu
