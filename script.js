const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            topBtn.style.display = "flex";
        } 
        else {
            topBtn.style.display = "none";
        }

    });


    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


//===============================
// Mobile Menu
//===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuBtn && nav){

    menuBtn.addEventListener("click", function(){

        nav.classList.toggle("active");

    });

}


//===============================
// Navbar Scroll Effect
//===============================

const header = document.querySelector("header");


if(header){

    window.addEventListener("scroll", function(){

        if(window.scrollY > 80){

            header.classList.add("sticky");

        }
        else{

            header.classList.remove("sticky");

        }

    });

}


//===============================
// Scroll Reveal Animation
//===============================

const revealElements = document.querySelectorAll(
".section-heading, .card, .experience-right, .showcase-card, .service-card, .testimonial"
);


function reveal(){

    revealElements.forEach(function(element){

        const position = element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);


//===============================
// Counter Animation
//===============================

const counters = document.querySelectorAll(".exp-card h3");


if(counters.length > 0){


    window.addEventListener("load", function(){


        counters.forEach(function(counter){


            const target = parseInt(counter.textContent);

            let count = 0;

            const increment = target / 100;


            function updateCounter(){


                if(count < target){


                    count += increment;

                    counter.textContent = Math.ceil(count) + "+";

                    requestAnimationFrame(updateCounter);


                }
                else{


                    counter.textContent = target + "+";


                }


            }


            updateCounter();


        });


    });


}


//===============================
// Subscribe Form Alert
//===============================

const subscribeForm = document.getElementById("subscribeForm");


if(subscribeForm){


    subscribeForm.addEventListener("submit", function(e){


        e.preventDefault();


        alert("Thank you for subscribing to Veloura Estates updates! 😊");


        subscribeForm.reset();


    });


}


//===============================
// Contact Form Alert
//===============================

const contactForm = document.getElementById("contactForm");


if(contactForm){


    contactForm.addEventListener("submit", function(e){


        e.preventDefault();


        alert("Thank you for contacting Veloura Estates!\n We will get back to you soon. 😊");


        contactForm.reset();


    });


}

const inquiryForm = document.getElementById("inquiryForm");

if (inquiryForm) {
    inquiryForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("✅ Enquiry Sent Successfully!\n\nThank you for contacting Veloura Estates.\nOur property consultant will contact you shortly.😊");

        inquiryForm.reset();
    });
}

const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".property-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});

