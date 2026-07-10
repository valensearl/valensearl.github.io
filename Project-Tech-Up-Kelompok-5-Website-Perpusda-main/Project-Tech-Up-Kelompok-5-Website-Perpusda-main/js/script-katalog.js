const bookshelf = document.getElementById("catalogBookshelf");

const emptyState = document.getElementById("catalogEmptyState");

const searchInput = document.getElementById("catalogSearch");

const categoryFilter = document.getElementById("catalogCategoryFilter");

const statusFilter = document.getElementById("catalogStatusFilter");

// Render buku

function renderBooks(bookList) {
  bookshelf.innerHTML = "";

  if (bookList.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  bookList.forEach((book) => {
    bookshelf.innerHTML += `
            <article class="catalog-book-item">

                <div class="catalog-book-cover-wrapper">

                    <img
                        src="${book.cover}"
                        alt="${book.title}"
                        class="catalog-book-cover"
                    >

                    <span class="
                        catalog-book-status
                        ${
                          book.status === "Tersedia"
                            ? "catalog-status-available"
                            : "catalog-status-borrowed"
                        }">

                        ${book.status}

                    </span>

                </div>

                <span class="catalog-book-category">
                    ${book.category}
                </span>

                <h3 class="catalog-book-title">
                    ${book.title}
                </h3>

                <p class="catalog-book-author">
                    ${book.author}
                </p>

            </article>
        `;
  });
}

// Search dan filter

function filterBooks() {
  const keyword = searchInput.value.toLowerCase();

  const category = categoryFilter.value;

  const status = statusFilter.value;

  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(keyword) ||
      book.author.toLowerCase().includes(keyword);

    const matchCategory = category === "" || book.category === category;

    const matchStatus = status === "" || book.status === status;

    return matchSearch && matchCategory && matchStatus;
  });

  renderBooks(filteredBooks);
}

// Event

searchInput.addEventListener("input", filterBooks);

categoryFilter.addEventListener("change", filterBooks);

statusFilter.addEventListener("change", filterBooks);

// Pertama kali halaman dibuka

renderBooks(books);
