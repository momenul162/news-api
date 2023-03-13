// API key !!!
const API_KEY = `764ba28a222043db8ca3c887ad99d303`;
const loadData = () => {
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-02-13&sortBy=publishedAt&apiKey=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.articles));
  // Start loading !!!
  toggleSpinner(true);
};

const displayData = (articles) => {
  const newsContainer = document.getElementById("news-container");
  articles.forEach((article) => {
    const creatDiv = document.createElement("div");
    creatDiv.classList.add("row", "mb-4", "border");
    creatDiv.innerHTML = `
    <div class="col-md-4 ps-4 pt-4">
        <img src="${
          article.urlToImage ? article.urlToImage : "No image data"
        }" class="img-fluid rounded-start" alt="" />
    </div>
    <div class="col-md-8">
        <div class="card-body">
         <h5 class="card-title">${article.title}</h5>
         <p class="card-text">${article.description}</p>
         <p class="card-text">${article.author ? article.author : "Not available author name"}</p>
         <p class="card-text"><small class="text-muted">${article.publishedAt}</small></p>
        </div>
    </div>     
  `;
    newsContainer.appendChild(creatDiv);
  });
  // End loading !!!
  toggleSpinner(false);
};

// Loading spinner set-up
const toggleSpinner = (isLoading) => {
  const loadSpinner = document.getElementById("load-spinner");
  if (isLoading == true) {
    loadSpinner.classList.remove("d-none");
  } else {
    loadSpinner.classList.add("d-none");
  }
};

loadData();
