import { Component } from "react"
import axios from 'axios'

class Sectiontwo extends Component {
    constructor(props){
        super(props);
        this.state ={
            useremail: '',
            username: '',
            usergender: '',
            usermessage:'',
            userpass: '',
            sent:false,
        }
        this.handleName = this.handleName.bind(this);
        this.handlEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName=(e)=>{
        this.setState({
            username:e.target.value
        })
    };
    handleEmail=(e)=>{
        this.setState({
            useremail:e.target.value
        })
    };
    handleMessage=(e)=>{
        this.setState({
            usermessage:e.target.value
        })
    };

    handleChange(event){
        const target = event.target;
        const name  = target.name ;
        const value = target.type === 'checkbox' ? target.checked : target.value ;

        this.setState({
            [name]: value
        })

    }

    handleSubmit(event){
        // let mydata = this.state
    
    
        event.preventDefault();
        let data = {
            username:this.state.username,
            useremail:this.state.useremail,
            usermessage:this.state.usermessage
        }
        
     axios.post('/api/forma',data)
     .then(res=>{
         this.setState({
             sent:true,         
            },this.resetForm());
     }).catch(()=>{
         console.log("message not sent");
     })
    }

    //reseting initial data
    resetForm=()=>{
        this.setState({
            username:"",
            useremail:"",
            usermessage:"",
        })
        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        },3000)
    }
    

    render() {
        return (
            <div id="talk">
            <div  className="container-lg py-5">
                <div className="pb-3 border-bottom mb-4">
                    <h4 id="myred2" className="font-weight- "> Have A Question ? </h4>
                    <h3 className="display-6 text-success">Talk to us </h3>

                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text" className="form-control bg-light" 
                                name="username"
                                value={this.state.username} onChange={this.handleName}
                                placeholder="Enter Name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="useremail"
                                value={this.state.useremail} onChange={this.handleEmail} 
                                placeholder="Enter A Valid Email" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter Message</label>
                            <textarea className="form-control" name="usermessage"
                                value={this.state.usermessage} onChange={this.handleMessage} rows="3" required></textarea>
                        </div>
                        
                        
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>

                </div>
            </div>
            </div>
        );
    }

}

export default Sectiontwo;