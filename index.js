async function fetchPoke(){
    try{
        const apiName = document.getElementById("apiName").value.toLowerCase(); 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${apiName}`)
        
            if(!response.ok){
                throw new Error("Could not fetch resource");
            }
          const data = await response.json();
          //console.log(data);
          const APISprite = data.sprites.front_default;
          const imgElement = document.getElementById("APISprite");

          imgElement.src = APISprite;
          imgElement.style.display = "block";

    }
    catch(error){
        console.error(error);
    }
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        return res.json();
    })
    .then(dataUser => {
        dataUser.forEach(user => {
            const markup = `<li>${user.name}, ${user.phone}</li>`;
            document.querySelector('ul').insertAdjacentHTML("beforeend", markup);
        });
    })
        .catch(error => console.log(error));

let numbers = [1, 2, 3,4, 5];
let maximum = Math.max(...numbers);

console.log(maximum);

// spread ... to create a shallow copy of an array (identical copy)
let fruits = ["apple", "orange", "banana"];
let newFruits = [fruits];
let vegetables = ["tomatoe", "onion"];

console.log(fruits);
console.log(newFruits);

newFruits = [...fruits];
console.log(newFruits);

let newArray = [...fruits, ...vegetables, "item1", "item2"];
console.log(newArray);