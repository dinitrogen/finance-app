import { displayCard } from './displayCard';
import { getEquityData } from './getEquityData';
import {landingPage} from './landingPage';
import { searchBar } from './searchBar';
import './style.css';


console.log("Finance App testing");

landingPage();
searchBar(getEquityData);
displayCard('[Prices will display here]');



