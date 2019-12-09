import { Select, Icon, Table } from 'antd';
import { rolesPermisosServices } from '../../services/rolesPermisosServices';
import { cleanStrings } from '../../services/cleanStrings';
import Loading from '../loading';
const { Option } = Select;

export default class extends React.Component {

    state = {
        allRolesByTool: [],
        loading: false,        
        rolToolsClaimsActual: undefined,
        error: false,
        errorMsj: '',
        data:[],
        columns:[]
    }

    componentDidMount() {
        this.getRolesPermisos(this.props.lmsCode, this.props.tool);
    }

    changeSelectOptionRolName = (rolNameSeleccionado) => {
        let arrOusFiltradas = [];
        let arrTools = [];
        let arrclaims = [];
        let [rolToolsClaims] = this.state.allRolesByTool.filter((rol) => rol.displayName == rolNameSeleccionado);
        let {tools, _id, displayName, lmsCode, rolId} = rolToolsClaims;
        tools.forEach((tool)=>{
            tool.claims.forEach((claim) => { //aislar las ous            
                let ouNamesEncontrado = arrOusFiltradas.find(o => o.id == claim.ouTypeId);            
                if(!ouNamesEncontrado){                
                    if(claim.ouTypeName=="Organización" || claim.ouTypeName=="Oferta de cursos" || claim.ouTypeName=="Plantilla de curso" || claim.ouTypeName=="Grupo" || claim.ouTypeName=="Sección" ){        
                        arrOusFiltradas.push({id:claim.ouTypeId, name:claim.ouTypeName});
                    }
                }            
            });
        })              
        arrOusFiltradas = arrOusFiltradas.sort((a, b)=>{return a.id-b.id});  //ordenar ous              
        tools.forEach((tool) => {
            tool.claims.sort((a, b)=>a.displayName.localeCompare(b.displayName)); //ordenar por nombres
            tool.claims.forEach((claim) => {
                let arrClaimsEncontrado = arrclaims.find(c => c.claimId == claim.claimId);                
                if (!arrClaimsEncontrado) {
                    arrclaims.push({ displayname:claim.displayName, claimId:claim.claimId, ous: [{ grantId:claim.grantId, ouName:claim.ouTypeName, allowed:claim.allowed }] });
                } else {
                    arrClaimsEncontrado.ous.push({ grantId:claim.grantId, ouName:claim.ouTypeName, allowed:claim.allowed });
                }
            })
            let objTool = {displayName:tool.displayName, isActive:tool.isActive, toolId:tool.toolId, claims:arrclaims};
            arrTools.push(objTool);
        })

        let objRolesPermisos = {_id, displayName, lmsCode, rolId, tools: arrTools}
        //columnas para construir tabla
        const columns = [
            {
              title: 'Permisos',
              dataIndex: 'permiso',
              render: text => <span>{text}</span>,
            },
          ];
          arrOusFiltradas.forEach((ou)=>{                              
                columns.push({title:ou.name, dataIndex:cleanStrings.getCleanedString(ou.name), align: 'center', width:"12%"});                
          })

           //data para construir tabla
          const data = [];
          objRolesPermisos.tools.forEach((tool)=>{
                tool.claims.forEach((claim)=>{
                    let obj = {                        
                        permiso:claim.displayname,                            
                    }
                    //se identifican y se asignan los valores a las propiedades de cada fila
                    claim.ous.forEach((ou, index)=>{                        
                        obj.key = index+ou.ouName+claim.displayname;                   
                        switch (ou.ouName) {
                            case "Organización":
                                    obj.organizacion = this.setIconsIsAllowed(ou.allowed);
                                    break;  
                            case "Oferta de cursos":
                                    obj.ofertadecursos = this.setIconsIsAllowed(ou.allowed);
                                    break;  
                            case "Plantilla de curso":
                                    obj.plantilladecurso = this.setIconsIsAllowed(ou.allowed); 
                                    break; 
                            case "Grupo":
                                    obj.grupo = this.setIconsIsAllowed(ou.allowed); 
                                    break; 
                            case "Sección":
                                    obj.seccion = this.setIconsIsAllowed(ou.allowed); 
                                    break; 
                        }
                    })
                    data.push(obj);
                })
          })

        console.log("rolToolsClaims", rolToolsClaims);
        console.log("arrclaims", arrclaims);
        console.log("objRolesPermisos", objRolesPermisos);        
        this.setState({ rolToolsClaimsActual: objRolesPermisos, data: data, columns:columns  });
    }

    getRolesPermisos = async (lmsCode, tool) => {
        let resp = await rolesPermisosServices.seachRolesPermisos(lmsCode, tool);        
        resp.sort((a, b)=>a.displayName.localeCompare(b.displayName));  //ordenar por nombres                                
        if (resp.message) {            
            this.setState({ allRolesByTool: resp, loading: false, error: true, errorMsj: resp.message });
        } else {
            this.setState({ allRolesByTool: resp, loading: false, error: false });
        }
    }

     setIconsIsAllowed(allowed){
         if(allowed){
            return <Icon type="check" style={{color: '#1abc9c'}}/>
         }else{
            return <Icon type="close" style={{color: '#e74c3c'}} />
         }
     }


    render() {
        let { rolToolsClaimsActual, loading, allRolesByTool, data, columns } = this.state;
        console.log("this.state", this.state);
        return (<div>
            {
                !loading && allRolesByTool.length > 0 ? <div>
                    <Select
                        showSearch
                        value={rolToolsClaimsActual ? rolToolsClaimsActual.displayName : 'Por favor seleccione...'}
                        style={{ width: '32%' }}
                        onChange={this.changeSelectOptionRolName}
                    >
                        {this.state.allRolesByTool.map((rol) => {
                            switch (rol.displayName) {
                                case "D2LMonitor":                                        
                                        break;  
                                case "Student (D2L)":                                        
                                        break;
                                case "D2LEndUserSupport":
                                        break;  
                                case "CourseCatalog":                                        
                                        break;  
                                case "Intructor (D2L)":                                        
                                        break;  
                                default:
                                return <Option key={rol._id} value={rol.displayName}>{rol.displayName}</Option>                                
                            }                            
                        })}
                    </Select>
                </div> : <span><Loading msj="Cargando datos..." /></span>
            }
            {
                <Table pagination={false} bordered columns={columns} dataSource={data} />
            }
        </div>)

        
    }

}


