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

    searchButton.onclick = () => {
        onClickFunction(searchBar.value)
    }
        
}

export {searchBar}