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
