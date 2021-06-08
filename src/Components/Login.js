import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import{auth} from './firebase'

function Login() {

     const History=useHistory()

    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")

    // const MailChange=(e)=>{
    //     setEmail(e.taget.value)
    // }

    // const PassChange=(e)=>{
    //     setPass(e.taget.value)
    // }

    const signIn=(e)=>{
        e.preventDefault();

        auth
         .signInWithEmailAndPassword(Email,Pass)
         .then(auth=>{
             History.push('/')
         })
         
         .catch(e=>alert(e.message))
    }

    const register=(e)=>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(Email,Pass)
        .then((auth)=>{
            if(auth){
                History.push('/')
            }
        })
        .catch(e=>alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img alt="" className="loginLogo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" />
            </Link>

            <div className="container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={Email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={Pass} onChange={e=>setPass(e.target.value)}/>
                    <button className="signinbutton grow" type="submit" onClick={signIn}>Sign in</button>
                    <p className="agree">By continuing, you agree to Emporium's Conditions of Use and Privacy Notice.Please see our Privacy Notice,our Cookies Notice and our Interest-based Ads Notice</p>
                    <button className="newbutton grow" onClick={register}>Create Your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
