import {Dropdown as List} from '../dropdown/dropdown.js';

let elems = document.querySelectorAll('.expandable-list');
elems.forEach(elem => new List(elem));