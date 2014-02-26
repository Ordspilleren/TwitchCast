// Save this script as `options.js`
// Saves options to localStorage.

function save_options() {
    var select = document.getElementById("ipaddress");
    var ipaddress = select.value;
    localStorage["ipaddress"] = ipaddress;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function () {
        status.innerHTML = "";
    }, 750);
}

// Restores select box state to saved value from localStorage.

function restore_options() {
    var ipaddress = localStorage["ipaddress"];
    if (!ipaddress) {
        return;
    }
    var select = document.getElementById("ipaddress");
    select.value = ipaddress;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);