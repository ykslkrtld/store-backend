"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const categories = [
  {
    name: "beauty",
    _id: "669531665d670713409e2a4a",
  },
  {
    name: "fragrances",
    _id: "66952d66e1b780e7b49e8111",
  },
  {
    name: "furniture",
    _id: "6695319c5d670713409e2a51",
  },
  {
    name: "groceries",
    _id: "669531ad5d670713409e2a55",
  },
];


const products = [
    {
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "categoryId": "669531665d670713409e2a4a",
    "price": 9.99,
    "discountPercentage": 7.17,
    "rating": 4.94,
    "stock": 5,
    "brand": "Essence",
    "images": [
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
    "title": "Eyeshadow Palette with Mirror",
    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    "categoryId": "669531665d670713409e2a4a",
    "price": 19.99,
    "discountPercentage": 5.5,
    "rating": 3.28,
    "stock": 44,
    "brand": "Glamour Beauty",
    "images": [
    "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
    "title": "Powder Canister",
    "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    "categoryId": "669531665d670713409e2a4a",
    "price": 14.99,
    "discountPercentage": 18.14,
    "rating": 3.82,
    "stock": 59,
    "brand": "Velvet Touch",
    "images": [
    "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
    "title": "Red Lipstick",
    "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    "categoryId": "669531665d670713409e2a4a",
    "price": 12.99,
    "discountPercentage": 19.03,
    "rating": 2.51,
    "stock": 68,
    "brand": "Chic Cosmetics",
    "images": [
    "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
    "title": "Red Nail Polish",
    "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    "categoryId": "669531665d670713409e2a4a",
    "price": 8.99,
    "discountPercentage": 2.46,
    "rating": 3.91,
    "stock": 71,
    "brand": "Nail Couture",
    "images": [
    "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
    "title": "Calvin Klein CK One",
    "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    "categoryId": "66952d66e1b780e7b49e8111",
    "price": 49.99,
    "discountPercentage": 0.32,
    "rating": 4.85,
    "stock": 17,
    "brand": "Calvin Klein",
    "images": [
    "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
    },
    {
    "title": "Chanel Coco Noir Eau De",
    "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    "categoryId": "66952d66e1b780e7b49e8111",
    "price": 129.99,
    "discountPercentage": 18.64,
    "rating": 2.76,
    "stock": 41,
    "brand": "Chanel",
    "images": [
    "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
    },
    {
    "title": "Dior J'adore",
    "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    "categoryId": "66952d66e1b780e7b49e8111",
    "price": 89.99,
    "discountPercentage": 17.44,
    "rating": 3.31,
    "stock": 91,
    "brand": "Dior",
    "images": [
    "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
    },
    {
    "title": "Dolce Shine Eau de",
    "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    "categoryId": "66952d66e1b780e7b49e8111",
    "price": 69.99,
    "discountPercentage": 11.47,
    "rating": 2.68,
    "stock": 3,
    "brand": "Dolce & Gabbana",
    "images": [
    "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png"
    },
    {
    "title": "Gucci Bloom Eau de",
    "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    "categoryId": "66952d66e1b780e7b49e8111",
    "price": 79.99,
    "discountPercentage": 8.9,
    "rating": 2.69,
    "stock": 93,
    "brand": "Gucci",
    "images": [
    "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
    "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
    },
    {
    "title": "Annibale Colombo Bed",
    "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    "categoryId": "6695319c5d670713409e2a51",
    "price": 1899.99,
    "discountPercentage": 0.29,
    "rating": 4.14,
    "stock": 47,
    "brand": "Annibale Colombo",
   "images": [
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
    },
    {
    "title": "Annibale Colombo Sofa",
    "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    "price": 2499.99,
    "discountPercentage": 18.54,
    "rating": 3.08,
    "stock": 16,
    "brand": "Annibale Colombo",
    "images": [
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
    "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png"
    },
    {
    "title": "Bedside Table African Cherry",
    "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    "categoryId": "6695319c5d670713409e2a51",
    "price": 299.99,
    "discountPercentage": 9.58,
    "rating": 4.48,
    "stock": 16,
    "brand": "Furniture Co.",
    "images": [
    "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
    "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
    "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png"
    },
    {
    "title": "Knoll Saarinen Executive Conference Chair",
    "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    "categoryId": "6695319c5d670713409e2a51",
    "price": 499.99,
    "discountPercentage": 15.23,
    "rating": 4.11,
    "stock": 47,
    "brand": "Knoll",
    "images": [
    "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
    "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
    "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png"
    },
    {
    "title": "Wooden Bathroom Sink With Mirror",
    "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    "categoryId": "6695319c5d670713409e2a51",
    "price": 799.99,
    "discountPercentage": 11.22,
    "rating": 3.26,
    "stock": 95,
    "brand": "Bath Trends",
    "images": [
    "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
    "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
    "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png"
    },
    ]

    const {Category, Product} = require('../models/productsModel')
const { mongoose } = require("../dbConnection");


    async function dataCreate() {
        // await mongoose.connection.dropDatabase();
        await Category.deleteMany();
        await Category.insertMany(categories);
      
        await Product.deleteMany();
        await Product.create(products);

        
        }
        
      module.exports = dataCreate;
    