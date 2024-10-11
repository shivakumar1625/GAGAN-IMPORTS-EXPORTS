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
            details: "Basmati Rice (Steam/Raw)",
            image: "nuts.jpeg", 
            origin: "Andhra Pradesh, Karnataka, Telangana, India",
            qualitySpecifications: {
                color: "White (Polished)",
                moistureContent: "13-14% max",
                averageGrainLength: "5.1 mm min",
                lengthToBreadthRatio: "2.5 min",
                brokenGrains: "Under 5%",
                damagedGrains: "2% max",
                foreignMatter: "Nil",
                admixture: "3% max",
                immatureGrains: "2% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag"
            ],
            keyFeatures: [
                "Aroma: Mild",
                "Texture: Light and fluffy upon cooking",
                "Grain Type: Medium-grain",
                "Nutritional Benefits: Low in starch, rich in protein and fiber",
                "Health Benefits: Easily digestible, good for weight control"
            ],
            culinaryUses: "Ideal for South Indian dishes like idli, dosa, and daily meals."
        },
        {
            id: 3,
            name: "Pusa Basmati Rice",
            details: "Basmati Rice (Steam/Raw)",
            image: "nuts.jpeg", 
            origin: "Punjab, Haryana, Western Uttar Pradesh, India",
            qualitySpecifications: {
                color: "White (Polished)",
                moistureContent: "12-13% max",
                averageGrainLength: "7.2 mm min",
                lengthToBreadthRatio: "3.5 min",
                brokenGrains: "Under 1.5%",
                damagedGrains: "1% max",
                foreignMatter: "Nil",
                admixture: "2% max",
                immatureGrains: "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag"
            ],
            keyFeatures: [
                "Aroma: Strong and aromatic",
                "Texture: Long, thin grains that double in size upon cooking",
                "Grain Type: Long-grain",
                "Nutritional Benefits: High in carbohydrates, low in fat",
                "Health Benefits: Gluten-free, low glycemic index"
            ],
            culinaryUses: "Best suited for biryani, fried rice, and special Indian dishes."
        },
        {
            id: 4,
            name: "Black Rice",
            details: "Basmati Rice (Steam/Raw)",
            Origin: "India (Andhra Pradesh, Telangana, Manipur, Assam, Tamil Nadu)",
            qualitySpecifications: {
                color: "White (Polished)",
                moistureContent: "12-13% max",
                averageGrainLength: "7.2 mm min",
                lengthToBreadthRatio: "3.5 min",
                brokenGrains: "Under 1.5%",
                damagedGrains: "1% max",
                foreignMatter: "Nil",
                admixture: "2% max",
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
            name: "Basmati Rice (Steam/Raw)",
            details: "Basmati Rice (Steam/Raw)",
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
            id: 6,
            name: "Basmati Rice (Steam/Raw)",
            details: "Basmati Rice (Steam/Raw)",
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
            id: 7,
            name: "Basmati Rice (Steam/Raw)",
            details: "Basmati Rice (Steam/Raw)",
           
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
