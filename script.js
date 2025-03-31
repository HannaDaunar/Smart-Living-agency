"use strict";
const notification = document.querySelector(".notification-wrapper");
const notificationText = document.querySelector(".notification-text");

function showNotification() {
    notification.classList.remove("hidden");
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 5000)
}
const form = document.querySelector("#ordering");
const userName = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const checkbox = document.querySelector("#check");

function controlCheckbox() {
    return checkbox.checked
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    fetch(null /*the address for sending the form data is unknown*/ , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: HannaDaunar'
            },
            body: JSON.stringify({
                "name": userName.value,
                "email": email.value,
                "agree": controlCheckbox()
            })
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            notificationText.textContent = Object.values(data);
            form.reset();
            showNotification();

        })
        .catch((error) => {
            notificationText.textContent = Object.values(error);
            showNotification();
        })

});