// Script to Sort Products
document.querySelector("select").addEventListener("change", function () {
    const option = this.value;
    const productGrid = document.querySelector(".product-grid");
    const products = Array.from(document.querySelectorAll(".product-card"));

    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector(".price").innerText.slice(1));
        const priceB = parseFloat(b.querySelector(".price").innerText.slice(1));

        return option.includes("low to high") ? priceA - priceB : priceB - priceA;
    });

    productGrid.innerHTML = ""; // Clear current products
    products.forEach(product => productGrid.appendChild(product));
});
