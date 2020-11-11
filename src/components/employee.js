import React, { Component } from 'react'



class employee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Harish",
             age:28,
             designation:""
        }
        this.setState({
            name:"nandu"
        })
    }
    render() {
        return (
            <div>
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">Employee Name: {this.state.name} </p>
                        <a href="" class="btn btn-primary">Edit</a>
                        <a href="" class="btn btn-primary">Delete</a>
                    </div>
                </div>
        </div>
        )
    }
}

export default employee

