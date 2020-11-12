import React,{useState,useEffect} from 'react';
import { Modal, Button } from "react-bootstrap";


const Update=(props)=>{

     const [name,setName]=useState('');
     const [age,setAge]=useState('');
     const [salary,setSalary]=useState('');
     const [designation,setDesignation]=useState('');
     const [address,setAddress]=useState('');

     useEffect(()=>{
         setSalary(props.salary);
         setName(props.name)
         setAge(props.age)
         setDesignation(props.designation)
         setAddress(props.address)
         
     },[])

    return(
        <>
        {/* <form>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>            
                <div className="col">
                    <input type="text" className="form-control" placeholder="salary" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
                </div>
            </div>
            <button onClick={(e)=>props.updateEmp(e,{name,age,salary,id:props.id})}>update</button>
        </form> */}
        <Modal show={props.showModal1} onHide={props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div className="form-control">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>            
                <div className="form-group">
                    <label>Salary</label>
                    <input type="text" className="form-control" placeholder="salary" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text" className="form-control" placeholder="Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={(e)=>props.updateEmp(e,{name,age,salary,designation,address,id:props.id})}>
            Update
          </Button>
                    
        </Modal.Footer>
      </Modal>
        </>
        
    )
}

export default Update;