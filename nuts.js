document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "CASHEWS",
            details: "CASHEWS SPECIFICATIONS",
            image: "cashews.jpeg", 

            productSpecifications: {
                Commodity: "Cashew Nut",
                Origin: "Kerala or Tamil Nadu, India",
                Quality : "Specifications (As prescribed by The Peanut Export Promotion Council of India Ltd.)"               
            
            } ,

            para1: "Cashews are a highly nutritious and concentrated form of food, providing a substantial amount of energy. The cashew nut kernel has a pleasant taste and flavor and can be eaten raw, roasted, or sometimes salted or sweetened. It also contributes as an important source of invisible fat in the diet, being widely used in a variety of ways.",
            para2: "The kernel is considered to be of high nutritive quality, and growing conditions or the variety of cashew may have an influence on kernel composition. The overall composition of the kernel is protein 21%, fat 46%, and carbohydrates 25%. The graded varieties can be White Wholes, Scorched White Wholes, Butts, Splits, Pieces, and other physical variants. The graded variety W-320 is widely popular and consumed the most across the world for its affordable prices and high nutritional facts.",
            para3: "Grade Designation	Trade Name	Colour Characteristics	Count/454 gms	Max. Moisture (%)	Broken Max (%)	NLSG NLG max (%)W-180	White Wholes	White/pale ivory/light ash. Characteristic shape	170-180	5	5	5 (NLSG & SW together",
            para4: "Grade Designation	Trade Name	Colour Characteristics	Count/454 gms	Max. Moisture (%)	Broken Max (%)	NLSG NLG max (%)W-180	White Wholes	White/pale ivory/light ash. Characteristic shape	170-180	5	5	5 (NLSG & SW together",
            shipment: {
                Inspection: "SGS (or) any other agency as per your requirement for Weight and Quality.",
                Packing: "Standard in 25 Kg (Net) Bags vacuumed & gasified with Carbon dioxide and finally packed in Carton boxes with Net weight of 50 Kg (2 Bags in one carton).",
                Quantity: "20 feet Container with load ability of 18 Tons (or) 360 Cartons.",
                "Port of Loading": "Mundra or Kakinada, India.",
                "Port of Discharge": "As per customer requirements.",
                Delivery: "Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.",
                "Applicable Shipment Terms": "FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice."
            },


            
            
        },
        {
            id: 2,
            name: "PEANUTS",
            image: "peanuts.jpeg", 
            details: "PEANUTS SPECIFICATIONS",
            para1: "Peanuts are a highly nutritious and concentrated form of food, providing a substantial amount of energy. The peanut kernel has a pleasant taste and flavor and can be eaten raw, roasted, or sometimes salted or sweetened. It also contributes as an important source of invisible fat in the diet, being widely used in a variety of ways.",
            para2: "The kernel is considered to be of high nutritive quality, and growing conditions or the variety of peanut may have an influence on kernel composition. The overall composition of the kernel is protein 25%, fat 50%, and carbohydrates 20%. The graded varieties can be Whole Kernels, Splits, and other physical variants. The graded variety Bold is widely popular and consumed the most across the world for its affordable prices and high nutritional facts.",
            para3: "Grade Designation	Trade Name	Colour Characteristics	Count/454 gms	Max. Moisture (%)	Broken Max (%)	NLSG NLG max (%",
            para4: "Remarks: Kernels are completely free from infestation, insect damage, mold rancidity, adhering testa, and objectionable extraneous matter. Scraped and partially shriveled kernels are also permitted provided such scraping/shriveling does not affect the characteristic shape of the kernel.",
            shipment: {
                Inspection: "SGS (or) any other agency as per your requirement for Weight and Quality.",
                Packing: "Standard in 25 Kg (Net) Bags vacuumed & gasified with Carbon dioxide and finally packed in Carton boxes with Net weight of 50 Kg (2 Bags in one carton).",
                Quantity: "20 feet Container with load ability of 18 Tons (or) 360 Cartons.",
                "Port of Loading": "Mundra or Kakinada, India.",
                "Port of Discharge": "As per customer requirements.", 
                Delivery: "Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.",
                "Applicable Shipment Terms": "FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice."
            },
            
            
            productSpecifications: {
                Commodity: "PEANUTS",
                Origin: "Gujarat or Andhra Pradesh, India",
                QualitySpecifications: "(As prescribed by The Cashew Export Promotion Council of India Ltd.)"
                
            
            } ,
            
            
          
            
                   
            
            
        },
        {
            id: 3,
            name: "PISTACHIOS",
            details: "PISTACHIOS SPECIFICATIONS",
            para1: "Pistachios are a highly nutritious and concentrated form of food, providing a substantial amount of energy. The pistachio kernel has a pleasant taste and flavor and can be eaten raw, roasted, or sometimes salted or sweetened. It also contributes as an important source of invisible fat in the diet, being widely used in a variety of ways.",
            para2: "The kernel is considered to be of high nutritive quality, and growing conditions or the variety of pistachio may have an influence on kernel composition. The overall composition of the kernel is protein 20%, fat 45%, and carbohydrates 28%. The graded varieties can be Whole Kernels, Splits, and other physical variants. The graded variety Extra No. 1 is widely popular and consumed the most across the world for its affordable prices and high nutritional facts.",
            image: "pistachois.jpeg", 
            para3: "Grade Designation	Trade Name	Colour Characteristics	Count/454 gms	Max. Moisture (%)	Broken Max (%)	NLSG NLG max (%)",
            para4: "Remarks: Kernels are completely free from infestation, insect damage, mold rancidity, adhering testa, and objectionable extraneous matter. Scraped and partially shriveled kernels are also permitted provided such scraping/shriveling does not affect the characteristic shape of the kernel.",
            shipment: {
                Inspection: "SGS (or) any other agency as per your requirement for Weight and Quality.",
                Packing: "Standard in 25 Kg (Net) Bags vacuumed & gasified with Carbon dioxide and finally packed in Carton boxes with Net weight of 50 Kg (2 Bags in one carton).",
                Quantity: "20 feet Container with load ability of 18 Tons (or) 360 Cartons.",
                "Port of Loading": "Mundra or Kakinada, India.",
                "Port of Discharge": "As per customer requirements.",
                Delivery: "Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.",
                "Applicable Shipment Terms":"FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice."               
            
            } ,

            proSpecifications: {
                Commodity: "PISTACHIOS",
                Origin: "California, USA or Iran",
                QualitySpecifications: "(As prescribed by The Cashew Export Promotion Council of India Ltd.)"
            
            },
            productSpecifications: {
                Commodity: "PISTACHIOS",
                Origin: "California, USA or Iran",
                QualitySpecifications: "(As prescribed by The Cashew Export Promotion Council of India Ltd.)"
                
            
            } ,
            proSpecifications: {
                color: "White (Polished) / Brown (Unpolished)",
                moistureContent: "12-13% max",
                averageGrainLength: "6.61 mm min",
                lengthToBreadthRatio: "3.0 min",
                brokenGrains: "Under 2%",     
                                  
               
            },
                   
            
            
        },
        {
            id: 4,
            name: "ANJEER",
            details: "ANJEER SPECIFICATIONS",
            image: "anjeer.jpeg", 
            para1: "Anjeer (Fig) Seeds are a highly nutritious and concentrated form of food, providing a substantial amount of energy. The seeds have a pleasant taste and flavor and can be eaten raw, roasted, or sometimes salted or sweetened. They also contribute as an important source of invisible fat in the diet, being widely used in a variety of ways.",
            para2: "The kernel is considered to be of high nutritive quality, and growing conditions or the variety of peanut may have an influence on kernel composition. The overall composition of the kernel is protein 25%, fat 50%, and carbohydrates 20%. The graded varieties can be Whole Kernels, Splits, and other physical variants. The graded variety Bold is widely popular and consumed the most across the world for its affordable prices and high nutritional facts.",
            para3: "Grade Designation	Trade Name	Colour Characteristics	Count/454 gms	Max. Moisture (%)	Broken Max (%)	NLSG NLG max (%)",
            para4: "Remarks: Seeds are completely free from infestation, insect damage, mold rancidity, adhering testa, and objectionable extraneous matter. Scraped and partially shriveled seeds are also permitted provided such scraping/shriveling does not affect the characteristic shape of the seed.",
            shipment: {
                Inspection:"SGS (or) any other agency as per your requirement for Weight and Quality.",
                Packing:"Standard in 25 Kg (Net) Bags vacuumed & gasified with Carbon dioxide and finally packed in Carton boxes with Net weight of 50 Kg (2 Bags in one carton).",
                Quantity:"20 feet Container with load ability of 18 Tons (or) 360 Cartons.",
                "Port of Loading":" Mundra or Kakinada, India.",
                "Port of Discharge":" As per customer requirements.",
                Delivery:"Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.",
                "Applicable Shipment Terms":"FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice."              
            
            } ,
            
            productSpecifications: {
                Commodity: "Anjeer (Fig) Seeds",
                Origin: "Maharashtra or Gujarat, India",
                QualitySpecifications: "(As prescribed by The Cashew Export Promotion Council of India Ltd.)"
                
            
            } ,
           
                    
                   
            
            
        },
        {
            id: 5,
            name: "RAISIN",
            details: "RAISIN SPECIFICATIONS",
            image: "raisins.jpeg", 
            para1: "Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within the given time period from the date of receipt of Confirmed Purchase Order & Receipt Shiva Kumar in many parts of the world. They are rich in protein, fiber, and essential nutrients, making them a valuable part of a balanced diet. Lentils are used in a variety of dishes, including soups, stews, salads, and curries. They are also ground into flour and used in baking and cooking. Lentils are known for their quick cooking time and versatility in culinary applications.",
            productSpecifications: {
                color: "White (Polished) / Brown (Unpolished)",
                moistureContent: "12-13% max",
                averageGrainLength: "6.61 mm min",
                
            
            } ,
            proSpecifications: {
                color: "White (Polished) / Brown (Unpolished)",
                moistureContent: "12-13% max",
                averageGrainLength: "6.61 mm min",
                lengthToBreadthRatio: "3.0 min",
                brokenGrains: "Under 2%",     
                                  
               
            } ,
            proSpecifications2: {
                color: "White (Polished) / Brown (Unpolished)",
                moistureContent: "12-13% max",
                averageGrainLength: "6.61 mm min",
                lengthToBreadthRatio: "3.0 min",
                brokenGrains: "Under 2%",     
                                  
               
            } ,          
                   
           
            
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
         document.querySelector('.para1').textContent = product.para1;
         document.querySelector('.para2').textContent = product.para2;
         document.querySelector('.para3').textContent = product.para3;
         document.querySelector('.para4').textContent = product.para4;
       
        document.querySelector('.product-details').textContent = product.details;
        
        


        document.getElementById("product-image").src = product.image;
        

       
        const productSpecsList = document.querySelector('.product-productSpecifications');
        productSpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.productSpecifications).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.productSpecifications[spec]}`;
           productSpecsList.appendChild(listItem);
        });
        
        const shipmentSpecsList = document.querySelector('.product-shipment');
        shipmentSpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.shipment).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.shipment[spec]}`;
            shipmentSpecsList.appendChild(listItem);
        });


        


    


        


        
        










       
    }
});
