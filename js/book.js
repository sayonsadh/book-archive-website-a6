const errorMessage = document.getElementById('error-message');
errorMessage.style.display = 'none';

const searchButton = () => {
    const container = document.getElementById('cardContainer');
    container.textContent = '';
    const inputField = document.getElementById('inputField');
    const searchText = inputField.value;

    //error message for empty search box 
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';

    // clear data ...
    inputField.value = "";

    // no text in search box condtiton 
    if(searchText === ''){
      const errorMessage = document.getElementById('error-message');
      errorMessage.style.display = 'block';
      const result = document.getElementById('result');
      result.innerText = '';
    }
    else{
      // load data ...
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchresult(data.docs))
    }  
};

    const searchresult = docs =>{
    const container = document.getElementById('cardContainer');
    
    // clear display data
    container.textContent = '';

    //load result
    const docsLength = docs.length;
    const result = document.getElementById('result');
    result.innerText = `${docsLength} results found`;

    docs.forEach(doc =>{
      const div = document.createElement('div')
       div.classList.add('col')
       div.innerHTML=`
        <div class="card h-100">
            <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5>Book name: ${doc.title}</h5>
            <h5> Author name: ${doc.author_name}</h5>
            <p> Publisher: ${doc.publisher}</p>
            <p class="card-text">First publish year: ${doc.first_publish_year}</p>
            <p class="card-text">Publish date: ${doc.publish_date}</p>
          </div>
        </div>
       `;
       container.appendChild(div);
      })
 }