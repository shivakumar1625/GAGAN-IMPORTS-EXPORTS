document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "Basmati Rice (Steam/Raw)",
            details: "Basmati Rice Specifications",
            image: "nuts.jpeg", 
            origin: "Punjab, Haryana, Himachal Pradesh, Uttarakhand, Western Uttar Pradesh, Jammu & Kashmir, India",
            qualitySpecifications: {
                color: "White (Polished) / Brown (Unpolished)",
                moistureContent: "12-13% max",
                averageGrainLength: "6.61 mm min",
                lengthToBreadthRatio: "3.0 min",
                brokenGrains: "Under 2%",
                damagedGrains: "1% max",
                foreignMatter: "Nil",
                admixture: "5% max",
                immatureGrains: "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Distinctive, aromatic fragrance",
                "Texture: Long, slender grains that elongate upon cooking",
                "Grain Type: Long-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits: Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for biryani, pulao, and other Indian and Middle Eastern dishes. Versatile for various culinary preparations."
        },
        {
            id: 2,
            name: "Sona Masoori Rice",
            details: "Sona Masoori Rice Specifications",
            image: "nuts.jpeg", 
            origin: "Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, India",
            qualitySpecifications: {
                color: "White (Polished) / Brown (Unpolished)",
                moistureContent: "13-14% max",
                averageGrainLength: "5-5.2 mm min",
                lengthToBreadthRatio: "3 min",
                brokenGrains: "Under 3%",
                damagedGrains: "2% max",
                foreignMatter: "Nil",
                admixture: "5% max",
                immatureGrains: "1-2% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Subtle, jasmine-like fragrance",
                "Texture: Fluffy and lightweight when cooked",
                "Grain Type: Medium-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits: Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for biryani, pulao, and other South Indian dishes Versatile for various culinary preparations."
        },
        {
            id: 3,
            name: "Pusa Basmati Rice",
            details: "Pusa  Basmati Rice Specifications",
            image: "nuts.jpeg", 
            origin: " Punjab, Haryana, Himachal Pradesh, Uttarakhand, Western Uttar Pradesh, Jammu & Kashmir, India",
            qualitySpecifications: {
                color: "White (Polished) / Brown (Unpolished)",
                moistureContent: "12-13% max",
                averageGrainLength: "8.35-9.00 mm",
                lengthToBreadthRatio: "3.0 min",
                brokenGrains: "Under 2%",
                damagedGrains: "1% max",
                foreignMatter: "Nil",
                admixture: "5% max",
                immatureGrains: "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer’s choice"
            ],
            keyFeatures: [
                "Aroma: Distinctive, aromatic fragrance",
                "Texture: Long, slender grains that elongate upon cooking",
                "Grain Type: Long-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits:Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for biryani, pulao, and other Indian and Middle Eastern dishes Versatile for various culinary preparations."
        },
        {
            id: 4,
            name: "Black Rice",
            details: "Black Rice Specifications)",
            Origin: "India (Andhra Pradesh, Telangana, Manipur, Assam, Tamil Nadu)",
            qualitySpecifications: {
                color: "Dark purple to black",
                moistureContent: " 12-14% max",
                averageGrainLength: "6-7 mm",
                lengthToBreadthRatio: "3.5 min",
                brokenGrains: "Under 5%",
                damagedGrains: "1% max",
                foreignMatter: "Nil",
                admixture: "5% max",
                immatureGrains: "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Mild, nutty fragrance",
                "Texture: Slightly chewy and firm when cooked",
                "Grain Type: Whole grain",
                "Nutritional Benefits: Rich in antioxidants (anthocyanins), dietary fiber, protein, vitamins (B1, B3, B6), and minerals (iron, zinc, magnesium)",
                "Health Benefits: Supports heart health, aids digestion, helps in weight management, maintains blood sugar levels, and has anti-inflammatory properties."
            ],
            culinaryUses: "Ideal for health-conscious recipes, salads, and side dishes Versatile for various culinary preparations including desserts, sushi, and rice bowls."
        },
        {
            id: 5,
            name: "Brown Rice ",
            details: "Brown Rice Specifications",
            image: "nuts.jpeg", 
            origin: "India",
            qualitySpecifications: {
                color: "Brown (due to the presence of bran and germ layers)",
                moistureContent: "12-14% max",
                averageGrainLength: "6-7 mm ",
                lengthToBreadthRatio: "3.0 min",
                brokenGrains: "Under 5%",
                damagedGrains: "1% max",
                foreignMatter: "Nil",
                admixture: "5% max",
                immatureGrains: "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Mild, nutty fragrance",
                "Texture: Chewy and slightly firm when cooked",
                "Grain Type: Whole grain",
                "Nutritional Benefits:  Rich in dietary fiber, protein, vitamins (B1, B3, B6), and minerals (magnesium, phosphorus, selenium)",
                "Health Benefits: Supports heart health, aids digestion, helps in weight management, and maintains blood sugar level"
            ],
            culinaryUses: "Ideal for health-conscious recipes, salads, and side dishes Versatile for various culinary preparations including stir-fries, pilafs, and casseroles ."
        },
        {
            id: 6,
            name: "Lachkari Rice ",
            details: "Lachkari Rice Specifications",
            image: "nuts.jpeg", 
            origin: "Gujarat, India",
            qualitySpecifications: {
                color: "White (Polished) / Brown (Unpolished)",
                moistureContent: "12-14% max",
                averageGrainLength: "5-6 mm min",
                // lengthToBreadthRatio: "3.0 min",
                brokenGrains: "Under 5%",
                damagedGrains: "1% max",
                foreignMatter: "Nil",
                admixture: "5% max",
                immatureGrains: "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Mild, pleasant fragrance",
                "Texture: Soft and fluffy when cooked",
                "Grain Type: Medium-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits: Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for health-conscious recipes, salads, and side dishes Versatile for various culinary preparations including stir-fries, pilafs, and casseroles."
        },
        {
            id: 7,
            name: "Sella Rice ",
            details: "Sella Rice Specifications ",
           
            image: "nuts.jpeg", 
            origin: "India",
            qualitySpecifications: {
                color: "Golden (due to parboiling) / White",
                moistureContent: "12-13% max",
                averageGrainLength: "8.3 mm min",
                lengthToBreadthRatio: "3.0 min",
                brokenGrains: "Under 2%",
                damagedGrains: "1% max",
                foreignMatter: "Nil",
                admixture: "5% max",
                immatureGrains: "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Mild, neutral fragrance",
                "Texture: Firm and separate grains when cooked",
                "Grain Type: Long-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits: Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for biryani, pulao, and other Indian and Middle Eastern dishes Versatile for various culinary preparations including salads, soups, and stews."
        }

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
    }
});
