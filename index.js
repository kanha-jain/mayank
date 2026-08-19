import appHeader from "./js/components/header.js";

function onDOMLoad() {
    console.log("From index.js")
    appHeader();
}

window.addEventListener("DOMContentLoaded", onDOMLoad);