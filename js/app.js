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
                imgUrl: 'images/friedTurkey.jpg',
                isChecked: false,
                madeBy: 'Dad'
            },
            {
                id: 2,
                type: 'meat',
                item: 'chicken and sausage gumbo',
                imgUrl: 'images/gumbo.jpg',
                isChecked: false,
                madeBy: 'Mom'
            },
            {
                id: 3,
                type: 'meat',
                item: 'ham',
                imgUrl: 'images/ham.jpg',
                isChecked: false,
                madeBy: 'Will'
            },
            {
                id: 4,
                type: 'meat',
                item: 'turducken',
                imgUrl: 'images/turducken.jpg',
                isChecked: false,
                madeBy: 'Will'
            },
            {
                id: 5,
                type: 'sides',
                item: 'dressing',
                imgUrl: 'images/dressing.jpg',
                isChecked: false,
                madeBy: 'Mom'
            },
            {
                id: 6,
                type: 'sides',
                item: 'potato salad',
                imgUrl: 'images/potatoSalad.jpg',
                isChecked: false,
                madeBy: 'Ashley'
            },
            {
                id: 7,
                type: 'sides',
                item: 'green bean bundles',
                imgUrl: 'images/greenBeans.jpg',
                isChecked: false,
                madeBy: 'Ashley'
            },
            
            {
                id: 8,
                type: 'sides',
                item: 'cranberry sauce',
                imgUrl: 'images/cranberrySauce.jpg',
                isChecked: false,
                madeBy: 'Amanda'
            },
            
            {
                id: 9,
                type: 'sides',
                item: 'candied yams',
                imgUrl: 'images/candiedYams.jpg',
                isChecked: false,
                madeBy: 'Ashley'
            },
            
            {
                id: 10,
                type: 'sides',
                item: 'turnip greens',
                imgUrl: 'images/turnipGreens.jpg',
                isChecked: false,
                madeBy: 'Will'
            },
            
            {
                id: 11,
                type: 'sides',
                item: 'mashed potatoes',
                imgUrl: 'images/mashedPotatoes.jpg',
                isChecked: false,
                madeBy: 'Ashley'
            },
            
            {
                id: 12,
                type: 'sides',
                item: 'mac and cheese',
                imgUrl: 'images/macAndCheese.jpg',
                isChecked: false,
                madeBy: 'Amanda'
            },
            {
                id: 13,
                type: 'desserts',
                item: 'sweet potato pie',
                imgUrl: 'images/sweetPotatoPie.jpg',
                isChecked: false,
                madeBy: 'Ashley'
            },
            {
                id: 14,
                type: 'desserts',
                item: 'pecan pie',
                imgUrl: 'images/pecanPie.jpg',
                isChecked: false,
                madeBy: 'Amanda'
            },
            {
                id: 15,
                type: 'desserts',
                item: 'pumpkin pie',
                imgUrl: 'images/pumpkinPie.jpg',
                isChecked: false,
                madeBy: 'Ashley'
            },
            {
                id: 16,
                type: 'desserts',
                item: 'red velvet cake',
                imgUrl: 'images/redVelvetCake.jpg',
                isChecked: false,
                madeBy: 'Amanda'
            },
            {
                id: 17,
                type: 'drinks',
                item: 'Everclear',
                imgUrl: 'images/everclear.jpg',
                isChecked: false,
            },
            {
                id: 18,
                type: 'drinks',
                item: 'sweet tea',
                imgUrl: 'images/sweetTea.jpg',
                isChecked: false,
            },
            {
                id: 19,
                type: 'drinks',
                item: 'whiskey',
                imgUrl: 'images/whiskey.jpg',
                isChecked: false,
            },
            {
                id: 20,
                type: 'drinks',
                item: 'lemonade',
                imgUrl: 'images/lemonade.jpg',
                isChecked: false,
            },
            
        ]
        this.plate = {
            person: '',
            meat: [],
            sides: [],
            desserts: [],
            drinks: ''
        }
    }
    init() {
        this.buildFigures(this.menu);
        
    }
    loadItems(el, child) {
        // console.log('loaded');
        el.appendChild(child)
        
    }

    buildFigures(arr) {

        arr.forEach(obj => {
            //for each object, build the figure
            const column = document.createElement('div');
            column.classList.add('col');

            column.innerHTML = `
                                <div class="figure-div h-100" data-isChecked=${obj.isChecked}>
                                    <figure class="figure item-figure">
                                        <img src="${obj.imgUrl}" alt="placeholder img"class="img-fluid image figure-img food-image" />
                                        <figcaption class="figure-caption food-caption">${obj.hasOwnProperty('madeBy') ? obj.madeBy : ''}</figcaption>
                                    </figure>
                                    <h3 class="food-heading">${obj.item}</h3>
                                    <div class="form-check">
                                        <input 
                                            type="checkbox" 
                                            name="${obj.type}" 
                                            id="${obj.type}-${obj.id}"
                                            value="${obj.item}"
                                            class="form-check-input"
                                        />
                                        <label for="${obj.type}-${obj.id}" class="text-capitalize form-check-label">${obj.item}</label>
                                    </div>
                                </div>
                                `
            // console.log(column);

            // this.rows.forEach(row => {
            //     this.loadItems(row, column)
            // })
            switch (obj.type) {
                case 'meat': 
                this.loadItems(this.meatRow, column)
                break;
                
                case 'sides': 
                this.loadItems(this.sidesRow, column)
                break;

                case 'desserts': 
                this.loadItems(this.dessertsRow, column)
                break;
                case 'drinks': 
                this.loadItems(this.drinksRow, column)
                break;
            default:
                return 'error'

                
            }
            
            
        })

    }

    buildPlate() {
        const person = document.getElementById('person').value
        const foodItems = document.querySelectorAll('.figure-div')
        const checkboxes = document.querySelectorAll('input[type=checkbox]')


        
        checkboxes.forEach(checkbox => {
            const name = checkbox.name
            const value = checkbox.value
            
            if (checkbox.checked) {
                console.log(checkbox.value) //unDEFINED HELP!!!!
                this.plate = {
                    ...this.plate,
                    person,
                    [name]: [...this.plate[name], value]
                }

                this.menu.forEach(item => {
                        if ( checkbox.value == item.item) {
                            item.isChecked = checkbox.checked

                        }
                })
                
                
                
            } else {
                this.menu.forEach(item => {
                    if(checkbox.value == item.item) {
                        item.isChecked = false;
                    }
                })
            }
            
            
        })
        const personPlate = document.getElementById('personPlate');
        personPlate.innerText = `${this.plate.person}'s`

        // console.log(this.plate);
        this.makeReceipt(this.menu)
        
    }

    makeReceipt(arr) {
        for(let i =0 ; i< arr.length; i++) {
            if (arr[i].isChecked) {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.innerText = arr[i].item;
                this.foodList.appendChild(listItem);
                

            }

        }
    }
}

const submitBtn = document.getElementById('submitBtn');

const action = new MenuForm();
action.init();

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    action.buildPlate ();
})
