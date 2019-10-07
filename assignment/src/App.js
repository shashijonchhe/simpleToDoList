import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:{data:'', key:''},
      datas:[]
    }
  }

onHandleClick=()=>{
  let data=this.state.data
  let datas=this.state.datas
    datas.push(data)
    this.setState({
      datas
    })
}

onHandleChange=(e)=>{
  let data=this.state.data
    data=e.target.value
    this.setState({
      data
    })
 

}


onHandleDelete = (id) => {
  console.log("This is my id")
  let users = Object.assign([], this.state.datas);
  console.log(id +"This is my id")
  users.splice(id,1);
  this.setState({datas:users});
}

  render(){
    let datas=this.state.datas
    
    return(
        <div className="App">
            <h1>Shopping List</h1>
            <input type='text' onChange={this.onHandleChange}></input>
            <br />
            <button onClick={this.onHandleClick}>Add To Cart</button>
            
            <ol>
            
            {datas.map((el, key)=><li>{el}<button onClick={this.onHandleDelete.bind(this,key)}>Delete</button></li>)}
            
            </ol>
          
           
          

        </div>
    )
    }
}


export default App;
