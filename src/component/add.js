import React,{useState} from 'react';
import { Modal, Button } from "react-bootstrap";


const Add=(props)=>{

     const [name,setName]=useState('');
     const [age,setAge]=useState('');
     const [salary,setSalary]=useState('');
     const [designation,setDesignation]=useState('');

     const [showModal, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    return(
        <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Add Employee
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-row">
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Age</label>
                    <input type="text" className="form-control" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Salary</label>
                    <input type="text" className="form-control" placeholder="salary" onChange={(e)=>setSalary(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Designation</label>
                    <input type="email" className="form-control" placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)}/>
                </div> 
                </div>
                
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>props.addEmp(e,{name,age,salary,designation})}>
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Add;


