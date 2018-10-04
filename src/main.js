// import './sass/styles.scss';
import $ from 'jquery';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {getInputtedDate, switchTest } from './business.js';

$(document).ready(function() {
  $('#inputForm').submit(function(event) {
    event.preventDefault();
    let value = $('input#inputtedDate').val();
    let day = getInputtedDate(value);
    let switchResult = switchTest(day);    $('#finalOutput').text(switchResult);
  });


});
