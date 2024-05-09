import i18n from '../services/i18n.js';
import {locale} from '../app.js';

var productCatalog = [{}];

const products = {

    loadProductCatalog : async() => {

        await i18n.loadStringsJSON(locale);
        console.log("Loaded locale strings for " + locale);

        productCatalog = [{
            "productID" : 1,
            "type": "moon",
            "class": 2,
            "title": i18n.getString("title", "1"),
            "price": 15,
            "qty": 0,
            "imageURL": "Moonbucks_Mug.jpeg",
            "desc": i18n.getString("desc", "1")
        },
        {
            "productID" : 2,
            "type": "moon",
            "class": 4,
            "title": i18n.getString("title", "2"),
            "price": 10,
            "qty": 0,
            "imageURL": "Moonbucks_MediumRoast.jpg",
            "desc": i18n.getString("desc", "2")
        },
        {
            "productID" : 3,
            "type": "moon",
            "class": 1,
            "title": i18n.getString("title", "3"),
            "price": 12,
            "qty": 0,
            "imageURL": "Moonbucks_CoffeeFilters.jpg",
            "desc": i18n.getString("desc", "3")
        },
        {
            "productID" : 4,
            "type": "moon",
            "title": i18n.getString("title", "4"),
            "price": 16,
            "qty": 0,
            "imageURL": "Moonbucks_Tumbler.jpg",
            "desc": i18n.getString("desc", "4")
        },
        {
            "productID" : 5,
            "type": "coffee",
            "title": i18n.getString("title", "5"),
            "price": 10,
            "qty": 0,
            "imageURL": "img/Moonbucks_LightRoast.jpg",
            "desc": i18n.getString("desc", "5")
        },
        {
            "productID" : 6,
            "type": "moon",
            "title": i18n.getString("title", "6"),
            "price": 20,
            "qty": 0,
            "imageURL": "img/Moonbucks_PicnicBlanket.jpg",
            "desc": i18n.getString("desc", "6")
        },
        {
            "productID" : 7,
            "type": "coffee",
            "title": i18n.getString("title", "7"),
            "price": 25,
            "qty": 0,
            "imageURL": "img/Moonbucks_FrenchPress.jpg",
            "desc": i18n.getString("desc", "7")
        },
        {
            "productID" : 8,
            "type": "coffee",
            "title": i18n.getString("title", "8"),
            "price": 10,
            "qty": 0,
            "imageURL": "img/Moonbucks_DarkRoast.jpg",
            "desc": i18n.getString("desc", "8")
        },
        /*
        {
            "productID" : 9,
            "type": "moon",
            "title": i18n.getString("title", "9"),
            "price": 8,
            "qty": 0,
            "imageURL": "img/Moonbucks_HerbalTea.jpg",
            "desc": i18n.getString("desc", "9")
        },
        {
            "productID" : 10,
            "type": "moon",
            "title": i18n.getString("title", "10"),
            "price": 22,
            "qty": 0,
            "imageURL": "img/Moonbucks_Earrings.jpg",
            "desc": i18n.getString("desc", "10")
        },
        {
            "productID" : 11,
            "type": "coffee",
            "title": i18n.getString("title", "11"),
            "price": 25,
            "qty": 0,
            "imageURL": "img/Moonbucks_ElectricMilkFrother.jpg",
            "desc": i18n.getString("desc", "11")
        },
        {
            "productID" : 12,
            "type": "coffee",
            "title": i18n.getString("title", "12"),
            "price": 134999,
            "qty": 24,
            "imageURL": "img/Moonbucks_Spoon.jpg",
            "desc": i18n.getString("desc", "12")
        },
        {
            "productID" : 13,
            "type": "moon",
            "title": i18n.getString("title", "13"),
            "price": 30,
            "qty": 0,
            "imageURL": "img/Moonbucks_CoffeeMakerDustCover.jpg",
            "desc": i18n.getString("desc", "13")
        }
        */
        ];

        return productCatalog;
    }
}


export default products;