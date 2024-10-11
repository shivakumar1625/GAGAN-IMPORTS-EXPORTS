document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "Turmeric (Curcuma longa)",
            details: "Turmeric Specifications",
            image: "turmeric.jpeg", 
            origin: "India (Andhra Pradesh, Telangana, Tamil Nadu, Maharashtra, Odisha)",
            qualitySpecifications: {
                color: "Deep orange-yellow",
                moistureContent: "10-12% max",
                CurcuminContent: "2-5% (depending on the variety)",
                ForeignMatter: "0.5% max",
                TotalAsh: "7% max",
                AcidInsolubleAsh: "1.5% max",
                VolatileOil: "3.5% min",
                ExtraneousMatter: "0.5% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Warm, earthy, and slightly bitter",
                "Texture: Fine powder or whole dried rhizomes",
                "Grain Type: Long-grain",
                "Nutritional Benefits: Rich in antioxidants, particularly curcumin, which has anti-inflammatory properties",
                "Health Benefits: Supports joint health, aids digestion, boosts immunity, and has potential anti-cancer properties"
            ],
            culinaryUses: "Widely used as a spice in curries, soups, and stews Used as a natural food coloring agent Essential ingredient in traditional Indian and Southeast Asian cuisines.",
            IndurstrialUses: "Used in the production of cosmetics and skincare products Utilized in the pharmaceutical industry for its medicinal properties Employed in the dyeing industry for its vibrant color"
        },
        {
            id: 2,
            name: "Black Pepper (Piper nigrum)",
            details: "Black Pepper Specifications ",
            image: "pepper.jpeg", 
            origin: "India (Kerala, Karnataka, Tamil Nadu)",
            qualitySpecifications: {
                color: "Dark brown to black",
                moistureContent: "12% max",
                PiperineContent: "4-9%",
                ForeignMatter: "0.5% max",
                TotalAsh: "6.5% max",
                AcidInsolubleAsh: "1.0% max",
                VolatileOil: "2% min",
                ExtraneousMatter: "0.5% max",
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer’s choice"
            ],
            keyFeatures: [
                "Aroma: Strong, pungent fragrance",
                "Texture: Whole dried peppercorns or ground powder",
                "Grain Type: Medium-grain",
                "Nutritional Benefits: Rich in antioxidants, vitamins (K, C), and minerals (iron, manganese)",
                "Health Benefits: Supports digestion, boosts metabolism, has anti-inflammatory properties"
            ],
            // culinaryUses: "Ideal for South Indian dishes like idli, dosa, and daily meals."
        },
        
    ];

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Find the product by its ID
    const product = products.find(p => p.id === productId);

    if (product) {
        // Populate product data into the template
        document.querySelector('.product-name').textContent = product.name;
        document.querySelector('.product-name-2').textContent = product.name;
        document.querySelector('.product-details').textContent = product.details;
        


        document.getElementById("product-image").src = product.image;
        document.querySelector('.origin').textContent = product.origin;

        const qualitySpecsList = document.querySelector('.quality-specifications');
        qualitySpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.qualitySpecifications).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.qualitySpecifications[spec]}`;
            qualitySpecsList.appendChild(listItem);
        });

        const packagingList = document.querySelector('.packaging-options');
        packagingList.innerHTML = '';  // Clear any previous content
        product.packagingOptions.forEach(option => {
            const listItem = document.createElement('li');
            listItem.textContent = option;
            packagingList.appendChild(listItem);
        });

        const keyFeaturesList = document.querySelector('.key-features');
        keyFeaturesList.innerHTML = '';  // Clear any previous content
        product.keyFeatures.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.textContent = feature;
            keyFeaturesList.appendChild(listItem);
        });

        document.querySelector('.culinary-uses').textContent = product.culinaryUses;
        document.querySelector('.Indurstrial-Uses').textContent = product.IndurstrialUses;
    }
});
