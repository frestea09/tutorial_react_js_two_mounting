import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
import Mahasiswa from './Component/Mahasiswa'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      penggunaName:'ilman teguh prasetya',
      count : 0,
      threshold : true,
      listMahasiwa : [
        {'nim':'10112299','name':'ilman'}
      ],
      penggunaSekarang : ''
    }
    this.sayHai = this.sayHai.bind(this)
    this.tambahCount = this.tambahCount.bind(this)
    this.kurangCount = this.kurangCount.bind(this)
    this.setPenggunaSekarang = this.setPenggunaSekarang.bind(this)
  }
  sayHai(){
    alert('Hello Ilman')
  }
  kurangCount(){
    this.setState(
      {
        count : this.state.count - 1
      }
    )
  }
  tambahCount(){
    this.setState(
      {
        count : this.state.count + 1
      }
    )
  }
  setPenggunaSekarang(inputPenggunaSekarang){
    this.setState(
      {
            penggunaSekarang : inputPenggunaSekarang.target.value
      }
    )
  }
  render(){
    let listMahasiswa = this.state.listMahasiwa.map(mahasiswa =><Mahasiswa name = {mahasiswa.name} key={mahasiswa.nim} nim={mahasiswa.nim}/>)
    return(
      <div>
        <Header pengguna={this.state.penggunaName} sayHai = {this.sayHai}/>
        <Content nomorCount={this.state.count} tambahCount = {this.tambahCount} kurangCount = {this.kurangCount} key={listMahasiswa.nim} listMahasiswa = {listMahasiswa} penggunaName = {this.state.penggunaSekarang} setPenggunaSekarang = {this.setPenggunaSekarang}/>
      </div>
    )
  }
}
export default App