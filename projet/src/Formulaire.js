import React, {Component} from 'react'

class Formu extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        start_hour: "",
        end_hour: "",
        topic: "",
        link: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){ 
      event.preventDefault();
      const PostDataAsync = async ()=>{
       var response =  await fetch ('http://localhost:5000/meeting', {
       method: 'post',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
        "start_hour" : this.start_hour.value,
        "end_hour" : this.end_hour.value,
        "topic" : this.topic.value,
        "link" : this.link.value
       })
       })
       const result = await response.json();
       this.setState(result);
     }
     PostDataAsync();
      };
  
    render() {
      return (
        <div>
          <h1>Meetings : </h1>
          
          <form method="POST" onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="start_hour">Start hour </label><br></br>
            <input class="formulaire" ref={(ref) => {this.start_hour = ref}} type="text" value={this.state.start_hour} onChange={(ev)=>this.setState({start_hour:ev.target.value})} id="start_hour" name="start_hour"/><br></br><br></br>
          </div>
          
          <div>
            <label htmlFor="end_hour">End hour </label><br></br>
            <input class="formulaire" ref={(ref) => {this.end_hour = ref}} type="text" value={this.state.end_hour} onChange={(ev)=>this.setState({end_hour:ev.target.value})} id="end_hour" name="end_hour"/><br></br><br></br>
          </div>

          <div>
            <label htmlFor="topic">Topic </label><br></br>
            <input class="formulaire" ref={(ref) => {this.topic = ref}} type="text" value={this.state.topic} onChange={(ev)=>this.setState({topic:ev.target.value})} id="topic" name="topic"/><br></br><br></br>
          </div>

          <div>
            <label htmlFor="link">Link </label><br></br>
            <input class="formulaire" ref={(ref) => {this.link = ref}} type="text" value={this.state.link} onChange={(ev)=>this.setState({link:ev.target.value})} id="link" name="link"/><br></br><br></br>
          </div>
            
            <button type="Submit">send</button>
          </form>
          <br></br>
          
          formulaire : {JSON.stringify(this.state)}
        </div>
      )
    }
  }

  export default Formu