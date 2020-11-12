import React from 'react';
import Add from './component/add';
import Update from './component/update';
import {Card ,Button} from "react-bootstrap"

class App extends React.Component{

  state={
     list:[
       {name:'ripon',age:23,salary:25000,designation:"Hr"},
       {name:'Harish',age:23,salary:35000,designation:"Front-End Engineer"},
       {name:'john',age:35,salary:75000,designation:"Back-End Engineer"},
     ],
     updatedValue:{},
     adduser:true,
     isUpdate:false,
     setShow:false
  }
  
  handleShow = () => {
    
  }
  AddUserHandler=()=>{
    this.setState({...this.state,adduser:false,setShow:true})
    
  }

  AddEmpHandler=(e,value)=>{
    e.preventDefault();
    let oldEmp=this.state.list;
    oldEmp.push({name:value.name,age:value.age,salary:value.salary,designation:value.designation})
    this.setState({list:oldEmp,adduser:true})
  }

  deleteEmpHandler=(index)=>{
      let oldEmp=this.state.list;
      oldEmp.splice(index,1);
      this.setState({list:oldEmp})
  }

  upadateHandler=(item,index)=>{
    let obj={...item,id:index}
    this.setState({isUpdate:true,updatedValue:obj})
  }

  updateEmp=(e,value)=>{
    e.preventDefault();
    let oldEmp=this.state.list;
    oldEmp.splice(value.id,1,{name:value.name,age:value.age,salary:value.salary,designation:value.designation})
    this.setState({list:oldEmp,isUpdate:false})
  }

  render(){
    
    const listOfEmp=this.state.list.map((item,index)=>{
      return(
            <div className="row" key={index} style={{margin:'10px'}}>
                <Card style={{ width: '300rem' }}>
                <Card.Body>
                  <Card.Text>
                    <p>Name:{item.name} </p>
                    <p>Age : {item.age} </p>
                    <p>Salary : {item.salary} </p>
                    <p>Designation : {item.designation} </p>
                  </Card.Text>
                  <Button variant="secondary" onClick={()=>this.upadateHandler(item,index)}>Edit</Button>
                  <Button variant="danger" onClick={()=>this.deleteEmpHandler(index)}>Delete</Button>
                  {/* <button className="btn btn-success" onClick={()=>this.upadateHandler(item,index)}>Edit</button>
                  <button className="btn btn-danger" onClick={()=>this.deleteEmpHandler(index)}>Delete</button> */}
                </Card.Body>
              </Card>
                {/* <h3 className="col-sm-10" style={{backgroundColor:'#c4c4c4',padding:'5px'}}>name : {item.name} | age : {item.age} | salary : {item.salary} | Designation : {item.designation}</h3>
                <button className="col-sm-1 btn btn-success" onClick={()=>this.upadateHandler(item,index)}>edit</button>
                <button className="col-sm-1 btn btn-danger" onClick={()=>this.deleteEmpHandler(index)}>Delete</button> */}
            </div>
      )
    })

    return(
      <div className="container">
            <div className="row mt-4">
              <div className="col-sm-12">
                    {this.state.adduser?
                    <span className="btn btn-primary" onClick={this.AddUserHandler}>Add EMP</span>
                    :<Add addEmp={this.AddEmpHandler}/>
                    }
                    {this.state.isUpdate?<Update 
                    name={this.state.updatedValue.name} 
                    age={
                      this.state.updatedValue.age
                    } 
                    salary={this.state.updatedValue.salary} 
                    designation={this.state.updatedValue.designation} 
                    id={this.state.updatedValue.id}
                    updateEmp={this.updateEmp}
                    />:null}
              </div>
            </div>
            {listOfEmp}
           
      </div>
    )
  }
}

export default App;