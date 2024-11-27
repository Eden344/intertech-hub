document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdown = this.nextElementSibling; // Get the next sibling, which is the dropdown
        dropdown.classList.toggle('visible'); // Toggle the 'visible' class
    });
});

// Close dropdown if clicked outside
window.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdowns.forEach(dropdown => {
        if (!event.target.matches('.dropdown-toggle') && dropdown.classList.contains('visible')) {
            dropdown.classList.remove('visible'); // Remove 'visible' class if clicked outside
        }
    });
});

const button = document.getElementById('addToCartButton');
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('overlay');

        button.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });

        function closePopup() {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

const quantityDisplay = document.getElementById('quantityDisplay');
    let quantity = 1;

        document.getElementById('decreaseButton').addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });

        document.getElementById('increaseButton').addEventListener('click', () => {
            quantity++;
            quantityDisplay.textContent = quantity;
        });