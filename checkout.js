document.addEventListener("DOMContentLoaded", () => {
    const checkoutBtn = document.getElementById("checkout-btn");
    const confirmation = document.getElementById("confirmation");
    const form = document.getElementById("billing-form");

    // Checkout Button Event Listener
    checkoutBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Check if the form is valid
        if (form.checkValidity()) {
            confirmation.classList.remove("hidden");
            window.scrollTo(0, 0); // Scroll to top
        } else {
            alert("Please fill out all required fields!");
        }
    });
});
