const apiKey = "LxcGty2x3BEm9PolaESljbsv5fmVOrDtVUL8eb2Q"
let apiDate = "2011-04-01";
let fetchUrl =`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${apiDate}`;

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
    rootElement.insertAdjacentHTML("beforeend",`
        <h1>${data.title}</h1>
        <h2>${data.date}</h2>
        <p>${data.explanation}</p>
        <img src="${data.url}">
    `)
}
window.addEventListener("load", loadEvent);
