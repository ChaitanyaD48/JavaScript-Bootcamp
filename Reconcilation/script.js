// Reconcilation is process of React or Vue which takes the update of state and translating it to the DOM by calling .AppendChild and .removeChild

function createDomElements(data){
    var parentElement = document.getElementById("mainArea");
    for (var i = 0; i<data.length; i++) {
        var childElement = document.createElement("div");

        var grandChildElement1 = document.createElement("span");
        grandChildElement1.innerHTML = data[i].title

        var grandChildElement2 = document.createElement("span");
        grandChildElement2.innerHTML = data[i].description

        var grandChildElement3 = document.createElement("button");
        grandChildElement3.innerHTML = "Delete"

        childElement.appendChild(grandChildElement1)
        childElement.appendChild(grandChildElement2)
        childElement.appendChild(grandChildElement3)

        parentElement.appendChild(childElement);
    }
}

window.setInterval(() => {
    let todos = [];
    for(let i=0;i<Math.floor(Math.random * 100);i++){
        todos.push({
            title: "Go to Gym ",
            description: "5 pm - 7 pm"
        })
    }
    createDomElements(todos);
}, 1000)