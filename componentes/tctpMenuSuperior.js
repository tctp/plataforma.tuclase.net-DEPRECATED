import {Icon, Menu } from 'antd'

export default class extends React.Component {
    
    action=(e)=>{                
        this.props.callback(e.key); // llama función del componente padre
    }

    render() {        
        return (<Menu onClick={this.action} selectedKeys={[this.props.sistemaActual]} mode="horizontal" style={{ background: 'none', lineHeight: '60px' }}>
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
        )
    }
}