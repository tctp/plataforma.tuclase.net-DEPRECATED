import React from 'react'
import { Select } from 'antd'
import Router from 'next/router'
import TctpMenuView from './tctpMenuView';

const Option = Select.Option;


// example header component
export default class extends React.Component {

    rootSubmenuKeys = ['tctp-lms-bs', 'tctp-catalogo-bs', 'tctp-comunidad-hh'];

    state = {
        openKeys: [],
        current: '',
        sys: '',
        loading:true
    }

    onMenuClick = (e) => {        
        this.setState({
            current: e.key,
        });
    }

    onDropdownSistemaSelectChange = (sys) => {        
        this.setState({
            sys
        });
        Router.push(`/${sys}/home_${this.props.lang}`);
    }

    componentDidMount() {
        console.log("tctpSideBarNAv props", this.props);
        let itemActual = Router.router.pathname.substring(Router.router.pathname.lastIndexOf("/")).substr(1);
        let arrayRutas = Router.router.pathname.split('/').filter(Boolean);
        let sys = this.rootSubmenuKeys.filter(key => key == arrayRutas[0])
        this.setState({ current: itemActual, openKeys: arrayRutas, sys: sys, loading:false});
    }

    onOpenChange = (openKeys) => {        
        this.setState({
            openKeys:openKeys
        });
    }

    render() {        
        let {openKeys, sys} = this.state;  
        let lang = this.props.lang;
         
        return (
            <div style={{paddingLeft:'20px', width:'250px'}}>
                {/* <Select defaultValue={sys.length > 0 ? sys : 'Selecciona...'} style={{ width: '100%' }} onChange={this.onDropdownSistemaSelectChange}>
                    <Option value="tctp-lms-bs">Lms Brightspace</Option>
                    <Option value="tctp-catalogo-bs">Catálogo Brightspace</Option>
                    <Option value="tctp-comunidad-hh">Comunidad Humhub</Option>
                </Select> */}
                <br /><br />                 
                <TctpMenuView lang={lang} sys={this.props.sistemaActual} open={openKeys} selected={[this.state.current]} change={this.onOpenChange} click={this.onMenuClick}/>
            </div>
        )
 
    }
}