document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault(); 

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    let formMessage = document.getElementById("formMessage");

    if (name && email && message) {

        formMessage.innerHTML = `<p style="color:green;">Thank you ${name}, your message has been sent!</p>`;

        document.getElementById("contactForm").reset();

    } else {

        formMessage.innerHTML = `<p style="color:red;">Please fill all fields!</p>`;

    }

});