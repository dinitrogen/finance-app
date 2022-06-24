const contentDiv = document.querySelector('#content');

const landingPage = () => {

    const textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'textDiv');
    textDiv.textContent = "This is the landing page!";
    contentDiv.appendChild(textDiv);
};

export {contentDiv, landingPage}