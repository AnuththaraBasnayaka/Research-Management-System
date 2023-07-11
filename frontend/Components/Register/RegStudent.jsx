import React, { Component } from 'react';
import axios from 'axios';




class registerstudent extends React.Component{
    constructor(props) {
        super(props);

        /*
        *setStudentName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
        this.setStudentfName = this.setStudentfName.bind(this);
        this.setStudentPhone = this.setStudentPhone.bind(this);
        this.setStudentEmail = this.setStudentEmail.bind(this);
        this.setStudentPassword = this.setStudentPassword.bind(this);
        this.saveStudentData = this.saveStudentData.bind(this);

        this.state = {

            fname: '',
            phone: '',
            email: '',
            passwords: '',
           
        }
    }

    //user defined method, takes event input
    setStudentfName(e){
        this.setState({fname:e.target.value});
    }

    setStudentPhone(e) {
        this.setState({phone: e.target.value});
    }

    setStudentEmail(e) {
        this.setState({email: e.target.value});
    }

    setStudentPassword(e) {
        this.setState({passwords: e.target.value});
    }

    saveStudentData(e) {
        console.log('Student Data', this.state);

       
        const Student = {
            fullname: this.state.fname, 
            pnum: this.state.phone,
            Email: this.state.email,
            password: this.state.passwords,
            
        }

        //send data to backend
        //3 parameters: url of bkend api, data to send and configurations(optional)
     
      if(!this.state.fname) {
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
        axios.post('http://localhost:3001/api/student/add', Student)
        .then(()=> {
            alert('Student Data Successfuly Inserted');
            window.location="/"
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
                
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Student Registration </p>
                
                                <form className="mx-1 mx-md-4">

                                    
                                <div>
                                    <label className="form-label" for="form3Example3c">First Name</label>
                                    <input type="text" id="id1" className="form-control"
                                    value={this.state.fname}
                                    onChange={this.setStudentfName} 
                                    required />
                                    <div id="fr"></div>
                                </div>
                                <div>
                                    <label className="form-label" for="form3Example3c">Phone Number</label>
                                    <input type="text" id="id4" className="form-control" 
                                    value={this.state.phone}
                                    onChange={this.setStudentPhone}  required/>
                                    <div id="pn"></div>
                                </div>



                                    <div>
                                    <label className="form-label" for="form3Example3c">Email</label>
                                    <input type="email" id="id5" className="form-control" 
                                    pattern=".+@globex\.com"
                                    value={this.state.email}
                                    onChange={this.setStudentEmail} required/>
                                    <div id="em"></div>
                                    </div>

                                    <div>
                                    <label className="form-label" for="form3Example3c">Password</label>
                                    <input type="password" id="id6" className="form-control" 
                                    value={this.state.passwords}
                                    onChange={this.setStudentPassword} required/>
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
                                    <button type="button" className="btn btn-primary btn-lg" onClick={this.saveStudentData}>Register</button>
                                    </div>
                
                                </form>
                
                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                
                                <img src="https://skoolify.co.in/wp-content/uploads/2022/04/Untitled-design-4-1024x577.png" class="img-fluid" alt="Sample image"/>
                
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
export default registerstudent;