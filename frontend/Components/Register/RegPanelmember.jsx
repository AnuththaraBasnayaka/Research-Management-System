import React, { Component } from 'react';
import axios from 'axios';




class registerpanelMember extends React.Component{
    constructor(props) {
        super(props);

        /*
        *setpanelMemberName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
        this.setpanelMemberfullname = this.setpanelMemberfullname.bind(this);
        this.setpanelMemberPhone = this.setpanelMemberPhone.bind(this);
        this.setpanelMemberEmail = this.setpanelMemberEmail.bind(this);
        this.setpanelMemberPassword = this.setpanelMemberPassword.bind(this);
        this.savepanelMemberData = this.savepanelMemberData.bind(this);

        this.state = {

            fullname: '',
            phone: '',
            email: '',
            passwords: '',
           
        }
    }

    //user defined method, takes event input
    setpanelMemberfullname(e){
        this.setState({fullname:e.target.value});
    }

    setpanelMemberPhone(e) {
        this.setState({phone: e.target.value});
    }

    setpanelMemberEmail(e) {
        this.setState({email: e.target.value});
    }

    setpanelMemberPassword(e) {
        this.setState({passwords: e.target.value});
    }

    savepanelMemberData(e) {
        console.log('panelMember Data', this.state);

       
         const panelMember = {
            fullname: this.state.fullname,
            pnum: this.state.phone,
            Email: this.state.email,
            password: this.state.passwords,
        }

        //send data to backend
        //3 parameters: url of bkend api, data to send and configurations(optional)
     
      if(!this.state.fullname) {
          document.getElementById("id1").className = "form-control is-invalid";
          document.getElementById("fr").innerHTML = "Name cannot be empty";
          document.getElementById("fr").className = "invalid-feedback";
      }

    else if(!this.state.phone) {
      document.getElementById("id4").className = "form-control is-invalid";
      document.getElementById("pn").innerHTML = " Mobile cannot be empty";
      document.getElementById("pn").className = "invalid-feedback";
  }

  else if(!this.state.email) {
    document.getElementById("id5").className = "form-control is-invalid";
    document.getElementById("em").innerHTML = " Enter valid email";
    document.getElementById("em").className = "invalid-feedback";
  }


    else if(!this.state.passwords) {
      document.getElementById("id6").className = "form-control is-invalid";
      document.getElementById("ps").innerHTML = "Password cannot be empty";
      document.getElementById("ps").className = "invalid-feedback";
    
     if(this.state.passwords.length < 8) {
      document.getElementById("id5").className = "form-control is-invalid";
      document.getElementById("ps").innerHTML = "Password should contain at least 8 characters";
      document.getElementById("ps").className = "invalid-feedback";
      return;
     }
    }

  

  else{
        axios.post('http://localhost:3001/api/panelmember/add', panelMember)
        .then(()=> {
            alert('panelMember Data Successfuly Inserted');
        }).catch((err) => {
            alert(err.message);
        });
    
      }
        //after submission, user will redirected here
        //window.location = '/';
    }

    

    render(){
        return(
            <div><br/><br/>  
                <section className="vh-50" style={{backgroundcolor:"#eee"}}>
                    <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderradius: "25px"}}>
                            <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Panel Memeber Registration </p>
                
                                <form className="mx-1 mx-md-4">

                                <div>
                                    <label className="form-label" for="form3Example3c">Full Name</label>
                                    <input type="text" id="id1" className="form-control"
                                    value={this.state.fullname}
                                    onChange={this.setpanelMemberfullname} 
                                    required />
                                    <div id="fr"></div>
                                </div>

                                <div>
                                    <label className="form-label" for="form3Example3c">Phone Number</label>
                                    <input type="text" id="id4" className="form-control" 
                                    value={this.state.phone}
                                    onChange={this.setpanelMemberPhone}  required/>
                                    <div id="pn"></div>
                                </div>
                                    <div>
                                    <label className="form-label" for="form3Example3c">Email</label>
                                    <input type="email" id="id5" className="form-control" 
                                    pattern=".+@globex\.com"
                                    value={this.state.email}
                                    onChange={this.setpanelMemberEmail} required/>
                                    <div id="em"></div>
                                    </div>

                                    <div>
                                    <label className="form-label" for="form3Example3c">Password</label>
                                    <input type="password" id="id6" className="form-control" 
                                    value={this.state.passwords}
                                    onChange={this.setpanelMemberPassword} required/>
                                    <div id="ps"></div>
                                </div>     
                                <div class="col-12">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                    </div>
                                </div><br/>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={this.savepanelMemberData}>Register</button>
                                    </div>
                
                                </form>
                
                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                
                                <img src="https://www.data-science.ie/wp-content/uploads/2019/01/signup.png" class="img-fluid" alt="Sample image"/>
                
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section><br/><br/>   
            </div>
        );
    }   
}
export default registerpanelMember;