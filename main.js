const jokeDisplay = document.querySelector('.displayJoke');
const button = document.querySelector('#getJoke');

button.addEventListener('click', function(){
    getRandomJoke();
})

function getRandomJoke(){
    const xhr = new XMLHttpRequest;
    const url = "https://api.chucknorris.io/jokes/random";
   
    xhr.open('GET', url, true);

    xhr.onreadystatechange = async function() {

      try {
        const response = await fetch(url);
        if(response.ok){
            console.log(response);
            let data = JSON.parse(this.response);
            jokeDisplay.innerHTML = `${data.value}`
        } 
      } catch (error) {
        console.log(error);
      }
    
    }
    xhr.send();
}


