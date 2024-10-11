document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "LENTILS",
            image: "lentils.jpeg", 
            details: "LENTILS SPECIFICATIONS",
            para: "Lentils are the seeds of the plant Lens culinaris, a bushy annual plant known for its lens-shaped seeds. The plant typically grows to a height of 20-45 cm with slender, erect stems. The leaves are compound, with 4-7 pairs of leaflets and tendrils at the tips. The flowers are small, white, pale blue, or pale purple, and are borne in clusters of 1-4. Each flower produces a pod containing 1-3 seeds.Lentils are native to the Near East and Central Asia. They are widely cultivated in countries such as India, Canada, Turkey, Australia, and the United States. In India, lentils are grown in states like Madhya Pradesh, Uttar Pradesh, Bihar, West Bengal, and Rajasthan. Lentils thrive in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. They are a cool-season crop and are typically sown in the winter months.",
            
            
            productSpecifications: {
                Commodity: "Lentils",
                Variety: "Red, Green, Brown, Black, Yellow"
                
            
            } ,
            proSpecifications: {
                Variety:"Red Lentils",
                Color: "Bright Red",
                Size: "3-4 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max" ,    
                                  
               
            } ,
            proSpecifications2: {
                Variety :"Green Lentils" ,
                Color: "Green",
                Size: "4-6 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max" ,

   
                                  
               
            } ,
            proSpecifications3: {
                Variety:"Brown Lentils",
                Color: "Brown",
                Size: "4-6 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max" ,    
                                  
               
            } ,
            proSpecifications4: {
               Variety: "Black Lentils",
                Color: "Black",
                Size: "3-4 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",
                                  
               
            } ,
            proSpecifications5: {
                Variety:"Yellow Lentils",
                Color: "Yellow",
                Size: "3-4 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",
                                  
               
            } ,           
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality.Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements. Mode of Payment: TT, LC   Delivery: Delivered to the loading port of choice within the given time period from the date of receipt of Confirmed Purchase Order & Receipt of Advance.  Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.  Uses & Other Information of Note Lentils are a staple food in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Lentils are used in a variety of dishes, including soups, stews, salads, and curries. They are also ground into flour and used in baking and cooking. Lentils are known for their quick cooking time and versatility in culinary applications.Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within the given time period from the date of receipt of Confirmed Purchase Order & Receipt of Advance.Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.Uses & Other Information of Note Lentils are a staple food in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Lentils are used in a variety of dishes, including soups, stews, salads, and curries. They are also ground into flour and used in baking and cooking. Lentils are known for their quick cooking time and versatility in culinary applications.Lentils are also used in crop rotation to improve soil fertility, as they fix nitrogen in the soil. They are a sustainable crop that requires less water and fertilizer compared to other crops, making them an environmentally friendly choice",
                    
        },
        {
            id: 2,
            name: "CHICKPEAS",
            details: "CHICKPEAS SPECIFICATIONS",
            image: "chickpeas.jpeg", 
            para: "Chickpeas are the seeds of the plant Cicer arietinum, an annual legume of the family Fabaceae. The plant typically grows to a height of 20-50 cm with a branching, bushy habit. The leaves are pinnate with small leaflets, and the flowers are white, pink, or purple, borne singly or in pairs. Each flower produces a pod containing 1-3 seeds.Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within the given time period from the date of receipt of Confirmed Purchase Order & Receipt Shiva Kumar in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Lentils are used in a variety of dishes, including soups, stews, salads, and curries. They are also ground into flour and used in baking and cooking. Lentils are known for their quick cooking time and versatility in culinary applications.Chickpeas are believed to have originated in the Middle East and are now widely cultivated in countries such as India, Pakistan, Turkey, Australia, and Canada. In India, chickpeas are grown in states like Madhya Pradesh, Maharashtra, Rajasthan, Uttar Pradesh, and Andhra Pradesh. Chickpeas thrive in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. They are a cool-season crop and are typically sown in the winter months.",
            productSpecifications: {
                Commodity: "Chickpeas",
                Variety: "Desi, Kabul",
                
            
            } ,
            proSpecifications: {
            Variety:"Desi Chickpeas",
            Color: "Brown",
            Size: "6-7 mm",
             Moisture: "12% max",
            ForeignMatter: "0.5% max",
            Broken: "2% max",
            
            
            },
            
          
            proSpecifications2: {
                Variety:"Kabuli Chickpeas",
                Color: "Creamy White",
                Size: "8-12 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",
                                  
               
            },
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements. Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within the time period from the date of receipt of Confirmed Purchase Order & Receipt of Advance. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.  Uses & Other Information of Note Chickpeas are a staple food in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Chickpeas are used in a variety of dishes, including hummus, falafel, soups, stews, and salads. They are also ground into flour and used in baking and cooking. Chickpeas are known for their versatility and nutty flavor.Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within the given time period from the date of receipt of Confirmed Purchase Order & Receipt of Advance.Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.Uses & Other Information of Note Lentils are a staple food in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Lentils are used in a variety of dishes, including soups, stews, salads, and curries. They are also ground into flour and used in baking and cooking. Lentils are known for their quick cooking time and versatility in culinary applications.  Chickpeas are also used in crop rotation to improve soil fertility, as they fix nitrogen in the soil. They are a sustainable crop that requires less water and fertilizer compared to other crops, making them an environmentally friendly choice.",

        },
        {
            id: 3,
            name: "SPLIT PIGEON PEAS",
            details: "SPLIT PIGEON PEAS SPECIFICATIONS",
            para: "Split Pigeon Peas are the split seeds of the plant Cajanus cajan, a perennial legume that grows as a shrub, typically reaching heights of 1-2 meters. The plant has a woody stem and branches with pinnate leaves that are green above and pale green below. The leaves are composed of 3-5 leaflets, each about 5-10 cm long. The flowers are yellow or yellow with streaks of red, borne in clusters of 2-4. Each flower produces a pod containing 2-9 seeds.Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within the given time period from the date of receipt of Confirmed Purchase Order & Receipt Shiva Kumar in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Lentils are used in a variety of dishes, including soups, stews, salads, and curries. They are also ground into flour and used in baking and cooking. Lentils are known for their quick cooking time and versatility in culinary applications.Split pigeon peas, also known as toor dal or arhar dal, are native to India and are widely cultivated in tropical and subtropical regions. Apart from India, they are grown in countries like Myanmar, Kenya, Malawi, and Tanzania. In India, they are primarily cultivated in the states of Maharashtra, Karnataka, Madhya Pradesh, Andhra Pradesh, and Gujarat. Split pigeon peas thrive in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. They are a drought-tolerant crop and are typically sown in the monsoon season.",
            image: "Splitpigeon.jpeg", 
            proSpecifications: {
                Commodity: "Split Pigeon Peas"

            
            },
            productSpecifications: {
                Color: "Bright Yellow",
                Size: "3-4 mm",
                Moisture: "12% max",
                ForeignMatter:" 0.5% max",
                Broken: "2% max",
                
            
            } ,
            //proSpecifications: {
              //  color: "White (Polished) / Brown (Unpolished)",
               // moistureContent: "12-13% max",
               // averageGrainLength: "6.61 mm min",
               // lengthToBreadthRatio: "3.0 min",
               // brokenGrains: "Under 2%",     
                                  
               
         //   },
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality.Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements. Mode of Payment:TT, LC Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice. Uses & Other Information of Note Split pigeon peas are a staple food in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Split pigeon peas are used in a variety of dishes, including dals, soups, stews, and curries. They are also ground into flour and used in baking and cooking. Split pigeon peas are known for their quick cooking time and versatility in culinary applications.Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within the given time period from the date of receipt of Confirmed Purchase Order & Receipt of Advance.Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.Uses & Other Information of Note Lentils are a staple food in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Lentils are used in a variety of dishes, including soups, stews, salads, and curries. They are also ground into flour and used in baking and cooking. Lentils are known for their quick cooking time and versatility in culinary applications.Split pigeon peas are also used in crop rotation to improve soil fertility, as they fix nitrogen in the soil. They are a sustainable crop that requires less water and fertilizer compared to other crops, making them an environmentally friendly choice.",
            
        },
        {
            id: 4,
            name: "BLACK GRAM ",
            details: "BLACK GRAM SPECIFICATIONS",
            image: "blackgram.jpeg", 
            para: "Black Gram is the boiled, dried, cleaned, and polished seeds of Vigna mungo. The plant is an annual, herbaceous legume, 30-100 cm high, with a short stem and branching habit. The leaves are trifoliate with ovate leaflets, 4-10 cm long and 2-7 cm wide. The leaf sheaths form the pseudo stem. The lamina is green above and pale green below. Inflorescence is a central spike of 10-15 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in pods, each containing 4-10 seeds.",
            
            productSpecifications: {
                Commodity: "Black Gram",
                
            
            } ,
            proSpecifications: {
                Variety:"Whole Black Gram",
                Color: "Black",
                Size: "4-6 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max"   , 
                                  
               
            } ,
            proSpecifications2: {
                Variety:"Split Black Gram (Urad Dal)",
                Color: "White (interior)",
                Size: "3-4 mm",
                Moisture: "12% max",
                ForeignMatter:"0.5% max",
                Broken: "2% max ",  
                                  
               
            },           
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality.   Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.   Mode of Payment: TT, LC   Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.   Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.   Uses & Other Information of Note Black gram is a staple food in many parts of the world. It is rich in protein, fiber, and essential nutrients, making it a valuable part of a balanced diet. Black gram is used in a variety of dishes, including dals, soups, stews, and curries. It is also ground into flour and used in baking and cooking. Black gram is known for its creamy texture and earthy flavor.Black gram is also used in crop rotation to improve soil fertility, as it fixes nitrogen in the soil. It is a sustainable crop that requires less water and fertilizer compared to other crops, making it an environmentally friendly choice.",
            
        },
        {
            id: 5,
            name: "KIDNEY BEANs",
            details: "KIDNEY BEANS SPECIFICATIONS",
            image: "kidneybeans.jpeg", 
            para: "Kidney Beans are the dried, cleaned, and polished seeds of Phaseolus vulgaris. The plant is an annual legume, 30-60 cm high, with a bushy growth habit. The leaves are trifoliate, with each leaflet being ovate and about 6-15 cm long. The leaf sheaths form the pseudo stem. The lamina is green above and pale green below. Inflorescence is a central spike of 10-15 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in pods, each containing 4-6 seeds.In India, it is cultivated in the states of Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh, and Uttar Pradesh. Kidney beans are a tropical crop cultivated from sea level to 1800 meters MSL. They grow in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",
            productSpecifications: {
                Commodity: "Kidney Beans",
                
            
            } ,
            proSpecifications: {
                Variety:"Red Kidney Beans",
                Color: "Dark Red",
                Size: "8-12 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",
 
                                  
               
            } ,
            proSpecifications2: {
                Variety:"White Kidney Beans (Cannellini)",
                Color: "Creamy White",
                Size: "8-12 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",
                                  
               
            } ,          
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements. Mode of Payment:TT, LC  Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.  Applicable Shipment Terms:FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.  Uses & Other Information of Note Kidney beans are a staple food in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Kidney beans are used in a variety of dishes, including chili, soups, stews, and salads. They are also ground into flour and used in baking and cooking. Kidney beans are known for their creamy texture and slightly nutty flavor.Kidney beans are also used in crop rotation to improve soil fertility, as they fix nitrogen in the soil. They are a sustainable crop that requires less water and fertilizer compared to other crops, making them an environmentally friendly choice.",
            
        },
        {
            id: 6,
            name: "GREEN PEAS",
            details: "GREEN PEAS SPECIFICATIONS",
            image: "greenpeas.jpeg", 
            para: "Green Peas are the boiled, dried, cleaned, and polished seeds of Pisum sativum. The plant is an annual herbaceous legume, 30-150 cm high, with a climbing or trailing habit. The leaves are pinnate with leaflets and tendrils that help the plant climb. The leaf sheaths form the pseudo stem. The lamina is green above and pale green below. Inflorescence is a central spike of 10-15 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in pods, each containing 4-10 seeds.n India, it is cultivated in the states of Uttar Pradesh, Madhya Pradesh, Punjab, Haryana, and Bihar. Green peas are a cool-season crop cultivated from sea level to 2000 meters MSL. They grow in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity",
            productSpecifications: {
            Commodity: "Green Peas",
                
            
            } ,
            proSpecifications: {
                Variety:"Whole Green Peas",
                Color: "Green",
                Size: "6-8 mm",
                Moisture: "12% max",
                ForeignMatter:"0.5% max",
                Broken: "2% max"  , 
                                  
               
            } ,
            proSpecifications2: {
                Variety:"Split Green Peas",
                Color: "Green (interior)",
                Size: "3-4 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",
                
            } ,          
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.   Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.   Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.  Uses & Other Information of Note Green peas are a staple food in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Green peas are used in a variety of dishes, including soups, stews, salads, and curries. They are also ground into flour and used in baking and cooking. Green peas are known for their sweet flavor and tender texture.  Green peas are also used in crop rotation to improve soil fertility, as they fix nitrogen in the soil. They are a sustainable crop that requires less water and fertilizer compared to other crops, making them an environmentally friendly choice.",
        },
        {
            id: 7,
            name: "MUNG BEANS",
            details: "MUNG BEANS SPECIFICATIONS",
            image: "MUNGBEANS.jpeg", 
            para: "Mung Beans are the boiled, dried, cleaned, and polished seeds of Vigna radiata. The plant is an annual vine, 15-125 cm high, with a sturdy taproot and branching stems. The leaves are compound, with three roughly triangular to ovate leaflets. The leaf sheaths form the pseudo stem. The lamina is green above and pale green below. Inflorescence is a central spike of 10-15 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in pods, each containing up to 20 small seeds. In India, it is cultivated in the states of Andhra Pradesh, Maharashtra, Odisha, Tamil Nadu, Karnataka, and Kerala. Mung beans are a tropical crop cultivated from sea level to 1800 meters MSL. They grow in light black, black clayey loams, and red soils in irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",
            productSpecifications: {
            Commodity: "Mung Beans",
                
            
            } ,
            proSpecifications: {
                Variety:"Whole Mung Beans",
                Color: "Green",
                Size: "3-4 mm",
                Moisture: "12% max",
                ForeignMatter:"0.5% max",
                Broken: "2% max"  , 
                                  
               
            } ,
            proSpecifications2: {
                Variety:"Split Mung Beans (Moong Dal)",
                Color: "Yellow (interior)",
                Size: "3-4 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",
                
            } ,          
               
        shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.  Mode of Payment: TT, LC  Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.  Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.   Uses & Other Information of Note Mung beans are a staple food in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Mung beans are used in a variety of dishes, including soups, stews, salads, and curries. They are also ground into flour and used in baking and cooking. Mung beans are known for their quick cooking time and versatility in culinary applications.Mung beans are also used in crop rotation to improve soil fertility, as they fix nitrogen in the soil. They are a sustainable crop that requires less water and fertilizer compared to other crops, making them an environmentally friendly choice.",
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
         document.querySelector('.para').textContent = product.para;
       
        document.querySelector('.product-details').textContent = product.details;
        
        document.querySelector('.shipment').textContent = product.shipment;


        document.getElementById("product-image").src = product.image;
        

       
        const productSpecsList = document.querySelector('.product-productSpecifications');
        productSpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.productSpecifications).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.productSpecifications[spec]}`;
           productSpecsList.appendChild(listItem);
        });
        const proSpecsList = document.querySelector('.proSpecifications');
        proSpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.proSpecifications).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications[spec]}`;
            proSpecsList.appendChild(listItem);
        });


        const proSpecsList2 = document.querySelector('.proSpecifications2');
        proSpecsList2.innerHTML = '';  // Clear any previous content
        Object.keys(product.proSpecifications2).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications2[spec]}`;
            proSpecsList2.appendChild(listItem);
        });


        const proSpecsList3 = document.querySelector('.proSpecifications3');
        proSpecsList3.innerHTML = '';  // Clear any previous content
        Object.keys(product.proSpecifications3).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications3[spec]}`;
            proSpecsList3.appendChild(listItem);
        });


        const proSpecsList4 = document.querySelector('.proSpecifications4');
        proSpecsList4.innerHTML = '';  // Clear any previous content
        Object.keys(product.proSpecifications4).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications4[spec]}`;
            proSpecsList4.appendChild(listItem);
        });


        const proSpecsList5 = document.querySelector('.proSpecifications5');
        proSpecsList5.innerHTML = '';  // Clear any previous content

        Object.keys(product.proSpecifications5).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.proSpecifications5[spec]}`;
            proSpecsList5.appendChild(listItem);
        });










       
    }
});