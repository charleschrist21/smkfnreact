import React, {Component} from 'react'
import {Button,Form} from 'react-bootstrap'
import axios from 'axios'

import bg from '../../assets/img/bglgn.jpg'

import './login.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state={
            email : '',
            password : '',
        }
    }

    onChangeEmail(e){
        this.setState({
            email : e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();

        const obj={
            email : this.state.email,
            password : this.state.password
        }
        axios.post('http://localhost:8000/api/auth/login/', obj)
          .then(res => {
              console.log(res.data)
              localStorage.setItem('a',res.data.token)
              window.location.reload()
            });
        
    }

    render(){
        return(
            <div className='lgnAll'>
                <div>
                    <h2 className="txt-halo-lgn">Halo ,</h2>
                    <h2 className='txt-admin-lgn'>Admin</h2>
                </div>
                <div>
                    <p className="txt-welcome-admin">Welcome Back , Please Login</p>
                    <p className="txt-welcome-admin-2">to your account</p>
                </div>
                <div className='form-login'>
                <Form onSubmit={this.onSubmit}>
                <Form.Group className='txt-input-email-login' controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" value={this.state.email}
                        onChange={this.onChangeEmail}/>
                </Form.Group>

                <Form.Group className='txt-input-password-login' controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" value={this.state.password}
                        onChange={this.onChangePassword}/>
                </Form.Group>
                <Button className='btnlogin' type="submit" >
                    Login
                </Button>
                </Form>
                </div>
                <div className='txt-agree-login'>
                    <p>By Signin you agree to SMKN 3</p>
                    <p><b>Term and Conditions</b> & <b>Privacy Policy</b></p>
                </div>
                <div>
                    <img id="img-bg-lgn" src={bg}alt=""/>
                </div>
            </div>
        )
    }
}
export default Login;