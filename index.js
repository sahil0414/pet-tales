
    // Function to redirect to the corresponding shopping pages based on button clicked
    function redirectToShop(category) {
        // Mapping categories to their respective shopping page URLs
        const shopUrls = {
            'Pet Food & Nutrition': 'shop/pet-food.html',
            'Collars, Leashes & Apparel': 'shop/collars-leashes.html',
            'Health & Wellness': 'shop/health-wellness.html',
            'Grooming & Care': 'shop/grooming.html'
        };
        
        // Redirecting to the specific shopping page
        if (shopUrls[category]) {
            window.location.href = shopUrls[category];
        } else {
            console.error('Category not found!');
        }
    }

    // Adding event listeners to "Shop Now" buttons
    document.addEventListener('DOMContentLoaded', () => {
        // Select all buttons with class 'item-box-btn'
        const buttons = document.querySelectorAll('.item-box-btn');
        
        buttons.forEach(button => {
            // Get the category from the item's title
            const category = button.closest('.item-box').querySelector('.item-box-head').textContent;

            // Add click event listener to each button
            button.addEventListener('click', () => redirectToShop(category));
        });
    });

