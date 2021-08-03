import React, { useEffect, useState } from 'react' //step1
import '../App.css';
import axios from 'axios';  //step 2
import { Link, useHistory } from 'react-router-dom';
function DeleteVehicle(props) {
    var [uploaddata,setUploaddata]= useState("") //step 3 create variable to store data from backend

    useEffect(() => { 
        getFuc(); //step 4 on page load we call function inside useeffect
      }, []);
    const getFuc=()=>{
        axios.get(`http://localhost:3200/api/vehicle/getAll`)  //step 5 axios get link and then catch
          .then(response =>{
              if(response.data){
                console.log(response.data);
                setUploaddata(response.data.vehi);
              }
          }).catch((err)=>{
              console.log(err)
          })
    }

    const submitForm=(event)=>{
        alert("Deleted")
    }
    return (
        <div style={{ width:"100%", height:"550px"}}>
        
        <center><div style={{ color:"black",width:"40%", }}>
        <h3 id="loginForm">Vehicles</h3>
        <br/>
        {  uploaddata && uploaddata.length!==0 && uploaddata.map((item,i) =>       // maping group of data or applying loop
                    <div  style={{marginTop:"40px",backgroundColor:"#C0C0C0",borderRadius:10,paddingLeft:"10px"}} key={i}>     
                         <button type="reset" className="btn btn-danger" style={{float: 'right'}} onClick={submitForm}>X</button>
                         <p > <b>Registration Number:</b> {item.regNo} </p> {/* calling by item */}
                        <p><b>Vehicle Type:</b>{item.vehicleType} </p>
                        <p><b>Vehicle Id :</b>{item.vehicleId} </p>
                        <p><b>Seating Capacity:</b>{item.seatingCap}</p>
                    </div>)}
        {/* <small id="emailHelp" className="form-text text-muted">No Vehicles Added !</small> */}
        </div></center></div>
    )
}

export default DeleteVehicle
