document.addEventListener("DOMContentLoaded", function () {

    const hearts = document.querySelectorAll(".wishlist");

    hearts.forEach(function (heart) {

        const card = heart.closest(".property-card");

        const property = {
            id: card.querySelector("h3").innerText,
            name: card.querySelector("h3").innerText,
            image: card.querySelector("img").getAttribute("src"),
            location: card.querySelector(".location").innerText,
            price: card.querySelector(".property-bottom h4").innerText,
            details: card.querySelector(".gold-btn").getAttribute("href")
        };

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        const exists = wishlist.find(item => item.id === property.id);

        if (exists) {
            heart.querySelector("i").classList.remove("fa-regular");
            heart.querySelector("i").classList.add("fa-solid");
            heart.querySelector("i").style.color = "red";
        }

        heart.addEventListener("click", function () {

            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            const index = wishlist.findIndex(item => item.id === property.id);

            if (index === -1) {

                wishlist.push(property);

                localStorage.setItem("wishlist", JSON.stringify(wishlist));

                heart.querySelector("i").classList.remove("fa-regular");
                heart.querySelector("i").classList.add("fa-solid");
                heart.querySelector("i").style.color = "red";

                alert("❤️ Property added to Wishlist");

            } else {

                wishlist.splice(index, 1);

                localStorage.setItem("wishlist", JSON.stringify(wishlist));

                heart.querySelector("i").classList.remove("fa-solid");
                heart.querySelector("i").classList.add("fa-regular");
                heart.querySelector("i").style.color = "";

                alert("💔 Property removed from Wishlist");

            }

        });

    });

});