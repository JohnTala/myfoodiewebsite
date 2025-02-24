import image1 from "../myPicFoods/starters/image1.jpg";
import image2 from "../myPicFoods/starters/image2.jpg";
import image3 from "../myPicFoods/starters/image3.jpg";
import image4 from "../myPicFoods/starters/image4.jpg";
import drink1 from "../myPicFoods/drinks/drink1.jpg";
import drink2 from "../myPicFoods/drinks/drink2.jpg";
import drink3 from "../myPicFoods/drinks/drink3.jpg";
import drink4 from "../myPicFoods/drinks/drink4.jpg";
import main1 from "../myPicFoods/mains/main1.jpg";
import main2 from "../myPicFoods/mains/main2.jpg";
import main3 from "../myPicFoods/mains/main3.jpg";
import main4 from "../myPicFoods/mains/main4.jpg";
import dessert1 from "../myPicFoods/desserts/dessert1.jpg";
import dessert2 from "../myPicFoods/desserts/dessert2.jpg";
import dessert3 from "../myPicFoods/desserts/dessert3.jpg";
import dessert4 from "../myPicFoods/desserts/dessert4.jpg";

export const foodLists = [
  {
    id: 1,
    arr: [drink1],
    mymains: [
      {
        id: 1,
        meal: drink1,
        mealprice: 59.99,
        mealdesc: "Mixed berries",
        amount: 1,
      },
      {
        id: 2,
        meal: drink2,
        mealprice: 76.99,
        mealdesc: "Citrus mixed",
        amount: 1,
      },
      { id: 3, meal: drink3, mealprice: 89.99, mealdesc: "Sunrise", amount: 1 },
      { id: 4, meal: drink4, mealprice: 105.99, mealdesc: "Paloma", amount: 1 },
    ],
    alt: "Image 1",
    food: "Drinks",
    description: "Mocktails",
    price: 59.99,
  },
  {
    id: 2,
    arr: [image1],
    mymains: [
      {
        id: 5,
        meal: image1,
        mealprice: 105.99,
        mealdesc: "Avo Salad",
        amount: 1,
      },
      {
        id: 6,
        meal: image2,
        mealprice: 100.99,
        mealdesc: "Stem&Egg Salad",
        amount: 1,
      },
      {
        id: 7,
        meal: image3,
        mealprice: 120.99,
        mealdesc: "Taco&Avo",
        amount: 1,
      },
      {
        id: 8,
        meal: image4,
        mealprice: 89.99,
        mealdesc: "Thai dumplings",
        amount: 1,
      },
    ],
    alt: "Image 2",
    food: "Starters",
    description: "Avo Salad",
    price: 105.99,
  },
  {
    id: 3,
    arr: [main1],
    mymains: [
      {
        id: 9,
        meal: main1,
        mealprice: 489.99,
        mealdesc: "Tomahawk",
        amount: 1,
      },
      {
        id: 10,
        meal: main2,
        mealprice: 376.99,
        mealdesc: "Grilled Salmon",
        amount: 1,
      },
      {
        id: 11,
        meal: main3,
        mealprice: 255.99,
        mealdesc: "Grilled Squid",
        amount: 1,
      },
      {
        id: 12,
        meal: main4,
        mealprice: 376.99,
        mealdesc: "Salmon ragout",
        amount: 1,
      },
    ],
    alt: "Image 3",
    food: "Mains",
    description: "Tomahawk Steak",
    price: 489.99,
  },
  {
    id: 4,
    arr: [dessert1],
    mymains: [
      {
        id: 13,
        meal: dessert1,
        mealprice: 156.99,
        mealdesc: "Baked Cheesecake",
        amount: 1,
      },
      {
        id: 14,
        meal: dessert2,
        mealprice: 109.99,
        mealdesc: "NY Pancakes",
        amount: 1,
      },
      {
        id: 15,
        meal: dessert3,
        mealprice: 110.99,
        mealdesc: "Milk&Choc Sundae",
        amount: 1,
      },
      {
        id: 16,
        meal: dessert4,
        mealprice: 91.99,
        mealdesc: "French Toasts",
        amount: 1,
      },
    ],
    alt: "Image 4",
    food: "Desserts",
    description: "Baked Cheesecake",
    price: 156.99,
  },
];
