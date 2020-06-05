import React from 'react'

function Content(props){
    return(
        <div>
            <h3>Form Mahasiswa</h3>
            {props.listMahasiswa}
            <form>
                <table>
                    <tbody>
                        
                        <tr>
                        
                             <td>
                                <input id='tombolKurangCount' name='tombolKurangCount' type='button' value='-' onClick={props.kurangCount}/>
                            </td>
                            <td>
                                <h3>Jumlah Kehadiran : {props.nomorCount}</h3>
                            </td>
                            <td>
                                <input id='tombolCount' name='tombolCount' type='button' value='+' onClick={props.tambahCount}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Name : 
                            </td>
                            <td>
                               <input id='namaPenggunaSekarang' name='namaPenggunaSekarang' type='text' value={props.penggunaName} onChange={props.setPenggunaSekarang}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input id='btnSubmit' name='btnSubmit' type='submit' value='Save'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Name : {props.penggunaName}</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
export default Content