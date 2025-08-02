import logo from './logo.png'
import search_icon from './search_icon.png'
import cart from './cart.png'
import header_image from './header_image.jpg'
import Starter from './Starter.jpg'
import mainCourse from './mainCourse.jpg'
import Sides from './Sides.jpg'
import dessert from './dessert.jpg'
import bakery from './bakery.png'
import beverages from './beverages.jpg'
import combos from './combos.jpg'

import Starter_1 from './Starter_1.jpg'
import Starter_2 from './Starter_2.jpg'
import Starter_3 from './Starter_3.jpg'
import Starter_4 from './Starter_4.jpg'
import Starter_5 from './Starter_5.jpg'
import Starter_6 from './Starter_6.jpg'
import Starter_7 from './Starter_7.jpg'
import Starter_8 from './Starter_8.jpg'
import Starter_9 from './Starter_9.jpg'
import Starter_10 from './Starter_10.jpg'

import mainCourse1 from './mainCourse1.jpg'
import mainCourse2 from './mainCourse2.jpg'
import mainCourse3 from './mainCourse3.jpg'
import mainCourse4 from './mainCourse4.jpg'
import mainCourse5 from './mainCourse5.jpg'
import mainCourse6 from './mainCourse6.jpg'
import mainCourse7 from './mainCourse7.jpg'
import mainCourse8 from './mainCourse8.jpg'
import mainCourse9 from './mainCourse9.jpg'
import mainCourse10 from './mainCourse10.jpg'

import Sides1 from './Sides1.jpg'
import Sides2 from './Sides2.jpg'
import Sides3 from './Sides3.jpg'
import Sides4 from './Sides4.jpg'
import Sides5 from './Sides5.jpg'
import Sides6 from './Sides6.jpg'
import Sides7 from './Sides7.jpg'
import Sides8 from './Sides8.jpg'


export const assets = {
    logo,
    search_icon,
    cart,
    header_image
}

export const menu_list = [
    {
        menu_name: "Sarters",
        menu_image: Starter
    },
    {
        menu_name: "Main Course",
        menu_image: mainCourse
    },
    {
        menu_name: "Cheese & Sides",
        menu_image: Sides
    },
    {
        menu_name: "Desserts",
        menu_image: dessert
    },
    {
        menu_name: "Bakery & Breakfast",
        menu_image: bakery
    },
    {
        menu_name: "Beverages",
        menu_image: beverages
    },
    {
        menu_name: "Combos",
        menu_image: combos
    }
]

export const food_list = [
    {
        _id: "1",
        name: "Soupe à l’oignon",
        image: Starter_1,
        price: 9,
        description: "French onion soup made with vegetable broth and topped with melted cheese",
        category: "Starter"
    },
    {
        _id: "2",
        name: "Salade de chèvre chaud",
        image: Starter_2,
        price: 12,
        description: "Warm goat cheese on toasted bread served over a green salad",
        category: "Starter"
    },
    {
        _id: "3",
        name: "Ratatouille",
        image: Starter_3,
        price: 11,
        description: "Stewed Provencal vegetables (zucchini, eggplant, peppers, tomatoes) served warm or cold",
        category: "Starter"
    },
    {
        _id: "4",
        name: "Tarte aux légumes",
        image: Starter_4,
        price: 10,
        description: "Vegetable tart, often with tomatoes, zucchini, or onions and cheese",
        category: "Starter"
    },
    {
        _id: "5",
        name: "Salade de betteraves",
        image: Starter_5,
        price: 9,
        description: " Beetroot salad, often with walnuts and goat cheese",
        category: "Starter"
    },
    {
        _id: "6",
        name: "Velouté de potiron ",
        image: Starter_6,
        price: 9,
        description: "Creamy pumpkin soup",
        category: "Starter"
    },
    {
        _id: "7",
        name: "Gratin dauphinois (small portion)",
        image: Starter_7,
        price: 10,
        description: "Creamy baked sliced potatoes with cheese and garlic",
        category: "Starter"
    },
    {
        _id: "8",
        name: "Crudités avec sauce au yaourt",
        image: Starter_8,
        price: 8,
        description: "Fresh vegetable sticks served with a herbed yogurt dip",
        category: "Starter"
    },
    {
        _id: "9",
        name: "Champignons à la provençale",
        image: Starter_9,
        price: 11,
        description: "Mushrooms sautéed with garlic, herbs, and olive oil",
        category: "Starter"
    },
    {
        _id: "10",
        name: "Oeufs mimosa",
        image: Starter_10,
        price: 8,
        description: "Deviled eggs with a creamy mustard filling",
        category: "Starter"
    },

    {
        _id: "11",
        name: "Tian de légumes",
        image: mainCourse1,
        price: 16,
        description: "Oven-baked layered vegetables (zucchini, tomato, eggplant) with herbs",
        category: "mainCourse"
    },
    {
        _id: "12",
        name: "Cassoulet végétarien",
        image: mainCourse2,
        price: 16,
        description: "Hearty slow-cooked white bean stew with vegetables, no meat",
        category: "mainCourse"
    },
    {
        _id: "13",
        name: "Croziflette végétarienne",
        image: mainCourse3,
        price: 15,
        description: "Savoyard buckwheat pasta bake with cheese, onions, and cream",
        category: "mainCourse"
    },
    {
        _id: "14",
        name: "Piperade basquaise (sans œufs)",
        image: mainCourse4,
        price: 14,
        description: "Basque pepper-tomato stew with onions and garlic; optionally vegan",
        category: "mainCourse"
    },
    {
        _id: "15",
        name: "Gratin de courgettes",
        image: mainCourse5,
        price: 13,
        description: "Baked zucchini with béchamel sauce and cheese",
        category: "mainCourse"
    },
    {
        _id: "16",
        name: "Soufflé au fromage",
        image: mainCourse6,
        price: 16,
        description: "Stuffed cabbage leaves with rice, herbs, and vegetables (no meat)",
        category: "mainCourse"
    },
    {
        _id: "17",
        name: "Chou farci végétarien",
        image: mainCourse7,
        price: 17,
        description: "Pasta with wild mushrooms and cream sauce",
        category: "mainCourse"
    },
    {
        _id: "18",
        name: "Pâtes aux champignons et crème",
        image: mainCourse8,
        price: 15,
        description: "Pasta with wild mushrooms and cream sauce",
        category: "mainCourse"
    },
    {
        _id: "19",
        name: "Lentilles à la Dijonnaise",
        image: mainCourse9,
        price: 14,
        description: "Dijon-style lentils in a mustard cream sauce with herbs",
        category: "mainCourse"
    },
    {
        _id: "20",
        name: "Gratin de légumes racines",
        image: mainCourse10,
        price: 14,
        description: "Root vegetable gratin (parsnip, carrot, potato) with cheese or béchamel",
        category: "mainCourse"
    },
    
    {
        _id: "21",
        name: "Aligot",
        image: Sides1,
        price: 14,
        description: "Mashed potatoes blended with melted Tomme cheese, butter, and garlic",
        category: "Cheese_Sides"
    },{
        _id: "22",
        name: "Fromage de chèvre rôti au miel",
        image: Sides2,
        price: 13,
        description: "Roasted goat cheese with honey and herbs, served with salad or bread",
        category: "Cheese_Sides"
    },{
        _id: "23",
        name: "Céleri rémoulade",
        image: Sides3,
        price: 7,
        description: "	Baked vegetable custard (often carrot, spinach, or zucchini)",
        category: "Cheese_Sides"
    },{
        _id: "24",
        name: "Flan de légumes",
        image: Sides4,
        price: 9,
        description: "Root vegetable gratin (parsnip, carrot, potato) with cheese or béchamel",
        category: "Cheese_Sides"
    },{
        _id: "25",
        name: "Confit d’oignons",
        image: Sides5,
        price: 6,
        description: "Sweet and tangy onion jam, often served alongside cheese or bread",
        category: "Cheese_Sides"
    },{
        _id: "26",
        name: "Polenta crémeuse au fromage",
        image: Sides6,
        price: 9,
        description: "Creamy cornmeal with cheese and butter, sometimes served as a base for mains",
        category: "Cheese_Sides"
    },{
        _id: "27",
        name: "Carottes Vichy",
        image: Sides7,
        price: 7,
        description: "Glazed carrots simmered with butter, sugar, and Vichy mineral water",
        category: "Cheese_Sides"
    },{
        _id: "28",
        name: "Raclette",
        image: Sides8,
        price: 12,
        description: "Melted Raclette cheese is scraped over boiled potatoes, pickles, and optionally vegetables or charcuterie",
        category: "Cheese_Sides"
    }
]