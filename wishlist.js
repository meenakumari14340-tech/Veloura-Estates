document.addEventListener("DOMContentLoaded", function () {

    const wishlistContainer = document.getElementById("wishlistContainer");

    if (!wishlistContainer) return;

    renderWishlist();

    function renderWishlist() {

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        wishlistContainer.innerHTML = "";

        if (wishlist.length === 0) {

            wishlistContainer.innerHTML = `
                <div class="empty">
                    <i class="fa-solid fa-heart-crack"></i>
                    <h2>Your Wishlist is Empty</h2>
                    <p>Browse our premium properties and add your favourites.</p>
                    <a href="properties.html" class="gold-btn">Browse Properties</a>
                </div>
            `;

            return;
        }

        wishlist.forEach((item) => {

            wishlistContainer.innerHTML += `
                <div class="wishlist-card">

                    <img src="${item.image}" alt="${item.name}">

                    <div class="wishlist-content">

                        <h3>${item.name}</h3>

                        <p class="wishlist-location">
                            <i class="fa-solid fa-location-dot"></i>
                            ${item.location}
                        </p>

                        <h4 class="wishlist-price">${item.price}</h4>

                        <div class="wishlist-buttons">

                            <a href="${item.details}" class="gold-btn">
                                View Details
                            </a>

                            <button class="remove-btn" onclick="removeWishlist('${item.id}')">
                                Remove
                            </button>

                        </div>

                    </div>

                </div>
            `;

        });

    }

    window.removeWishlist = function(id){

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        wishlist = wishlist.filter(item => item.id !== id);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        alert("💔 Property removed from Wishlist!");

        renderWishlist();

    };

});