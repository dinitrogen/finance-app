import { contentDiv } from "./landingPage";

const displayCard = (contentToDisplay) => {

    const displayCardDiv = document.createElement('div');
    const displayCardText = document.createElement('div');
    displayCardText.id = "displayCard";
    displayCardText.textContent = contentToDisplay;
    
    displayCardDiv.appendChild(displayCardText);
    

    contentDiv.appendChild(displayCardDiv);
    
}


export {displayCard}