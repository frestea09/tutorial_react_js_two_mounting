import React from 'react'

class Header extends React.Component{
    render(){
        return(
            <div className='Header'>
                <h2>Website Programming {this.props.pengguna}</h2>
                <input id='buttonHai' name='buttonHai' type='button' onClick={this.props.sayHai} value='Hai'/>
            </div>
        )
    }
}
export default Header