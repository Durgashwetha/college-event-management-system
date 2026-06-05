function updateDashboard(){

let events=
JSON.parse(localStorage.getItem("events")) || [];

document.getElementById("totalEvents")
.innerText=events.length;

let registrations=0;

events.forEach(event=>{

registrations+=event.registered;

});

document.getElementById("totalRegistrations")
.innerText=registrations;

}

function addEvent(){

let events=
JSON.parse(localStorage.getItem("events")) || [];

let event={

title:title.value,

desc:desc.value,

poster:poster.value,

date:date.value,

time:time.value,

limit:Number(limit.value),

form:form.value,

registered:0

};

events.push(event);

localStorage.setItem(
"events",
JSON.stringify(events)
);

alert("Event Added Successfully");

updateDashboard();

document
.querySelectorAll("input,textarea")
.forEach(e=>e.value="");

}

updateDashboard();