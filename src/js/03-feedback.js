import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
form.addEventListener("input", throttle(saveForm, 500));
form.addEventListener("submit", onSubmit);

const userData = {};

function saveForm(evt){
    const value = evt.target.value;
    const name = evt.target.name;
    if(name === "email"){
        userData.email = value;
    }else if(name === "message"){
        userData.message = value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

function checkSessionStorage(){
    const stateForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    if(!stateForm){
        return;
    }
    const {email, message} = stateForm;
    form.email.value = email || "";
    form.message.value = message || "";
}
checkSessionStorage()

function onSubmit(evt){
    evt.preventDefault();
    console.log(userData);
    localStorage.removeItem("feedback-form-state");
    evt.target.reset();
}