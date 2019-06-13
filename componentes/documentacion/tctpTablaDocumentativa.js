
export const TctpTablaDocumentativa = (props) => {

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
                            return <tr key={index}>                            
                                <td>
                                    <a href={child.props.link} target="_blank">{child.props.item}</a>
                                </td>
                                <td>
                                    {child.props.desc}
                                </td>   
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export const Fila = (props) => <p></p>









