document.addEventListener("DOMContentLoaded", function () {
    // Search functionality
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search your account options...");
    searchInput.id = "searchBar";
    searchInput.style.cssText =
        "margin: 20px auto; display: block; padding: 10px; width: 80%; max-width: 400px; border: 1px solid #ddd; border-radius: 5px;";
    document.body.insertBefore(searchInput, document.querySelector(".account-container"));

    // Event listener for filtering cards
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".account-card");

        cards.forEach((card) => {
            const title = card.querySelector("h3").innerText.toLowerCase();
            const content = card.innerText.toLowerCase();

            if (title.includes(query) || content.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Add card click event listener
    const accountCards = document.querySelectorAll(".account-card");

    accountCards.forEach((card) => {
        card.style.cursor = "pointer";
        card.addEventListener("click", function () {
            const cardTitle = card.querySelector("h3").innerText;
            alert(`You clicked on: ${cardTitle}`);
        });

        // Add hover effect
        card.addEventListener("mouseover", function () {
            card.style.backgroundColor = "#f0f8ff";
        });

        card.addEventListener("mouseout", function () {
            card.style.backgroundColor = "#fff";
        });
    });
});
