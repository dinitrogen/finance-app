

const landingPage = () => {
    const contentDiv = document.querySelector('#content');
    const textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'textDiv');
    textDiv.textContent = "This is the landing page!";
    contentDiv.appendChild(textDiv);
};

export {landingPage}