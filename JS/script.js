document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const summaryName = document.getElementById("summary-name");
    const summaryFlavor = document.getElementById("summary-flavor");
    const summaryQuantity = document.getElementById("summary-quantity");
    const summaryInstructions = document.getElementById("summary-instructions");

    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const flavor = document.getElementById("flavor").value;
        const quantity = document.getElementById("quantity").value;
        const instructions = document.getElementById("special-instructions").value;

        summaryName.textContent = name;
        summaryFlavor.textContent = flavor;
        summaryQuantity.textContent = quantity;
        summaryInstructions.textContent = instructions;

        orderForm.style.display = "none";
        orderSummary.style.display = "block";
    });
});