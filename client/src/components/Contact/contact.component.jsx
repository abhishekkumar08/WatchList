import React, { useState } from "react";
import { useQuery } from "@apollo/client";

const Contact = () => {
    return (
        <div className="container1">
        <div className="contact" id="contact">
          <div className="contact__title">Contact</div>
          <div className="contact__content">
            <div className="name_cnt">
              <input type="text" className="name" id="name" required placeholder="Full Name"/>
              <label1 for="name"></label1>
            </div>
            <div className="email_cnt">
              <input type="email" className="email" id="email" required placeholder="Email"/>
              <label1 for="email"></label1>
            </div>
            <div className="subject_cnt">
              <input type="text" className="subject" id="subject" required placeholder="Subject"/>
              <label1 for="subject"></label1>
            </div>
            <div className="msg_ctn">
              <textarea name="msg" id="" cols="30" rows="4" id="msg" className="msg" required placeholder="Message"></textarea>
              <label1 for="msg" className="msg_lbl"></label1>
            </div>
            <button className="btn1">Send Message</button>
          </div>
        </div>
      </div>
      
      );
}
 
export default Contact;

