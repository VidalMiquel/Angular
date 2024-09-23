import './style.css';
//import './topics/01-basic-types';
//import './topics/02-object-interfaces';
//import './topics/03-functions';
import './topics/04-homework-types';

const app = document.querySelector<HTMLDivElement>('#app'); // Ensure you select the correct element by ID

if (app) { // Check if the element exists
    app.innerHTML = 'Hello world'; // Corrected 'HEllo' to 'Hello'
}
