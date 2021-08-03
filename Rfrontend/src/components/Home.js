import React from 'react'
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
function Home() {

  

    const history = useHistory();

    const handleAdd = () =>{ 
        history.push("/AddVehicles");
      }
    const handleView = () =>{ 
        history.push("/ViewVehicles");
      }
    const handleUpdate = () =>{ 
        history.push("/UpdateVehicles");
      }
    const handleDelete = () =>{ 
        history.push("/DeleteVehicle");
      }
    return (
    
           <div className="card col-10 col-lg-4 login-card mt-4 hv-center ">
                             <button type="button" class="btn btn-primary"
                    className="btn btn-primary"
                    onClick={handleAdd}
          >
                    Add Vehicles
          </button>
          <br/>
          <button type="button" class="btn btn-primary"
                    className="btn btn-primary"
                    onClick={handleView}
          >
                    View Vehicles
          </button>
          <br/>
          <button type="button" class="btn btn-primary"
                    className="btn btn-primary"
                    onClick={handleUpdate}
          >
                    Update Vehicle
          </button>
          <br/>
          <button type="button" class="btn btn-primary"
                    className="btn btn-danger"
                    onClick={handleDelete}
          >
                   Delete Vehicle
          </button>
           </div>
    )
}

export default Home;
