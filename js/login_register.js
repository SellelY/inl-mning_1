"use strict";

const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");

//Förhindrar input från att refresha när vi klickar på button
form.addEventListener("submit", (e) => {
    e.preventDefault();
})