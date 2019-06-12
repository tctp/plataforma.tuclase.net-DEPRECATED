import { Tag } from 'antd';

export default class extends React.Component {

    renderObjectOu(e){
      return  e ?
        e.map((a)=>{
            return <Tag key={a}>{a}</Tag>
        })
        :
        <span></span>
    }

    render() {                

        const tableStyle = {
            border: '1px solid #cccccc',
            padding: '10px',
            textAlign: 'left',
            marginBottom: '30px',
        }
        
        let rolesPorOu = Object.entries(this.props);
        console.log("rolesPorOu", rolesPorOu);

        rolesPorOu.forEach((obj)=>{
            console.log("obj", typeof obj);
        })        

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
                        <tr>
                            <td>Lectura</td>
                            {
                                rolesPorOu.map((ou)=>{
                                    return <td key={ou}>{this.renderObjectOu(ou[1].lectura)}</td>
                                })
                            }
                        </tr>
                        <tr>
                            <td>Escritura</td>
                            {
                                rolesPorOu.map((ou)=>{
                                    return <td key={ou}>{this.renderObjectOu(ou[1].escritura)}</td>
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};

