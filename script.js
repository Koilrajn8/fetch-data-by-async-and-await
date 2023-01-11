//select both the target

const fetchDataBtn=document.querySelector("#fetchdata");
const result=document.querySelector("#result");

//get the data from an api and set the contents of results accordingly

async function getData() {
result.innerHTML="Loading....";
try{
    const res = await fetch("https://api.github.com/users/lavishjain36");
    const data = await res.json();

    result.innerHTML=`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title" class="card-title">${data.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted" >${data.bio}</h6>
    <p class="card-text">${data.node_id}</p>
    <a href="${data.html_url}" class="btn btn-primary" class="card-link">Github profile</a>
    </div>
    </div>
    `
}
catch(err) {
    result.innerHTML=err;
}
}

fetchDataBtn.addEventListener("click",getData);