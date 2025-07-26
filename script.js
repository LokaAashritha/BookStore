const books = [
  {
    title: "My Jumbo Book",
    author: "Paulo Coelho",
    price : 299,
    image: "images/1.jpg",
    available : true
  },
  {
    title: "8 Stories",
    author: "James Clear",
    price : 299,
    image: "images/2.jpg",
    available : false
  },
  {
    title: "101 Fairy Tales",
    author: "Francesc Miralles",
    price : 299,
    image: "images/3.jpg",
    available : true
  },
    {
    title: "Chota bheem",
    author: "Francesc Miralles",
    price : 299,
    image: "images/7.jpg",
    available : true
  },
    {
    title: "Chutki",
    author: "Francesc Miralles",
    price : 299,
    image: "images/8.jpg",
    available : true
  },
    {
    title: "Raju",
    author: "Francesc Miralles",
    price : 299,
    image: "images/9.jpg",
    available : true
  },
    {
    title: "Jaggu",
    author: "Francesc Miralles",
    price : 299,
    image: "images/10.jpg",
    available : false
  },
    {
    title: "Kaaliya",
    author: "Francesc Miralles",
    price : 299,
    image: "images/11.jpg",
    available : true
  },
    {
    title: "Dholu - Bholu ",
    author: "Francesc Miralles",
    price : 299,
    image: "images/12.jpg",
    available : false
  },

  // Add more books here
];

const bookList = document.getElementById('bookList');

function displayBooks(bookArray) {
  bookList.innerHTML = '';
  bookArray.forEach(book => {
    const bookEl = document.createElement('div');
    bookEl.className = 'book';
    bookEl.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <p class="price">₹${book.price}</p>
      <p class="stock ${book.available ? 'in' : 'out'}">
        ${book.available ? '✅ In Stock' : '❌ Out of Stock'}
      </p>
      <button ${book.available ? '' : 'disabled'} onclick="purchaseBook('${book.title}', ${book.price})">
        ${book.available ? 'Purchase' : 'Not Available'}
      </button>
    `;
    bookList.appendChild(bookEl);
  });
}
function purchaseBook(title, price) {
  alert(`✅ You purchased "${title}" for ₹${price}`);
}
document.getElementById('searchBox').addEventListener('input', function () {
  const keyword = this.value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(keyword) ||
    book.author.toLowerCase().includes(keyword)
  );
  displayBooks(filteredBooks);
});

displayBooks(books);
