import React from 'react'
//Facebook  Login with Button style
//import FacebookLogin from 'react-facebook-login'

//Facebook Login with no button style
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import './App.css'

class Register extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name:"John Smith",
            email:"johnsmith@hotmail.com",
            picture:"https://bulma.io/images/placeholders/96x96.png"

        }
        this.responseFacebook = this.responseFacebook.bind(this)
    }
    responseFacebook(response) {
        console.log(response)
        this.setState({
            name: response.name,
            email:response.email,
            picture:response.picture.data.url
        })
    }
    render() {
        return (
            <div className="App">
                <FacebookLogin 
                    appId='2392979594051861'
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    render={(renderProps) => (
                        <button onClick={renderProps.onClick}>This is my custom FB button</button>
                    )}
                />
                <div>
                    <figure>
                        <img src={this.state.picture} alt="Not found" />
                    </figure>
                </div>
                <div>
                    <p>{this.state.name}</p>
                    <p>{this.state.email}</p>
                </div>
            </div>
        )
    }
}

export default Register