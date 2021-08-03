import React ,{useState}from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
function Login(props) {

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
 const history = useHistory();
    // const [state , setState] = useState({
    //     email : "",
    //     password : ""
    // })
    // const handleChange = (e) => {
    //     const {id , value} = e.target   
    //     setState(prevState => ({
    //         ...prevState,
    //         [id] : value
    //     }))
    // }
    // const handleRoute = () =>{ 
    //     history.push("/HomePage");
    //   }
    // const handleSubmitClick = (e) => {
    //     e.preventDefault();
    //     if(state.password === state.confirmPassword) {
    //         // sendDetailsToServer()    
    //     } else {
    //         alert("wrong details")
    //     }
    // }

    //change email
const onEmailChange = (event) => {
    setEmailValue(event.currentTarget.value)
}
//change pass
const onPasswordChange = (event) => {
    setPasswordValue(event.currentTarget.value)
}
//submitloginform
const submitForm=(event)=>{
    event.preventDefault();


    if (!emailValue || !passwordValue)
    {
        alert("Enter the details")
    } 
    const variables = {
        email:emailValue,
        password:passwordValue,
    }
    axios.post('http://localhost:3200/api/user/signin', variables)
    .then(response => {
        if (response.data.success) {
            // alert('Signuin Successfull ')
            console.log(response)
            history.push('/HomePage')
        } else {
            alert('login Failed')
        }
    }).catch(err=>{console.log(err)})
    
}
    return (
        <div style={{ width:"100%", height:"550px"}}>
        
           <center><div style={{ color:"white",width:"40%", }}>
            <form id="loginForm">
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={emailValue}
                       onChange={onEmailChange}
                />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={passwordValue}
                        onChange={onPasswordChange}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={submitForm}
          >
                    Login
          </button>&nbsp;
          <button 
                    type="reset" 
                    className="btn btn-danger" 
                    // onClick={handleSubmitClick}
                     >
                    Reset
          </button>
            </form>
            <small id="cta" >Create an Account:&nbsp;&nbsp;&nbsp;<Link to="/Register" style={{color:"black"}}>Register</Link></small>
       </div></center>
       </div>
      
    )
}

export default Login;
