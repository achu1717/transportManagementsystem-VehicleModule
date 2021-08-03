import React  ,{useState} from 'react'
import '../App.css';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
function AddVehicles(props) {
    const history = useHistory();

    const [vehicleReg, setvehicleReg] = useState("")
    const [vehicleId, setvehicleId] = useState("")
    const [vehicleType, setvehicleType] = useState("")
    const [seatingCap, setseatingCap] = useState("")

    const onVehicleRegChange = (event) => {
        setvehicleReg(event.currentTarget.value)
    }

    const onVehicleIdChange = (event) => {
        setvehicleId(event.currentTarget.value)
    }

    const onVehicleTypeChange = (event) => {
        setvehicleType(event.currentTarget.value)
    }
    
    const onSeatingCapChange = (event) => {
        setseatingCap(event.currentTarget.value)
    }

    const submitForm=(event)=>{
        event.preventDefault();
    
    
        if (!vehicleReg || !vehicleId || !vehicleType || !seatingCap)
        {
            alert("Enter the details")
        } 
        const variables = {
            regNo:vehicleReg,
            vehicleId:vehicleId,
            vehicleType:vehicleType,
            seatingCap:seatingCap,
        }
        axios.post('http://localhost:3200/api/vehicle/create', variables)
        .then(response => {
            if (response.data.success) {
                alert('Added Successfully ')
                console.log(response)
                // props.history.push('/')
            } else {
                alert('Failed to add vehicle')
            }
        }).catch(err=>{console.log(err)})
        
    }

    return (
        
        <div style={{ width:"100%", height:"550px"}}>
        
        <center><div style={{ color:"white",width:"40%", }}>
               <h3 id="loginForm">Add Vehicle Details</h3>
             <form id="loginForm">
            <div className="form-group text-left">
                    <label htmlFor="fullname">Vehicle Registration Number</label>
                    <input type="text" 
                        className="form-control" 
                        id="fullname" 
                        placeholder="eg: KL13AA9999"
                        value={vehicleReg}
                        onChange={onVehicleRegChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="fullname">Vehicle ID</label>
                    <input type="text" 
                        className="form-control" 
                        id="vehicleid" 
                        placeholder="Enter the ID"
                        value={vehicleId}
                        onChange={onVehicleIdChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="fullname">Vehicle Type</label>
                    <input type="text" 
                        className="form-control" 
                        id="vehicletype" 
                        placeholder="CAR/BUS/JEEP/VAN"
                        value={vehicleType}
                        onChange={onVehicleTypeChange}
                    />
                </div>
                
                <div className="form-group text-left">
                    <label htmlFor="seatingcap">Seating Capacity</label>
                    <input type="text" 
                        className="form-control" 
                        id="seatingcap" 
                        placeholder="Number of seats"
                        value={seatingCap}
                        onChange={onSeatingCapChange}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-success"
                    onClick={submitForm}
          >
                    Add vehicle
          </button>&nbsp;&nbsp;&nbsp;
          <button 
                    type="reset" 
                    className="btn btn-danger"
                    // onClick={handleSubmitClick}
                     >
                    Reset
          </button>
                </form>
           </div></center></div>
    )
}

export default AddVehicles
