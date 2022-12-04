import $ from 'jquery';
import Typed from 'typed.js';

const options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40,
};

const typed = new Typed('#text', options);

$('#jquery-example').text('jQuery works too');
