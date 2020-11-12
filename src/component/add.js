import React,{useState} from 'react';
import { Modal, Button } from "react-bootstrap";


const Add=(props)=>{

     const [name,setName]=useState('');
     const [age,setAge]=useState('');
     const [salary,setSalary]=useState('');
     const [designation,setDesignation]=useState('');
     const [address,setAddress]=useState('');

    return(
        <>
      {/* <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Add Employee
        </Button>
      </div> */}
      <Modal show={props.showModal} onHide={props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-control">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" className="form-control" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Salary</label>
                        <input type="text" className="form-control" placeholder="salary" onChange={(e)=>setSalary(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Designation</label>
                        <input type="text" className="form-control" placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                </div>
                
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>props.addEmp(e,{name,age,salary,designation,address})}>
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Add;


