/**
 * load items
 * select items
 * return selected items
 */

class MenuForm {
    constructor() {
        // access DOM elements 
        
        this.person = document.getElementById('person').value
        this.meatRow = document.getElementById('meatRow')
        this.sidesRow = document.getElementById('sidesRow')
        this.dessertsRow = document.getElementById('dessertsRow')
        this.drinksRow = document.getElementById('drinksRow')
        this.foodList = document.getElementById('foodList')
        
        // create an array of food items ( object)
        this.menu = [
            {
                id: 1,
                type: 'meat',
                item: 'fried turkey',
                imgUrl: 'friedTurkey.jpg',
                isChecked: false
            },
            {
                id: 2,
                type: 'meat',
                item: 'chicken and sausage gumbo',
                imgUrl: 'gumbo',
                isChecked: false
            },
            {
                id: 3,
                type: 'meat',
                item: 'ham',
                imgUrl: 'ham.jpg'
            },
            {
                id: 4,
                type: 'turducken',
                imgUrl: 'turducken.jpg',
                isChecked: false
            },
            {
                id: 5,
                type: 'sides',
                item: 'dressing',
                imgUrl: 'dressing.jpg',
                isChecked: false
            },
            {
                id: 6,
                type: 'sides',
                item: 'potato salad',
                imgUrl: 'potatoSalad.jpg',
                isChecked: false
            },
            {
                id: 7,
                type: 'sides',
                item: 'green bean bundles',
                imgUrl: 'greenBeans.jpg',
                isChecked: false
            },
            
            {
                id: 8,
                type: 'sides',
                item: 'cranberry sauce',
                imgUrl: 'cranberrySauce.jpg',
                isChecked: false
            },
            
            {
                id: 9,
                type: 'sides',
                item: 'candied yams',
                imgUrl: 'candiedYamsjpg',
                isChecked: false
            },
            
            {
                id: 10,
                type: 'sides',
                item: 'turnip greens',
                imgUrl: 'turnipGreens.jpg',
                isChecked: false
            },
            
            {
                id: 11,
                type: 'sides',
                item: 'mashed potatoes',
                imgUrl: 'mashedPotatoes.jpg',
                isChecked: false
            },
            
            {
                id: 12,
                type: 'sides',
                item: 'mac and cheese',
                imgUrl: 'macAndCheese.jpg',
                isChecked: false
            },
            {
                id: 13,
                type: 'desserts',
                item: 'sweet potato pie',
                imgUrl: 'sweetPotatoPie.jpg',
                isChecked: false
            },
            {
                id: 14,
                type: 'desserts',
                item: 'pecan pie',
                imgUrl: 'pecanPie.jpg',
                isChecked: false
            },
            {
                id: 15,
                type: 'desserts',
                item: 'pumpkin pie',
                imgUrl: 'pumpkinPie.jpg',
                isChecked: false
            },
            {
                id: 16,
                type: 'desserts',
                item: 'red velvet cake',
                imgUrl: 'redVelvetCake.jpg',
                isChecked: false
            },
            {
                id: 17,
                type: 'drinks',
                item: 'Everclear',
                imgUrl: 'everclear.jpg',
                isChecked: false
            },
            {
                id: 18,
                type: 'drinks',
                item: 'sweet tea',
                imgUrl: 'sweetTea.jpg',
                isChecked: false
            },
            {
                id: 19,
                type: 'drinks',
                item: 'whiskey',
                imgUrl: 'whiskey.jpg',
                isChecked: false
            },
            {
                id: 20,
                type: 'drinks',
                item: 'lemonade',
                imgUrl: 'lemonade.jpg',
                isChecked: false
            },
            
        ]
    }
    init() {
        console.log('initialized');
        
    }
}

const action = new MenuForm();
action.init();

