function displayPoem(response) {
 new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true, 
  delay: 1,  
  cursor: "", 
});
}

function generatePoem(event) {
  event.preventDefault(); 

  let instructionsInput = document.querySelector("#prompt"); 
  let apiKey = "eab04436t3405o6e84aadcd05339dfb6"; 
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`; 
  let context = "You are a romantic Poem expert and love to write short poems about. Your mission is to generate a 4 to 6 line poem using HTML and separate each line with a <br/>. Do not show the html in the frontend. Make sure to follow user instructions. Add signature at the end 'Generated by SheCodes AI' in a <strong> tag."; 
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden"); 
  poemElement.innerHTML = `<div class="generating">⌛Generating your poem about ${instructionsInput.value}.</div>`;  

  axios.get(apiUrl).then(displayPoem);  
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener('submit', generatePoem); 

 new Typewriter('h1', {
  strings: "AI POEM GENERATOR",
  autoStart: true,   
  cursor: "", 
});
