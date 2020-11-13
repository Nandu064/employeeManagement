import React from 'react';
import Add from './component/add';
import Update from './component/update';
import {Card ,Button} from "react-bootstrap"

class App extends React.Component{

  state={
     list:[
       {name:'Harish',age:23,salary:25000,designation:"Hr",address:"1-102,Near Ramalayam,Kurnool,Andhra Pradesh"},
       {name:'Prudhvi',age:23,salary:35000,designation:"Front-End Engineer",address:"2-23/45d,Near State Bank of India,Tirupathi,Andhra Pradesh"},
       {name:'Satish',age:35,salary:75000,designation:"Back-End Engineer",address:"1-104/28C,Sri Keerthy Apartments,Thiruvananthapuram,Kerala"},
       {name:'Kiran',age:30,salary:50000,designation:"DBA",address:"24/5A,Sai Apartments,Near Gandhi Chowk,Chennai,TamilNadu"},
       {name:'Viswas',age:25,salary:70000,designation:"Manager",address:"48B,Green Avenue Apartments,Hyderabad,Telangana"},
     ],
     updatedValue:{},
     adduser:true,
     isUpdate:false,
     showModal:'',
     showModal1:'',
  }
  
 
  AddUserHandler=()=>{
    this.setState({...this.state,adduser:false})
    this.setState({
      showModal:true,
    })
    
  }
  handleModal = ()=>{
    this.setState({
      adduser:true,
      showModal:false,
    })
  }
  handleModal1 = ()=>{
    this.setState({
      adduser:true,
      showModal1:false,
    })
  }

  AddEmpHandler=(e,value)=>{
    e.preventDefault();
    let oldEmp=this.state.list;
    oldEmp.push({name:value.name,age:value.age,salary:value.salary,designation:value.designation,address:value.address})
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
    this.setState({
      showModal1:true,
    })
  }

  updateEmp=(e,value)=>{
    e.preventDefault();
    let oldEmp=this.state.list;
    oldEmp.splice(value.id,1,{name:value.name,age:value.age,salary:value.salary,designation:value.designation,address:value.address})
    this.setState({list:oldEmp,isUpdate:false})
  }

  render(){
    
    const listOfEmp=this.state.list.map((item,index)=>{
      return(
            <div className="row" key={index} style={{margin:'10px',width:'18rem',display:'inline-block',height:'45vh'}}>
                <Card style={{ width: '18rem',backgroundColor:'#c4c4c4',height:'100%' }} >
                <Card.Body>
                  <Card.Text>
                    <p style={{color:'white'}}>Name: {item.name}  </p>
                    <p style={{color:'white'}}>Age : {item.age} </p>
                    <p style={{color:'white'}}>Salary : {item.salary} </p>
                    <p style={{color:'white'}}>Designation : {item.designation} </p>
                    <p style={{color:'white'}}>Address : {item.address} </p>
                  </Card.Text>
                  <Button variant="secondary" onClick={()=>this.upadateHandler(item,index)} style={{margin:'10px'}}>Edit</Button>
                  <Button variant="danger" onClick={()=>this.deleteEmpHandler(index)} >Delete</Button>
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
                    <span className="btn btn-primary" onClick={this.AddUserHandler}>Add Employee</span>
                    :<Add addEmp={this.AddEmpHandler} showModal={this.state.showModal} hideModal={this.handleModal} />
                    }
                    {this.state.isUpdate?<Update showModal1={this.state.showModal1} hideModal={this.handleModal1}
                    key={this.state.updatedValue.id}
                    name={this.state.updatedValue.name} 
                    age={this.state.updatedValue.age} 
                    salary={this.state.updatedValue.salary} 
                    designation={this.state.updatedValue.designation} 
                    address={this.state.updatedValue.address} 
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