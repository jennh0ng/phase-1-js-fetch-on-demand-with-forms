const init = () => {
    const inputForm = document.querySelector('form');
    // create an event listener that allows us to submit
    
    inputForm.addEventListener('submit', (event) => {
        // create HTML tags that allow us to reference to index.html (where we want our inputs to show up)
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
        console.log(input.value);

        // request data from the URL provided
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
          const title = document.querySelector('section#movieDetails h4');
          const summary = document.querySelector('section#movieDetails p');
    
          title.innerText = data.title;
          summary.innerText = data.summary;
    });
  });
}
  
document.addEventListener('DOMContentLoaded', init);




