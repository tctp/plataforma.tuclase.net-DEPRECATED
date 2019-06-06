import { Tag  } from 'antd';

export const TctpOuTipoTabla = (props) => {	

	let { header, children, headerColor } = props;
	!children.length ? children = [children] : children;    

	const tableStyle = {
        border: '1px solid #cccccc',
        padding:'10px',
        textAlign: 'left',  
        marginBottom:'30px',        
      }

	return (
		<div>

			<table width='90%' style={tableStyle}>
				<thead>			
                    <tr>
                        {
                            header.map((child, index) => {                                
                                return <th key={index} style={{background: !headerColor ? '#FAFAFA':headerColor}}><b>{child}</b></th>
                            })
                        }
                    </tr>				
				</thead>
                <tbody>
                    {
                        children.map((child, index) => {
                            return <tr key={index} style={child.props.destacada ? {background: !child.props.color ? '#E9F7FE':child.props.color}:{background:'none'}}>
                                {
                                    child.props.data.map((item, ind) => {
                                        return <td key={ind}>{item}</td>
                                    })
                                }
                                {
                                    child.props.roles.map((rol, i) => {
                                        return <td key={i}>
												{
													rol.map((r,n)=>{
														return<Tag key={n}>{r}</Tag>
													})
												}												
											</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
			</table>
		</div>
	);
};

export const TctpOuTipoTablaFila = (props) => <p></p>

