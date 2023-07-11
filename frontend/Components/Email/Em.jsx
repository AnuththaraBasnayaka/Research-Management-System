import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Em() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
      
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const { email } = useParams();

  //const [Email,setEmail]= useState();
  return (
    <div className="container">
      <section class="mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={sendEmail}>
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      value={email}
                      name="to_email"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      placeholder="From :- "
                      id="email"
                      name="from_email"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" class="">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="sub_line"
                      value="Requesting Supervisor Assistance"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" class="">
                      Group ID
                    </label>
                    <input
                      type="text"
                      id="groupid"
                      name="grpID"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <label for="message">Selected Topic</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
              <br />

              <div class="text-center text-md-left">
                <button type="submit" class="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
