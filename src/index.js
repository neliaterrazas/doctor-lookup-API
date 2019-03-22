import {DoctorData} from './api.js';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('.userForm').submit(function(event) {
    event.preventDefault();
    const nameSearch = $('#name').val();
    const condition = $('#condition').val();

    const searchResults = new DoctorData(nameSearch, condition);
    console.log(searchResults);


    const names= searchResults.getName();
    console.log(names);

    names.then(function(response) {

      const doctorDataObject = JSON.parse(response);

    $('.results').text(" ");
    doctorDataObject.results.forEach(function(doctor){
      $('.results').append(`
        <div id="${this.nameSearch}" class="user">

        </div>`);
    });

  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);

    });
  });



});
