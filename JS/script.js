document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const summaryName = document.getElementById("summary-name");
    const summaryFlavor = document.getElementById("summary-flavor");
    const summaryQuantity = document.getElementById("summary-quantity");
    const summaryInstructions = document.getElementById("summary-instructions");

    let countDownDate = new Date("Mars 18, 2024 15:37:25").getTime();

    /*orderForm.addEventListener("submit", function (e) {
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
    });*/

    let x = setInterval(function() {
        clock = document.getElementById("clock");
        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        /*document.getElementById("clock").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";*/
      
        document.getElementById('days').firstElementChild.innerHTML = days;
        document.getElementById("hours").firstElementChild.innerHTML = hours;
        document.getElementById('minutes').firstElementChild.innerHTML = minutes;
        document.getElementById('seconds').firstElementChild.innerHTML = seconds;
        // If the count down is finished, write some text
       /* if (distance < 0) {
          clearInterval(x);
          document.getElementById("clock").innerHTML = "EXPIRED";
        }*/
      }, 1000);
}



);