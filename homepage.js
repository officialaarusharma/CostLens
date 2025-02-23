document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchButton.addEventListener('click', () => {
        alert(`Searching for: ${searchInput.value}`);
    });
});
