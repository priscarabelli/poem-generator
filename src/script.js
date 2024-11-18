function generatePoem(event) {
  event.preventDefault(); 

  new Typewriter('#poem', {
  strings: 'Wild eyes—and faces ashen grey',
  autoStart: true,  
  cursor: "", 
});
}

let poemformElement = document.querySelector("#poem-generator");
poemformElement.addEventListener('submit', generatePoem); 
