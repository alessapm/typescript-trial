var burger: string = 'hamburger',
calories: number = 300,
tasty: boolean = true;


function speak(food:string, energy: number): void {
  console.log(`Our ${food} has ${energy} calories`);
}

speak(burger, calories);

// interface
interface Food {
  name: string;
  calories: number;
}

function speak2(food: Food): void {
  console.log(`The ${food.name} has ${food.calories} calories`);
}

var ice_cream = {
  name: "ice cream",
  calories: 200
}

speak2(ice_cream)

//basic class with methods
class Menu {
  items: Array<string>;
  pages: number;

  constructor(item_list: Array<string>, total_pages: number){
    this.items = item_list;
    this.pages = total_pages;
  }

  list(): void {
    console.log("Our menu for the day: ");
    console.log('this.items.length: ', this.items.length)
    for(var i=0; i<this.items.length; i++){
      console.log(`- ${this.items[i]}`);
    }
  }

} //closes Menu class

//Create new instance of the Menu class:
var sundayMenu = new Menu(["cheese", "salami", "pancakes", "pickles"], 1);
    //Menus need two parameters, an array of strings and a number

sundayMenu.list();

class HappyMeal extends Menu {
  constructor(item_list: Array<string>, total_pages: number){
    //call super to copy the qualities from the parent Class
    super(item_list, total_pages)
  }

  // HappyMeal will inherit the methods from Menu as well
  //but we want to overwrite some of it, so we redefine list()
  list(): void{
    console.log("Our special menu for kids is: ");
    for (var i=0; i< this.items.length; i++){
      console.log(`* ${this.items[i]}`);
    }

  }
} //closes HappyMeal class

//new happyMeal will need the same 2 parameters as a new Menu
var childrens_menu = new HappyMeal(["chicken nuggest", "fries", "apple slices"], 1);

childrens_menu.list();

//   Generic function,
// templates for functions that can accept parameters of all data types
// (use <T> for generics), like receives argument of type <T>
// and returns an array with elements of type <T>

function genericFunc<T>(argument: T): T[] {
  var arrayOfT: T[] = [];
  arrayOfT.push(argument);
  return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log('arrayFromString: ', arrayFromString);

var arrayFromNum = genericFunc<number>(12);
console.log('arrayFromNum: ', arrayFromNum);

/* typescript facilities modularity, but in order to use it
you need an external library like require.js or commonJS.
You use typescript syntax for importing and exporting modules. */

/* export syntax:

var sayHello = function(): void {
  console.log("hello");
}
export = sayHi;


import syntax:

import sayHello = require(./exporter);

sayHello();
*/

