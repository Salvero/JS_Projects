// let apiQuotes = [];

// Show New Quote
function newQuotes() {
  // Pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
}

// Get Quotes From API
// async function getQuotes() {
//   const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     // console.log(apiQuotes[12]);
//     newQuotes();
//   } catch (error) {
//     // Catch Error Here
//   }
// }

// // On Load
// getQuotes();

newQuotes();
