// // Read JSON data from a local file using the fetch API
// let url =
//   "https://www.googleapis.com/books/v1/volumes?q=hello&maxResults=20&key=AIzaSyAmmNmQtSvaZbbermSfT3i_obTF1Bi6uX8";

let url = "./sample.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Work with the JSON data here
    console.log(data.items);
  })
  .catch((error) => {
    console.error("Error reading data from file:", error);
  });
