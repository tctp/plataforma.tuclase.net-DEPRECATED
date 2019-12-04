import { Select, Icon, Table } from 'antd';
import { rolesPermisosServices } from '../../services/rolesPermisosServices';
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
                    if(claim.ouTypeName=="Organización" || claim.ouTypeName=="Negocio" || claim.ouTypeName=="Oferta de cursos" || claim.ouTypeName=="Plantilla de curso"){        
                        arrOusFiltradas.push({id:claim.ouTypeId, name:claim.ouTypeName});
                    }
                }            
            });
        })      
        arrOusFiltradas = arrOusFiltradas.sort(function(a, b){return a.id-b.id});  //ordenar ous       
        tools.forEach((tool) => {
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
              render: text => <a>{text}</a>,
            },
          ];
          arrOusFiltradas.forEach((ou)=>{                
                columns.push({title:ou.name, dataIndex:this.getCleanedString(ou.name), align: 'center', width:"12%"});                
          })

           //data para construir tabla
          const data = [];
          objRolesPermisos.tools.forEach((tool)=>{
                tool.claims.forEach((claim)=>{
                    let obj = {                        
                        permiso:claim.displayname,                            
                    }
                    claim.ous.forEach((ou, index)=>{                        
                        obj.key = index+ou.ouName+claim.displayname;                   
                        switch (ou.ouName) {
                            case "Organización":
                                    obj.organizacion = this.setIconsIsAllowed(ou.allowed);
                                    break;  
                            case "Negocio":
                                    obj.negocio = this.setIconsIsAllowed(ou.allowed); 
                                    break;
                            case "Oferta de cursos":
                                    obj.ofertadecursos = this.setIconsIsAllowed(ou.allowed);
                                    break;  
                            case "Plantilla de curso":
                                    obj.plantilladecurso = this.setIconsIsAllowed(ou.allowed); 
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
        if (resp.message) {
            this.setState({ allRolesByTool: resp, loading: false, error: true, errorMsj: resp.message });
        } else {
            this.setState({ allRolesByTool: resp, loading: false, error: false });
        }
    }

    getCleanedString(cadena){
        // Definimos los caracteres que queremos eliminar
        var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";     
        // Los eliminamos todos
        for (var i = 0; i < specialChars.length; i++) {
            cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
        }        
        // Lo queremos devolver limpio en minusculas
        cadena = cadena.toLowerCase();     
        // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
        cadena = cadena.replace(/ /g,"");     
        // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
        cadena = cadena.replace(/á/gi,"a");
        cadena = cadena.replace(/é/gi,"e");
        cadena = cadena.replace(/í/gi,"i");
        cadena = cadena.replace(/ó/gi,"o");
        cadena = cadena.replace(/ú/gi,"u");
        cadena = cadena.replace(/ñ/gi,"n");
        return cadena;
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
                <Table bordered columns={columns} dataSource={data} />
            }
        </div>)

        
    }

}


