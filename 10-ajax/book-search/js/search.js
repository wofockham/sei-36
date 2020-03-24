const searchForm = document.querySelector('form'); // fetch the form element
searchForm.addEventListener('submit', function (event) { // attach an event handler to the form
  event.preventDefault(); // stay on this page.

  // get the book title
  const bookTitle = document.getElementById('book_title').value;
  // create the google books URL
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;
  // create the xhr object
  const xhr = new XMLHttpRequest();
  // open the connection
  xhr.open('GET', url);
  // send the request
  xhr.send();
  // set up the onreadystatechange
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // Data not ready so nothing to do.

    // parse the response
    const data = JSON.parse( xhr.responseText );
    // extract the cover image
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    // display the cover
    document.getElementById('cover').setAttribute('src', cover);
  }
});
