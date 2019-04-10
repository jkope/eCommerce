import { createStore } from 'redux'
import reducer from '../reducers'


const initialState = {
    user: { name: 'jake' },
    productList: [
        {
            "id": 1,
            "title": "Toshiba - 49” Class – LED - 1080p",
            "description": "Toshiba HDTV Fire TV Edition is a new generation of smart TVs featuring the Fire TV experience built-in and including a Voice Remote with Alexa.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6211/6211009_sd.jpg",
            "price": 199.99,
            "rating": 4.6,
            "category": "tv"
        },
        {
            "id": 2,
            "title": "LG - 75\" Class - LED - UK6190 Series - 2160p",
            "description": "Stream high-definition shows and watch movies with this LG 4K UHD smart TV. Its quad-core processor ensures a clear picture and reduces distracting video noise, while the webOS lets you connect to popular streaming networks.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290163_sd.jpg",
            "price": 999.99,
            "rating": 4.7,
            "category": "tv"
        },
        {
            "id": 3,
            "title": "Sharp - 50\" Class - LED - 2160p - Smart",
            "description": "Watch your favorite films or shows in comfort with this Sharp 4K TV. High resolutions produce images that are four times more detailed than Full HD",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5746/5746805_sd.jpg",
            "price": 299.99,
            "rating": 4.6,
            "category": "tv"
        },
        {
            "id": 4,
            "title": "Apple - AirPods with Charging Case",
            "description": "Introducing wireless AirPods. Just take them out and they're ready to use with all your Apple devices¹. Put them in your ears and they connect instantly.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5577/5577872_rd.jpg",
            "price": 149.99,
            "rating": 4.8,
            "category": "headphones"
        },
        {
            "id": 5,
            "title": "Beats by Dr. Dre - Geek Squad Certified Refurbished",
            "description": "Powerbeats3 wireless earphones. They are sweat-resistant and water-resistant for use during strenuous workouts, and ear hooks keep them comfortably in place.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5732/5732548_rd.jpg",
            "price": 61.99,
            "rating": 4.3,
            "category": "headphones"
        },
        {
            "id": 6,
            "title": "Google - Pixel 2 XL 64GB",
            "description": "Introducing the Google Pixel 2 XL. Discover a better way to capture, store, and see the world. Pixel 2 XL features a smart camera that takes beautiful photos in any light, a fast-charging battery and the Google Assistant built-in.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6099/6099989_sd.jpg",
            "price": 499.99,
            "rating": 4.6,
            "category": "phone"
        },
        {
            "id": 7,
            "title": "Apple - iPhone X with 64GB Memory Cell Phone",
            "description": "iPhone X features an all-screen design with a 5.8\" Super Retina HD display with HDR and True Tone.¹ Designed with durable glass and a surgical-grade stainless steel band. Charges wirelessly.² Resists water and dust.³",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6316/6316064_sd.jpg",
            "price": 649.99,
            "rating": 4.5,
            "category": "phone"
        },
        {
            "id": 8,
            "title": "Samsung - Galaxy S10 with 128GB Memory Cell Phone",
            "description": "Premium experience that exceeds any and all expectations. A ridiculously powerful Pro-grade Camera, intelligent battery, in-display Ultrasonic Fingerprint ID and an immersive cinematic screen in a slim, balanced form. Galaxy S10+ takes your Galaxy to the next level.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323532_sd.jpg",
            "price": 849.99,
            "rating": 4.7,
            "category": "phone"
        },
        {
            "id": 9,
            "title": "Motorola - Moto G7 with 64GB Memory Cell Phone",
            "description": "Take fantastic photos with this unlocked Motorola Moto G7 smartphone. The 12.0-megapixel dual-lens camera with high-resolution zoom lets you capture clear, detailed subjects, and the 6.2-inch Full HD+ display provides immersive ultrawide viewing.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6324/6324277_sd.jpg",
            "price": 199.99,
            "rating": 4.7,
            "category": "phone"
        },
        {
            "id": 10,
            "title": "GoPro - HERO7 Black HD",
            "description": "Film underwater scenes in 4K with this 12-megapixel GoPro HERO7 action camera. Its HyperSmooth stabilization feature lets you capture shake-free videos, and it withstands submersion up to 33 feet without a waterproof case.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6283/6283807_rd.jpg",
            "price": 399.99,
            "rating": 4.7,
            "category": "action-camera"
        },
        {
            "id": 11,
            "title": "Sony - AS300 Waterproof",
            "description": "Shoot clear videos with this Sony recorder. The Balance Optical SteadyShot feature lets you capture stable images while on the move, and the built-in GPS locator displays where videos were shot.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5639/5639307_rd.jpg",
            "price": 299.99,
            "rating": 4.4,
            "category": "action-camera"
        },
        {
            "id": 12,
            "title": "Garmin - VIRB 360",
            "description": "VIRB 360 is the first of its kind, capturing a complete sphere of high-resolution video and audio - even photos. It eliminates the lengthy editing process with unrivaled 1-click video stabilization up to 4K resolution at 30 fps.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5902/5902441_rd.jpg",
            "price": 799.99,
            "rating": 4.4,
            "category": "action-camera"
        },
        {
            "id": 13,
            "title": "Apple - Apple Watch Series 3",
            "description": "Low and high heart rate notifications. Emergency SOS. New Breathe watch faces. Automatic workout detection. New yoga and hiking workouts. Advanced features for runners like cadence and pace alerts. New head-to-head competitions.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706621ld.jpg",
            "price": 229.99,
            "rating": 4.8,
            "category": "watch"
        },
        {
            "id": 14,
            "title": "Samsung - Galaxy Watch Active Smartwatch",
            "description": "Reach fitness goals with this Samsung Galaxy Watch Active smart watch. Featuring advanced workout tracking, this smart watch helps optimize workouts and monitors your progress by tracking up to 40 exercises.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6325/6325856_sd.jpg",
            "price": 199.99,
            "rating": 4.2,
            "category": "watch"
        },
        {
            "id": 15,
            "title": "Fitbit - Inspire HR Activity Tracker",
            "description": "Stay active with this Fitbit Inspire HR fitness tracker. Over 15 goal-based exercise modes let you optimize different workout routines, and a 24/7 heart rate monitor keeps track of your cardio activity during exercise and resting periods.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331359_sd.jpg",
            "price": 95.99,
            "rating": 4,
            "category": "watch"
        },
        {
            "id": 16,
            "title": "Garmin - Forerunner 235",
            "description": "Garmin Forerunner 235 GPS Running Watch: Make the most of your workout with this watch, which uses a wrist-based Elevate heart rate monitor to calculate your VO2 max.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4686/4686204_sd.jpg",
            "price": 219.99,
            "rating": 4.5,
            "category": "watch"
        },
        {
            "id": 17,
            "title": "Garmin - fēnix® 5 Smartwatch",
            "description": "Map your adventure with this Garmin Fenix 5 GPS watch. Built-in navigation lets you know where you are when hiking or camping, and integrated Wi-Fi connects to the Garmin Connect.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5714/5714479_sd.jpg",
            "price": 499.99,
            "rating": 4.6,
            "category": "watch"
        },
        {
            "id": 18,
            "title": "Samsung - 25.5 Cu. Ft. French Door Refrigerator",
            "description": "Add this sleek and spacious Samsung 25.5 cu. ft. french door refrigerator to your busy household. Control the settings exactly how you want in order to freeze and chill food fast.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4980/4980433_sa.jpg",
            "price": 1349.99,
            "rating": 4.5,
            "category": "refrigerator"
        },
        {
            "id": 19,
            "title": "Whirlpool - 24.5 Cu. Ft. 4-Door Refrigerator",
            "description": "Create a modern, functional kitchen with this large Whirlpool French door refrigerator.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5790/5790000_sd.jpg",
            "price": 1899.99,
            "rating": 4.6,
            "category": "refrigerator"
        },
        {
            "id": 20,
            "title": "KitchenAid - KV25G0XER Professional 500 Series",
            "description": "Prepare homemade recipes with this KitchenAid Professional 500 Series stand mixer. It has 10 speed levels for accurate whipping and mixing of smooth batters and doughs.",
            "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598501_rd.jpg",
            "price": 408.99,
            "rating": 4.8,
            "category": "small-appliance"
        }
    ],
    cart: [],
}

const store = createStore(reducer, initialState);

export default store;