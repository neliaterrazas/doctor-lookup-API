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
      body.data.forEach(doctor =>{
        const name = doctor.profile.first_name + " " + doctor.profile.last_name;
        //define consts for missing info and then create a new class 
        console.log(name);
        $('.results').text(name);


      }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
    });
  });
