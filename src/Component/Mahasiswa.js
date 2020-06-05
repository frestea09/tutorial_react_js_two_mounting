import React from 'react'

function Mahasiswa(props){
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.nim}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Mahasiswa