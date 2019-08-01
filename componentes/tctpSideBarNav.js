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

    componentDidMount() {        
        let itemActual = Router.router.pathname.substring(Router.router.pathname.lastIndexOf("/")).substr(1);
        let arrayRutas = Router.router.pathname.split('/').filter(Boolean);
        let sys = this.rootSubmenuKeys.filter(key => key == arrayRutas[0])
        this.setState({ current: itemActual, openKeys: arrayRutas, sys: this.props.sistemaActual, loading:false});
    }

    onOpenChange = (openKeys) => {        
        this.setState({
            openKeys:openKeys
        });
    }

    render() {        
        let {openKeys} = this.state;  
        let lang = this.props.lang;
        if(this.state.loading){
            return(<div></div>)
        } else{
            return (
                <div style={{paddingLeft:'20px', width:'250px'}}>
                    <br /><br />                 
                    <TctpMenuView lang={lang} sistemaActual={this.state.sys} open={openKeys} selected={[this.state.current]} change={this.onOpenChange} click={this.onMenuClick}/>
                </div>
            )
        }

 
    }
}