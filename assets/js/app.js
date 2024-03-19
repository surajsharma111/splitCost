(() =>{
let discription = document.getElementById("description");
let amount = document.getElementById("amount");
let date = new Date();
let allItems = [];

function addnewItems(event){
    event.preventDefault();
}

function populateItem(allItems){
    let listItems = document.getElementsByClassName("shopping-list-ul")[0];

    const allElements = [];
    allItems.forEach((item) =>{
        allElements.push(`<div class="list-title">
        <div>
           <h4> ${discription}</h4>
            <p>${date}</p>
        </div>
        <h4>${amount}</h4>
    </div>`)
    });
    listItems.innerHTML = allElements.join("");
 

   
}

function addButton(){
    document.getElementById('addnew-button').addEventListener((click) =>{
        console.log('HI');
        populateItem();
        addnewItems();
    })
}
})()




