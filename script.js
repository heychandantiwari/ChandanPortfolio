emailjs.init({
    publicKey: "JO6QmGAwFeT9sT6Fo"
});
const loginBtn = document.querySelector("#loginBtn");
const loginModal = document.querySelector("#loginModal");
const closeLogin = document.querySelector("#closeLogin");
const loginForm = document.querySelector("#loginForm");

loginBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (loginBtn.textContent === "Logout") {
        loginBtn.textContent = "Login";
    alert("Logout");
    }   
    else{
    loginModal.style.display = "flex";
    }
});

closeLogin.addEventListener("click", function () {
    loginModal.style.display = "none";
});

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
        document.querySelector("#username").value;

    const password =
        document.querySelector("#password").value;


    if (username.trim() === "chandan" && password.trim() === "12345") {

        alert("Login Successful!");

        loginModal.style.display = "none";
        loginBtn.textContent = "Logout";

    } else {

        alert("Wrong Username or Password!");

    }

});
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#contactName").value;
    const email = document.querySelector("#contactEmail").value;
    const message = document.querySelector("#contactMessage").value;

    emailjs.send("service_bpa22to", "template_qavpcuz", {
        name: name,
        email: email,
        message: message,
        title: "New Portfolio Contact Message"
    })
    .then(function () {
        alert("Message Sent Successfully!");
        contactForm.reset();
    })
    .catch(function (error) {
        console.error("EmailJS Error:", error);
        alert("Message send nahi hua. Please try again.");
    });
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }

    });

});
const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
