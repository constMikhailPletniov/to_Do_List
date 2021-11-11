window.addEventListener('load', localStorage.clear());
const INPUT = document.querySelector('#input-text');
const BUTTON = document.querySelector('#btn-push');
const SECTION = document.querySelector('.section');
const PLANS_OUT = document.querySelector('.plans-out');
const LIST = document.querySelector('.list');
const DELETE_BUTTON = document.getElementsByClassName('btn-delete-li');

BUTTON.addEventListener('click', addPlans);

