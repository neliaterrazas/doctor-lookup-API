import {DoctorData} from './api.js';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('.userForm').submit(function(event) {
    event.preventDefault();

    const issueType = $('#issueType').val();
    const nameSearch = $('#nameSearch').val();

    const search = new DoctorData(issueType, nameSearch);
    const doctorData = search.getData();

    doctorData.then(function(response) {
      const doctorDataObject = JSON.parse(response);

    $('.results').text(`${this.issueType} ${this.nameSearch}`);

  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);

    });
  });



});
