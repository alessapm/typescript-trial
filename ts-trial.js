var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var burger = 'hamburger', calories = 300, tasty = true;
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories");
}
speak(burger, calories);
function speak2(food) {
    console.log("The " + food.name + " has " + food.calories + " calories");
}
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speak2(ice_cream);
//basic class with methods
var Menu = (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    Menu.prototype.list = function () {
        console.log("Our menu for the day: ");
        console.log('this.items.length: ', this.items.length);
        for (var i = 0; i < this.items.length; i++) {
            console.log("- " + this.items[i]);
        }
    };
    return Menu;
}()); //closes Menu class
//Create new instance of the Menu class:
var sundayMenu = new Menu(["cheese", "salami", "pancakes", "pickles"], 1);
//Menus need two parameters, an array of strings and a number
sundayMenu.list();
var HappyMeal = (function (_super) {
    __extends(HappyMeal, _super);
    function HappyMeal(item_list, total_pages) {
        //call super to copy the qualities from the parent Class
        return _super.call(this, item_list, total_pages) || this;
    }
    // HappyMeal will inherit the methods from Menu as well
    //but we want to overwrite some of it, so we redefine list()
    HappyMeal.prototype.list = function () {
        console.log("Our special menu for kids is: ");
        for (var i = 0; i < this.items.length; i++) {
            console.log("* " + this.items[i]);
        }
    };
    return HappyMeal;
}(Menu)); //closes HappyMeal class
//new happyMeal will need the same 2 parameters as a new Menu
var childrens_menu = new HappyMeal(["chicken nuggest", "fries", "apple slices"], 1);
childrens_menu.list();
