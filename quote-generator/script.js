// Store DOM elements.
const cardElem = document.getElementById("card");
const quoteElem = document.getElementById("quote");
const authorElem = document.getElementById("author");
const twitterBtn = document.getElementById("twitter-btn");
const nextBtn = document.getElementById("next-btn");
const loader = document.getElementById("loader");

//
const showLoadingSpinner = () => {
  cardElem.style.display = "none";
  loader.style.display = "block";
};

const hideLoadingSpinner = () => {
  if (loader.style.display === "block") {
    cardElem.style.display = "initial";
    loader.style.display = "none";
  }
};

// Get quote and background image url from their APIs.
const getQuoteAndBgImage = async () => {
  showLoadingSpinner();

  const quoteApiUrl = "https://quotes.stormconsultancy.co.uk/random.json";
  const bgImageApiUrl = "https://picsum.photos/700/300.webp";

  try {
    const requests = [quoteApiUrl, bgImageApiUrl].map((url) => fetch(url));

    const responses = await Promise.all(requests);
    const quoteData = await responses[0].json();
    const bgImageData = responses[1];

    cardElem.style.backgroundImage = `url(${bgImageData.url})`;

    quoteElem.innerText = quoteData.quote;
    if (quoteData.author === "") {
      authorElem.innerText = "Anonymous";
    }
    authorElem.innerText = quoteData.author;
  } catch (err) {
    console.log("Error occurred while fetching quote.", err.message);
  }

  hideLoadingSpinner();
};

// Get quote from API.
// const getQuote = async function () {
//   const apiUrl = "https://quotes.stormconsultancy.co.uk/random.json";

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     quoteElem.innerText = data.quote;
//     authorElem.innerText = data.author;
//   } catch (err) {
//     console.log("Error occurred while fetching quote.", err.message);
//   }
// };

const tweetQuote = () => {
  const currentQuote = quoteElem.innerText;
  const currentAuthor = authorElem.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${currentQuote} — ${currentAuthor}&hashtags=random_quotes`;

  window.open(twitterUrl, "_blank");
};

nextBtn.addEventListener("click", getQuoteAndBgImage);
twitterBtn.addEventListener("click", tweetQuote);

// getQuote();
getQuoteAndBgImage();
