import React ,{useState}from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
function Register(props) {
    //name
    const [NameValue, setNameValue] = useState("")
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

//changes
      const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }
//change email
const onEmailChange = (event) => {
    setEmailValue(event.currentTarget.value)
}
//change pass
const onPasswordChange = (event) => {
    setPasswordValue(event.currentTarget.value)
}
//onsubmitform

const submitForm=(event)=>{
    event.preventDefault();


    if (!NameValue || !emailValue || !passwordValue)
    {
        alert("Enter the details")
    } 
    const variables = {
        name: NameValue,
        email:emailValue,
        password:passwordValue,
    }
    axios.post('http://localhost:3200/api/user/signup', variables)
    .then(response => {
        if (response.data.success) {
            alert('Signup Successfully ')
            console.log(response)
           history.push('/')
        } else {
            alert('Failed to signup')
        }
    }).catch(err=>{console.log(err)})
    
}
    // const handleSubmitClick = (e) => {
    //     e.preventDefault();
    //     if(state.password === state.confirmPassword) {
    //         // sendDetailsToServer()    
    //     } else {
    //         alert("wrong details")
    //     }
    // }
    return (
        <div style={{ width:"100%", height:"550px"}}>
        
        <center><div style={{ color:"white",width:"40%", }}>
            <form id="loginForm">
            <div className="form-group text-left">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="fullname" 
                        placeholder="Full name"
                        value={NameValue}
                        onChange={onNameChange}
                    />
                </div>
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
                    Register
          </button>
          <button 
                    type="reset" 
                    className="btn btn-danger"
                    // onClick={handleSubmitClick}
                     >
                    Reset
          </button>
            </form>
            {/* <small id="cta" className="form-text text-muted">Login to Account:<Link to="/Login">Login</Link></small> */}
       <a href="/Login" style={{color:"black"}}>Login</a>
       </div></center></div>
      
    )
}

export default Register;
