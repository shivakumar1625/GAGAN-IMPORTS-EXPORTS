document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "CLOVE",
            image: "clove.jpeg", 
            details: "CLOVES SPECIFICATIONS",
            para: "Cloves are the dried, cleaned, and polished flower buds of Syzygium aromaticum. The plant is a tropical evergreen tree, 8-12 meters high, with a short trunk and a dense canopy of leaves. The leaves are simple, opposite, and gland-dotted, with a length of 8-12 cm and a width of 4-6 cm. The lamina is green above and pale green below. Inflorescence is a terminal cluster of 10-15 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a cluster. Seeds are produced in capsules, and there will be one to numerous sunken capsules in an inflorescence.It is a native of the Maluku Islands (Moluccas) in Indonesia. Apart from Indonesia, it is cultivated in Madagascar, Tanzania, Sri Lanka, and India. In India, it is cultivated in the states of Tamil Nadu, Kerala, and Karnataka. Cloves are a tropical crop cultivated from sea level to 900 meters MSL. They grow in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",

            
            
            productSpecifications: {
                Commodity: "Cloves"
                // Variety: "Red, Green, Brown, Black, Yellow"
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Cloves",
                color: "Reddish Brown",
                Size:"10-15 mm",
                Moisture: "12% max",
                VolatileOil: "15% min",
                
               
            } ,
            proSpecifications2:{
                Variety:"Ground Cloves",
                Color: "Brown",
                ParticleSize: "50 ASTM",
                Moisture: "5% max",
                VolatileOil: "15% min",
            },
                       
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements. Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice. Uses & Other Information of Note Nutmeg and mace are used to flavor and to add aroma to foodstuffs. They are principal ingredients in spice blends such as garam masala and pumpkin spice. Nutmeg and mace are used in baked goods, desserts, sauces, and beverages. The essential oil eugenol, extracted from nutmeg, is used as a flavoring agent and in the preparation of dental products, perfumes, and cosmetics.",
            uses:"Cloves are also used in traditional medicine for their antiseptic and analgesic properties. They are used to treat toothaches, digestive issues, and respiratory problems. Clove oil is used as a local anesthetic in dentistry. The aqueous extracts have biopesticidal properties."
            
        },
        {
            id: 2,
            name: "NUTMEG AND MACE",
            details: "NUTMEG AND MACE SPECIFICATIONS",
            image: "clove.jpeg", 
            para: "Nutmeg and Mace are the dried, cleaned, and polished products of Myristica fragrans. The plant is a tropical evergreen tree, 10-20 meters high, with a dense canopy of leaves. The leaves are simple, alternate, and dark green, with a length of 5-15 cm and a width of 2-7 cm. The lamina is green above and pale green below. Inflorescence is a central spike of 10-15 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in capsules, and there will be one to numerous sunken capsules in an inflorescence.In India, it is cultivated in the states of Kerala, Tamil Nadu, and Karnataka. Nutmeg and mace are tropical crops cultivated from sea level to 900 meters MSL. They grow in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.In India, it is cultivated in the states of Kerala, Tamil Nadu, and Karnataka. Nutmeg and mace are tropical crops cultivated from sea level to 900 meters MSL. They grow in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",
            productSpecifications: {
                Commodity: "Nutmeg and Mace",
                // moistureContent: "12-13% max",
                // averageGrainLength: "6.61 mm min",
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Nutmeg",
                color: "Reddish Brown",
                Size:"20-30 mm",
                Moisture: "10% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",
            },
            
          
            proSpecifications2: {
                Variety :"Ground Nutmeg",
                color: "Brown",
                Size:"50 ASTM",
                Moisture: "5% max",
                VolatileOil: "8% min",    
                                  
               
            },
            proSpecifications3:{
                Variety :"Whole Mace",
                color: "Orange-Red",
                Size:"20-30 mm",
                Moisture: "10% max",
                ForeignMatter: "0.5% max", 

            },
            proSpecifications4:{
                Variety :"Ground Mace",
                color: "Orange-Yellow",
                Size:"50 ASTM",
                Moisture: "5% max",
                VolatileOil: "10% min",
            },
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality.Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements. Mode of Payment: TT, LC  Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice. Uses & Other Information of Note Nutmeg and mace are used to flavor and to add aroma to foodstuffs. They are principal ingredients in spice blends such as garam masala and pumpkin spice. Nutmeg and mace are used in baked goods, desserts, sauces, and beverages. The essential oil eugenol, extracted from nutmeg, is used as a flavoring agent and in the preparation of dental products, perfumes, and cosmetics.",
            uses:"Nutmeg and mace are also used in traditional medicine for their antiseptic and analgesic properties. They are used to treat digestive issues, respiratory problems, and as a sleep aid. Nutmeg oil is used as a local anesthetic in dentistry. The aqueous extracts have biopesticidal properties.",
            
        },
        {
            id: 3,
            name: "CARDAMOM",
            details: "CARDAMOM SPECIFICATIONS",
            para: "Cardamom is the dried, cleaned, and polished seeds of Elettaria cardamomum. The plant is a herbaceous perennial, 2-4 meters high, with a short stem and tufted leaves. There are 7 to 12 leaves, the leaf sheaths form the pseudo stem. The lamina is green above and pale green below and has a length of 30-60 cm and width 5-15 cm. Inflorescence is a central spike of 30-60 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in capsules, and there will be one to numerous sunken capsules in an inflorescence.In India, it is cultivated in the states of Kerala, Karnataka, and Tamil Nadu. Cardamom is a tropical crop cultivated from sea level to 1500 meters MSL. It grows in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",
            image: "cardamom.jpeg", 
            proSpecifications: {
                color: "White (Polished) / Brown (Unpolished)",
                moistureContent: "12-13% max",
                Commodity: "Lentils",
                Variety: "Red, Green, Brown, Black, Yellow",

            
            },
            productSpecifications: {
                Commodity: "CARDAMOM",
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Green Cardamom",
                color: "Green",
                Size: "6-8 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",     
                                   
            },
            proSpecifications2:{
                Variety :"Ground Cardamom",
                color: "Greenish-Brown",
                Size: "50 ASTM",
                Moisture: "5% max",
                VolatileOil: "4% min",
            },
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality.Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.  Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice. Uses & Other Information of Note Cardamom is used to flavor and to add aroma to foodstuffs. It is a principal ingredient in spice blends such as garam masala and chai masala. Cardamom is used in baked goods, desserts, curries, and beverages. The essential oil, extracted from cardamom, is used as a flavoring agent and in the preparation of dental products, perfumes, and cosmetics.",
            uses:"Cardamom is also used in traditional medicine for its digestive and carminative properties. It is used to treat digestive issues, respiratory problems, and as a breath freshener. Cardamom oil is used as a local anesthetic in dentistry. The aqueous extracts have biopesticidal properties"
            
        },
        {
            id: 4,
            name: "CINNAMON",
            details: "CINNAMON SPECIFICATIONS",
            image: "chinnamon .jpeg", 
            para: "Cinnamon is the dried, cleaned, and polished inner bark of Cinnamomum verum. The plant is a bushy evergreen tree, 10-15 meters high, with a short trunk and a dense canopy of leaves. The leaves are simple, opposite, and dark green, with a length of 7-18 cm and a width of 4-7 cm. The lamina is green above and pale green below. Inflorescence is a terminal cluster of 10-15 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a cluster. Seeds are produced in capsules, and there will be one to numerous sunken capsules in an inflorescence.In India, it is cultivated in the states of Kerala, Tamil Nadu, and Karnataka. Cinnamon is a tropical crop cultivated from sea level to 900 meters MSL. It grows in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",

            productSpecifications: {
                Commodity: "Cinnamon",
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Cinnamon",
                color: "Brown",
                Size: "5-10 cm sticks",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",      
                                  
               
            } ,
            proSpecifications2: {
                Variety :"Ground Cinnamon",
                color: "Brown",
                Size: "50 ASTM",
                Moisture: "5% max",
                VolatileOil: "1% min",     
                                  
               
            },           
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality.Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements. Mode of Payment: TT, LCDelivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice. Uses & Other Information of Note Cinnamon is used to flavor and to add aroma to foodstuffs. It is a principal ingredient in spice blends such as garam masala and pumpkin spice. Cinnamon is used in baked goods, desserts, curries, and beverages. The essential oil, extracted from cinnamon, is used as a flavoring agent and in the preparation of dental products, perfumes, and cosmetics.",
            uses: "Cinnamon is also used in traditional medicine for its antiseptic and carminative properties. It is used to treat digestive issues, respiratory problems, and as a breath freshener. Cinnamon oil is used as a local anesthetic in dentistry. The aqueous extracts have biopesticidal properties."
        },
        {
            id: 5,
            name: "CUMIN SEEDS",
            details: "CUMIN SEEDS SPECIFICATIONS",
            image: "cuminseeds.jpeg", 
            para: "Cumin Seeds are the dried, cleaned, and polished seeds of Cuminum cyminum. The plant is an annual herbaceous plant, 30-50 cm high, with a slender stem and finely dissected leaves. There are 7 to 12 leaves, the leaf sheaths form the pseudo stem. The lamina is green above and pale green below and has a length of 5-10 cm and width 1-2 cm. Inflorescence is a central umbel of 4-7 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in an umbel. Seeds are produced in schizocarps, and there will be one to numerous sunken schizocarps in an inflorescence.In India, it is cultivated in the states of Gujarat, Rajasthan, Uttar Pradesh, and Madhya Pradesh. Cumin is a tropical crop cultivated from sea level to 1500 meters MSL. It grows in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",
            productSpecifications: {
                Commodity: "CUMIN SEEDS",
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Cumin Seeds",
                color: "Brownish-Yellow",
                Size: "6-8 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",       
                                  
               
            } ,
            proSpecifications2: {
                Variety :"Ground Cumin",
                color: "Brown",
                Size: "50 ASTM",
                Moisture: "5% max",
                VolatileOil: "2.5% min",    
                                  
               
            } ,          
                   
            shipment: "IInspection: SGS or any other agency as per your requirement for Weight and Quality.Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance. Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice. Uses & Other Information of Note Cumin seeds are used to flavor and to add aroma to foodstuffs. They are a principal ingredient in spice blends such as garam masala and curry powder. Cumin is used in baked goods, desserts, curries, and beverages. The essential oil, extracted from cumin, is used as a flavoring agent and in the preparation of dental products, perfumes, and cosmetics.",
            uses:"Cumin is also used in traditional medicine for its digestive and carminative properties. It is used to treat digestive issues, respiratory problems, and as a breath freshener. Cumin oil is used as a local anesthetic in dentistry. The aqueous extracts have biopesticidal properties."
            
        },
        {
            id: 6,
            name: "FENUGREEK",
            details: "FENUGREEK SPECIFICATIONS",
            image: "fenugreek.jpeg", 
            para: "Fenugreek is the dried, cleaned, and polished seeds of Trigonella foenum-graecum. The plant is an annual herbaceous plant, 30-90 cm high, with a slender stem and trifoliate light green leaves. There are 7 to 12 leaves, the leaf sheaths form the pseudo stem. The lamina is green above and pale green below and has a length of 5-10 cm and width 1-2 cm. Inflorescence is a central umbel of 4-7 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in an umbel. Seeds are produced in pods, each containing 10-20 seeds.In India, it is cultivated in the states of Rajasthan, Gujarat, Uttar Pradesh, and Madhya Pradesh. Fenugreek is a cool-season crop cultivated from sea level to 1500 meters MSL. It grows in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",
            productSpecifications: {
                Commodity: "FENUGREEK",
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Fenugreek Seeds",
                color: "Yellowish-Brown",
                Size: "3-5 mm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",     
                                  
               
            } ,
            proSpecifications2: {
                Variety :"Ground Fenugreek",
                color: "Yellowish-Brown",
                Size: "50 ASTM",
                Moisture: "5% max",
                VolatileOil: "0.5% min",     
                                  
               
            } ,          
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.  Mode of Payment: TT, LC   Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.   Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.   Uses & Other Information of Note Fenugreek seeds are used to flavor and to add aroma to foodstuffs. They are a principal ingredient in spice blends such as panch phoron and sambar powder. Fenugreek is used in baked goods, curries, and pickles. The seeds have a strong, sweetish, and somewhat bitter taste, reminiscent of burnt sugar. The essential oil, extracted from fenugreek, is used as a flavoring agent and in the preparation of imitation maple syrup.",
            uses:"Fenugreek is also used in traditional medicine for its digestive and carminative properties. It is used to treat digestive issues, respiratory problems, and to promote milk production in lactating women. Fenugreek seeds are used as an internal emollient for inflammation of the digestive tract and as an external poultice for boils and abscesses. The aqueous extracts have biopesticidal properties."
            
        },
        {
            id: 7,
            name: "GINGER",
            details: "GINGER SPECIFICATIONS",
            image: "ginger.jpeg", 
            para: "Ginger is the boiled, dried, cleaned, and polished rhizomes of Zingiber officinale. The plant is a herbaceous perennial, 90-100 cm high, with a short stem and tufted leaves. There are 7 to 12 leaves, the leaf sheaths form the pseudo stem. The lamina is green above and pale green below and has a length of 15-30 cm and width 2-3 cm. Inflorescence is a central spike of 5-8 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in capsules, and there will be one to numerous sunken capsules in an inflorescence.",

            productSpecifications: {
                Commodity: "GINGER",
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Ginger",
                color: "Light Brown",
                Size: "5-10 cm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",      
                                  
               
            } ,
            proSpecifications2: {
                Variety :"Ground Ginger",
                color: "Light Brown",
                Size: "50 ASTM",
                Moisture: "5% max",
                VolatileOil: "1.5% min",   
                                  
               
            } ,          
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality.  Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.  Mode of Payment: TT, LC  Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.  Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.  Uses & Other Information of Note Ginger is used to flavor and to add aroma to foodstuffs. It is a principal ingredient in spice blends such as garam masala and curry powder. Ginger is used in baked goods, desserts, curries, and beverages. The essential oil, extracted from ginger, is used as a flavoring agent and in the preparation of dental products, perfumes, and cosmetics.",
            uses:"Ginger is also used in traditional medicine for its digestive and carminative properties. It is used to treat digestive issues, respiratory problems, and as a remedy for nausea. Ginger oil is used as a local anesthetic in dentistry. The aqueous extracts have biopesticidal properties."
        },
        {
            id: 8,
            name: "GARLIC",
            details: "GARLIC SPECIFICATIONS",
            image: "garlic.jpeg", 
            para: "Garlic is the dried, cleaned, and polished bulbs of Allium sativum. The plant is a perennial herb, 60-90 cm high, with a short stem and tufted leaves. There are 7 to 12 leaves, the leaf sheaths form the pseudo stem. The lamina is green above and pale green below and has a length of 30-40 cm and width 8-12 cm. Inflorescence is a central spike of 10-15 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in capsules, and there will be one to numerous sunken capsules in an inflorescence.In India, it is cultivated in the states of Gujarat, Maharashtra, Uttar Pradesh, and Madhya Pradesh. Garlic is a tropical crop cultivated from sea level to 1500 meters MSL. It grows in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",

            productSpecifications: {
                Commodity: "GARLIC",
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Garlic Bulbsr",
                color: "White to Light Purple",
                Size: "4-6 cm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",      
                                  
               
            } ,
            proSpecifications2: {
                Variety :"Ground Garlic",
                color: "White to Light Brown",
                Size: "50 ASTM",
                Moisture: "5% max",
                VolatileOil: "0.5% min",   
                                  
               
            } ,          
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality. Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements. Mode of Payment: TT, LC Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.  Uses & Other Information of Note Garlic is used to flavor and to add aroma to foodstuffs. It is a principal ingredient in spice blends such as garam masala and curry powder. Garlic is used in sauces, pickles, and a variety of dishes. The allicin, extracted from garlic, is used as a flavoring agent and in the preparation of medicinal products, cosmetics, and health supplements.",
            uses:"Garlic is also used in traditional medicine for its digestive and carminative properties. It is used to treat digestive issues, respiratory problems, and as a remedy for infections. Garlic oil is used as a local anesthetic in dentistry. The aqueous extracts have biopesticidal properties."
        },
        {
            id: 9,
            name: "CHILLIES",
            details: "CHILLIES SPECIFICATIONS",
            image: "chillies.jpeg", 
            para: "Chillies are the dried, cleaned, and polished fruits of Capsicum annuum and other species of the genus Capsicum. The plant is a herbaceous annual or perennial, 60-120 cm high, with a short stem and bushy leaves. There are 7 to 12 leaves, the leaf sheaths form the pseudo stem. The lamina is green above and pale green below and has a length of 5-15 cm and width 2-5 cm. Inflorescence is a central spike of 10-15 cm length. 1-4 flowers are borne in the axil of the bract, opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in berries, and there will be one to numerous sunken berries in an inflorescence.In India, it is cultivated in the states of Andhra Pradesh, Maharashtra, Karnataka, Tamil Nadu, and Rajasthan. Chillies are tropical crops cultivated from sea level to 1500 meters MSL. They grow in well-drained loamy soils and can be grown in both irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.",
            productSpecifications: {
                Commodity: "CHILLIES",
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Chillies",
                color: "Red",
                Size: "5-10 cm",
                Moisture: "12% max",
                ForeignMatter: "0.5% max",
                Broken: "2% max",      
                                  
               
            } ,
            proSpecifications2: {
                Variety :"Ground Chillies",
                color: "Red",
                Size: "50 ASTM",
                Moisture: "5% max",
                VolatileOil: "0.5% min",   
                                  
               
            } ,          
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality.  Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.  Mode of Payment: TT, LC  Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.  Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.  Uses & Other Information of Note Chillies are used to flavor and to add heat to foodstuffs. They are a principal ingredient in spice blends such as curry powder and chili powder. Chillies are used in sauces, pickles, and a variety of dishes. The capsaicin, extracted from chillies, is used as a flavoring agent and in the preparation of medicinal products, cosmetics, and pepper sprays.",
            uses:"Chillies are also used in traditional medicine for their digestive and carminative properties. They are used to treat digestive issues, respiratory problems, and as a pain reliever. Chilli oil is used as a local anesthetic in dentistry. The aqueous extracts have biopesticidal properties."
        },
        {
            id: 10,
            name: "FENNEL SEEDS",
            details: "FENNEL SEEDS SPECIFICATIONS",
            image: "fennelseeds.jpeg", 
            para: "Fennel Seed is the ripe fruit of an annual herb. This robust herb has feathery green leaves, grows up to 2 meters tall, and produces yellow flowers. The seeds are small, oval, and greenish-brown, about 4-8 mm long, with a sweet, anise-like flavor.Fennel is native to the Mediterranean region and is now cultivated in many parts of the world, including India, Egypt, and China. In India, it is grown extensively in Gujarat, Rajasthan, and Uttar Pradesh. It thrives in well-drained, loamy soil and requires a warm, sunny climate.",
            productSpecifications: {
                Commodity: "FENNEL SEEDS",
                
            
            } ,
            proSpecifications: {
                Variety :"Whole Fennel Seeds",
                Shape: "Oval",
                ParticleSize: "4mm-8mm",
                Colour: "Greenish-Brown",
                Moisture: "10% max",
                TotalAsh: "10% max",
                AcidInsolubleAsh: "1% max ",    
                                  
               
            } ,
            proSpecifications2: {
                Variety :"Ground Fennel",
                Shape: "Oval",
                ParticleSize: " 30 ASTM",
                Colour: " Greenish-Yellow",
                Moisture: "8% max",
                TotalAsh: "4% max",
                AcidInsolubleAsh: "0.5% max ",  
                                  
               
            } ,          
                   
            shipment: "Inspection: SGS or any other agency as per your requirement for Weight and Quality.  Packing: Standard in 25 Kg or 50 Kg Jute Bags with HDPE or PP Lining or as per customer requirements.  Mode of Payment: TT, LC  Delivery: Delivered to the loading port of choice within 20 days from the date of receipt of Confirmed Purchase Order & Receipt of Advance.  Applicable Shipment Terms: FOB/CFR/CIF Inco Terms 2020 as needed by the Customer to their port of choice.  Uses & Other Information of Note Chillies are used to flavor and to add heat to foodstuffs. They are a principal ingredient in spice blends such as curry powder and chili powder. Chillies are used in sauces, pickles, and a variety of dishes. The capsaicin, extracted from chillies, is used as a flavoring agent and in the preparation of medicinal products, cosmetics, and pepper sprays.",
            uses:"Chillies are also used in traditional medicine for their digestive and carminative properties. They are used to treat digestive issues, respiratory problems, and as a pain reliever. Chilli oil is used as a local anesthetic in dentistry. The aqueous extracts have biopesticidal properties."
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
         document.querySelector('.para').textContent = product.para;
       
        document.querySelector('.product-details').textContent = product.details;
        
        document.querySelector('.shipment').textContent = product.shipment;
        document.querySelector('.uses').textContent = product.shipment;


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