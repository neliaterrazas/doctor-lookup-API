import {DoctorData} from './api.js';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('.userForm').submit(function(event) {
    event.preventDefault();
    const nameSearch = $('#name').val();
    const condition = $('#condition').val();


    const doctorData = new DoctorData();

    const promise = doctorData.getName(nameSearch, condition);


    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      body.data.forEach(doctor =>{
        const name = doctor.profile.first_name + " " + doctor.profile.last_name;
        const address = doctor.practices[0].visit_address.street + ", " + doctor.practices[0].visit_address.street2 + ", " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state;
        const phone = doctor.practices[0].phones[0].number;
        const website = doctor.practices[0].website;
        const accepting = doctor.practices[0].accepts_new_patients;

        console.log(address);
        console.log(accepting);
        console.log(phone);
        console.log(website);
        console.log(name);

        $('.name').text("Full name: " + name);
        $('.address').text("Address: " + address);
        $('.phone').text("Phone: " + phone);
        $('.website').text("Website: " + website);
        $('.accepting').text("Accepting new patients? " + accepting);







      }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
    });
  });
