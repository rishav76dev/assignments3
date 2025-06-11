async function getType(){
    const result = await fetch('https://pokeapi.co/api/v2/type');
    const data = await result.json();
cardContainer.innerHTML="";
    data.results.forEach(type=>{
        const options = document.createElement('option')
        options.value = type.name;
        options.textContent = type.name;
        categoryselect.appendChild(options);
    });
    
    console.log(data);
}
const categoryselect= document.getElementById('category');
getType();

const submit= document.getElementById('submit')

submit.addEventListener('click',rendercard)

function rendercard(){
    cardContainer.innerHTML="";
    const card_no=document.getElementById('num');
    const select_card_no=card_no.value;
    


    const types=document.getElementById('category');
    const type=types.value;
    

    getpokemoncard(type,select_card_no);
    

}

async function getpokemoncard(type,select_card_no){
   const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await res.json();
  

  data.pokemon.slice(0,select_card_no).forEach(async (pokobj)=>{
    const name = pokobj.pokemon.name;
    const img_res =await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const fullData = await img_res.json();
const img = fullData.sprites.front_default;
const realName = fullData.name;
actualrender(img, realName);

  })
}


const cardContainer = document.getElementById("card");
function actualrender(img, realName){
    
    const card = document.createElement("div");
    card.classList.add("poke-card");
    card.innerHTML = `
  <img src="${img}" alt="${realName}" />
  <h3>${realName}</h3>
`;
cardContainer.appendChild(card);
}