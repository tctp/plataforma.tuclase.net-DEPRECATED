import { Tag } from 'antd';

let modos = new Set();


export default class extends React.Component {

    state = {
        arrContenidos:[]
    }

    renderObjectOu(e){
      return  e ?
        e.map((a)=>{
            return <Tag key={a}>{a}</Tag>
        })
        :
        <span></span>
    }

    getRoles(ou, modo){        
        if(ou[modo]){
            return this.renderObjectOu(ou[modo]) 
        }                                          
    }

    establecerKeysenSet(){     
        let ousNames = Object.getOwnPropertyNames(this.props);
        ousNames.forEach((ouName)=>{            
            Object.keys(this.props[ouName]).forEach((e)=>{
                modos.add(e);
            }) 
        })        
    }

    componentDidMount(){
       this.getModos(this.props);
    }

    getModos(a){
        let arr=[];
        let {campus, organizacion, plantillas, ofertas} = a;  
        this.establecerKeysenSet();          

        modos.forEach((modo)=>{            
            let obj={
                name:modo,
                ous:[
                {
                    name:"organización",
                    roles:this.getRoles(organizacion, modo)
                },
                {
                    name:"campus",
                    roles:this.getRoles(campus, modo)
                },
                {
                    name:"plantillas",
                    roles:this.getRoles(plantillas, modo)
                },
                {
                    name:"ofertas",
                    roles:this.getRoles(ofertas, modo)
                }
            ]
            }
            arr.push(obj);
        })        
        this.setState({arrContenidos:arr});
    }


    render() {                            
        const tableStyle = {
            border: '1px solid #cccccc',
            padding: '10px',
            textAlign: 'left',
            marginBottom: '30px',
        }                
        return (
            <div>
                <table width='90%' style={tableStyle}>
                    <thead>
                        <tr style={{ fontWeight: 'bold', backgroundColor: '#FAFAFA' }}>
                            <td></td>
                            <td>Organización</td>
                            <td>Campus</td>
                            <td>Plantillas</td>
                            <td>Ofertas</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.arrContenidos.map((item, i)=>{
                                return <tr key={item+i}>
                                        <td>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</td>
                                        {
                                            item.ous.map((ou, i)=>{
                                                return <td key={i+ou}>{ou.roles}</td>
                                            })
                                        }
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};

