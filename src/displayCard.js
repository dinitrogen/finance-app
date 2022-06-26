import './style.css'

const cardsDiv = document.querySelector('#cardsDiv');

const displayCard = (headerText, bodyText, clearListBoolean) => {

    
    const displayCardDiv = document.createElement('div');
    displayCardDiv.classList.add('displayCardDiv');
    const displayCardHeader = document.createElement('div');
    const displayCardText = document.createElement('div');
    displayCardHeader.textContent = headerText;
    displayCardText.textContent = bodyText;
    
    displayCardDiv.appendChild(displayCardHeader);
    displayCardDiv.appendChild(displayCardText);
    
    // Clear the previous card
    if (clearListBoolean) {
        cardsDiv.replaceChildren();
    }
    
    cardsDiv.appendChild(displayCardDiv);
    
}


export {displayCard}