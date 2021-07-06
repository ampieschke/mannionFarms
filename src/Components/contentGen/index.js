import React, {Component} from 'react';
import API from "../../utils/API";
// import Button from "react-bootstrap/Button"



class ContentGen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          // content: ""
        };
        this.titleChange = this.titleChange.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleTopicClick = this.handleTopicClick.bind(this);
        // this.loadTopics = this.loadTopics.bind(this)
      }


      titleChange = (e) => {
        this.setState({ title: e.target.value });
      };

      handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.title);
        // console.log(this.state.content);
        API.saveArticle({
          title: this.state.title,
          // content: this.state.content,
        });
        // window.location.reload();
      }

    render(){

        return(
            <div>
            <h3>Content Generator</h3>
            <p>{this.state.title}</p>
            <form onSubmit={this.handleSubmit} className="col s12">
            <div className="input-field col xl5 l5 m5 s12">
              <input
                id="title"
                className="articleTitle"
                placeholder="Title"
                onChange={this.titleChange}
                value={this.state.title}
              ></input>
            </div>
            <div className="input-field col xl2 l2 m2 s12 ">
              <button variant="primary" type="submit">
                Submit
              </button>
              </div>
            </form>
            </div>
        )
    }
}

export default ContentGen;