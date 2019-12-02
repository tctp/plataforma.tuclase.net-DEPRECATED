import { Select, Icon } from 'antd';
import { rolesPermisosServices } from '../../services/rolesPermisosServices';
import Loading from '../loading';
const { Option } = Select;

export default class extends React.Component {

    state = {
        allRolesByTool: [],
        loading: false,
        ouTypes: [],
        rolToolsClaimsActual: undefined,
        error: false,
        errorMsj: ''
    }


    componentDidMount() {
        this.getRolesPermisos(this.props.lmsCode, this.props.tool);
    }

    changeSelectOptionRolName = (rolNameSeleccionado) => {
        let setOuNames = new Set();
        let [rolToolsClaims] = this.state.allRolesByTool.filter((rol) => rol.displayName == rolNameSeleccionado);
        rolToolsClaims.tools[0].claims.forEach((claim) => { //aislar los nombres de las ous            
            setOuNames.add(claim.ouTypeName);
        })
        let arrTools = [];
        let arrclaims = [];
        rolToolsClaims.tools.forEach((tool) => {
            tool.claims.forEach((claim) => {
                let arrClaimsEncontrado = arrclaims.find(c => c.claimId == claim.claimId);
                if (!arrClaimsEncontrado) {
                    arrclaims.push({ displayname: claim.displayName, claimId: claim.claimId, ous: [{ grantId: claim.grantId, ouName: claim.ouTypeName, allowed: claim.allowed }] });
                } else {
                    arrClaimsEncontrado.ous.push({ grantId: claim.grantId, ouName: claim.ouTypeName, allowed: claim.allowed });
                }
            })
            let objTool = {
                displayName: tool.displayName,
                isActive: tool.isActive,
                toolId: tool.toolId,
                claims: arrclaims
            }
            arrTools.push(objTool);
        })

        let objRolesPermisos = {
            _id: rolToolsClaims._id,
            displayName: rolToolsClaims.displayName,
            lmsCode: rolToolsClaims.lmsCode,
            rolId: rolToolsClaims.rolId,
            tools: arrTools
        }

        console.log("rolToolsClaims", rolToolsClaims);
        console.log("arrclaims", arrclaims);
        console.log("objRolesPermisos", objRolesPermisos);

        this.setState({ rolToolsClaimsActual: objRolesPermisos, ouTypes: Array.from(setOuNames) });
    }

    getRolesPermisos = async (lmsCode, tool) => {
        let resp = await rolesPermisosServices.seachRolesPermisos(lmsCode, tool);
        if (resp.message) {
            this.setState({ allRolesByTool: resp, loading: false, error: true, errorMsj: resp.message });
        } else {
            this.setState({ allRolesByTool: resp, loading: false, error: false });
        }
    }


    render() {
        let { rolToolsClaimsActual, loading, allRolesByTool, ouTypes } = this.state;
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
                            return <Option key={rol._id} value={rol.displayName}>{rol.displayName}</Option>
                        })}
                    </Select>
                </div> : <span><Loading msj="Cargando datos..." /></span>
            }
            {
                rolToolsClaimsActual ?
                    rolToolsClaimsActual.tools.map((tool) => {
                        if (tool.isActive) {
                            return <div key={tool.toolId}>
                                <table>
                                    <thead>
                                        <tr>
                                            <td><b>{tool.displayName}</b></td>
                                            {
                                                ouTypes.map((ou) => {
                                                    if (ou == "Organización" || ou == "Negocio" || ou == "Oferta de cursos" || ou == "Plantilla de curso") {
                                                        return <td key={ou}>{ou}</td>
                                                    }
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tool.claims.map((claim) => {
                                                return <tr key={claim.claimId}>
                                                    <td>{claim.displayname}</td>
                                                    {
                                                        claim.ous.map((ou) => {
                                                            if (ou.ouName == "Organización" || ou.ouName == "Negocio" || ou.ouName == "Oferta de cursos" || ou.ouName == "Plantilla de curso") {
                                                                return <td key={ou.grantId}>{ou.allowed ? <Icon type="check" style={{color: '#1abc9c'}}/> : <Icon type="close" style={{color: '#e74c3c'}} />}</td>
                                                            }
                                                        })
                                                    }
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                    })
                    :
                    <span></span>
            }
        </div>)
    }

}


