import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import axios from "axios";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    imagePath:'',
    exp:'',
    username:''
  };

  updateDetails=(data)=>{
      console.log(data);
      this.setState({username:data.username})
      this.setState({exp:data.exp})
      this.setState({imagePath:data.imagePath})
  }
  componentDidMount(){
    axios({
      headers:{'Authorization':window.sessionStorage.getItem('token')},
      method:'get',
      url:'http://localhost:8080/users/experience',
    }).then(res=>{
      const data = res.data;
      this.updateDetails(data);
    })
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onFileChange(event){
    let reader = new FileReader();
    reader.onloadend = ()=> {
      this.setState({imagePath:reader.result});
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  submitDetails(){
    window.alert("SENT")
      axios({
        headers:{'Authorization':window.sessionStorage.getItem('token')},
        method:'put',
        url:'http://localhost:8080/users/experience',
        data:{
          username:this.state.username,
          exp:this.state.exp,
          imagePath:this.state.imagePath
        }
      }).then(res=>{
      })
  }
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <img src={this.state.imagePath} width="600px"/>
        <MDButton onClick={()=>this.setState({imagePath:''})}>Clear Image</MDButton>
        <MDInput type="file" label="Image"  accept="image/*" onChange={(e)=>this.onFileChange(e)}/>
        <MDInput value={this.state.exp} onChange={(e)=>{this.setState({exp:e.target.value})}} multiline label="Experience" fullWidth/>
        <MDButton onClick={()=>this.submitDetails()}>Submit</MDButton>
      </div>
    );
  }
}
