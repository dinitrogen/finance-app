const contentDiv = document.querySelector('#content');

const landingPage = () => {

    const textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'textDiv');
    textDiv.textContent = "Search for an equity of your choice!";
    contentDiv.appendChild(textDiv);
};

export {contentDiv, landingPage}