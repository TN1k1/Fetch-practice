const apiKey = "LxcGty2x3BEm9PolaESljbsv5fmVOrDtVUL8eb2Q"

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let apiDate = `${year}-${month}-${day}`;


let fetchUrl =`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${apiDate}`;
console.log(fetchUrl);

async function getPrevious() {
    date.setDate(date.getDate() - 1);

    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    apiDate = `${year}-${month}-${day}`;


    fetchUrl =`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${apiDate}`;

    await loadEvent();
}

/*fetch(fetchurl).then(function (response) {
    return response.json();
}).then(function (responseJson) {
    console.log(responseJson);
})*/

/*fetch(fetchurl)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))*/

async function fetchNasa() {
    const response = await fetch(fetchUrl)
    //console.log(response);
    const responseJson = await response.json();
    //console.log(responseJson);
    return responseJson;
}


async function loadEvent() {
    let data = await fetchNasa();
    console.log("data: ", data);

    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = //lecseréltük a insertadjacentHTML-t innerHTML-re, mert alá berakta volna újra
        `<h1>${data.title}</h1>
        <h2>${data.date}</h2>
        <p>${data.explanation}</p>
        <img src="${data.url}">`
}   

window.addEventListener("load", loadEvent);

document.querySelector("#prevDay").addEventListener("click", getPrevious)