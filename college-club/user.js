function loadEvents(){

let events=
JSON.parse(localStorage.getItem("events")) || [];

let search=
document.getElementById("search")
.value
.toLowerCase();

let container=
document.getElementById("events");

container.innerHTML="";

events
.filter(event=>
event.title.toLowerCase()
.includes(search))
.forEach((event,index)=>{

let progress=
(event.registered/event.limit)*100;

container.innerHTML+=`

<div class="event-card">

<img src="${event.poster}">

<div class="event-content">

<h3>${event.title}</h3>

<p>${event.desc}</p>

<p>📅 ${event.date}</p>

<p>⏰ ${event.time}</p>

<p>
Seats:
${event.registered}
/
${event.limit}
</p>

<div class="progress">

<div
class="progress-bar"
style="width:${progress}%">
</div>

</div>

${
event.registered<event.limit

?

`<button onclick="register(${index})">
Register
</button>`

:

`<button disabled>
Registration Closed
</button>`
}

</div>

</div>

`;

});

}

function register(index){

let events=
JSON.parse(localStorage.getItem("events")) || [];

events[index].registered++;

localStorage.setItem(
"events",
JSON.stringify(events)
);

window.open(
events[index].form,
"_blank"
);

loadEvents();

}

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

loadEvents();