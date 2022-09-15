
import axios from 'axios';
import {Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default class Presence extends Component {

  state = {
    file: null
  }

  handleFile = (e: any) => {
    let file = e.terget.files[0]
    this.setState({file: file})
  }

  handleUpload(e: any){
    let file = this.state.file
    let formdata = new FormData()
    formdata.append('name','Arjun Yonjan')
    axios({
      url: '/api',
      method: 'get',
      data: formdata
    }).then((res)=>{

    })
  }
  
  render(): ReactNode {
      return(
        <div className='text-center m-5 p-5'>
          <div className='m-5 text-center container'>
          <input type="file" name='file' onChange={(e)=>this.handleFile(e)} onClick={(e)=>this.handleUpload(e)}/>
        </div>
        <div className='m-5 text-center container'>
        <Link to="/" className="col-sm-6 m-2">
          <button className='btn-info btn' ref='/'>Terminer</button>
        </Link>
        </div></div>
      );
  }

}