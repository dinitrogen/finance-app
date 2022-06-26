import { contentDiv } from "./landingPage";

const searchBar = (onClickFunction) => {

    const searchBarDiv = document.createElement('div');
    const searchBar = document.createElement('input');
    searchBar.id = "searchBar";
    const searchButton = document.createElement('button');
    searchButton.textContent = "Search";

    searchBarDiv.appendChild(searchBar);
    searchBarDiv.appendChild(searchButton);
    contentDiv.appendChild(searchBarDiv);

    const clearCheckbox = document.createElement('input');
    clearCheckbox.type = 'checkbox';
    clearCheckbox.id = 'clearCheckBox'
    const clearCheckboxLabel = document.createElement('label');
    clearCheckboxLabel.textContent = 'Clear previous entries?';
    clearCheckboxLabel.htmlFor = 'clearCheckBox';
    //clearCheckboxLabel.appendChild(document.createTextNode('Clear'));
    contentDiv.appendChild(clearCheckbox);
    contentDiv.appendChild(clearCheckboxLabel);

    searchButton.onclick = () => {
        onClickFunction(searchBar.value, clearCheckbox.checked);
       
    }


        
}

export {searchBar}