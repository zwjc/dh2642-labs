/* 
   The Model keeps only abstract data and has no notions of graphics or interaction
*/
import resolvePromise from "./resolvePromise";
import { searchDishes, getDishDetails } from "./dishSource";
export default {  // we export a JavaScript object: { p1:v1, p2:v2, method(param){ statements; }, }
    // other model properties will be initialized here in the coming lab steps
numberOfGuests: 2,
dishes: [],
currentDish: null,
currentDishPromiseState: {},
searchResults: [],
searchParams: {},
searchResultsPromiseState: {},

setSearchQuery(queryText) {
    if(!this.searchParams) {
        this.searchParams = {};
    }
    this.searchParams.query = queryText;
},

setSearchType(type) {
    if(!this.searchParams) {
        this.searchParams = {};
    }
    this.searchParams.type = type;
},

doSearch(searchParams) {
    resolvePromise(searchDishes(searchParams), this.searchResultsPromiseState);
},

setNumberOfGuests(nr){
    // if() and throw exercise
    // work with this.numberOfGuests
   if(nr < 1 || !Number.isInteger(nr)) {
        throw new Error("number of guests not a positive integer");
   } else this.numberOfGuests = nr;
    // The error message must be exactly "number of guests not a positive integer"
    // To learn how to check for integer, test at the Developer Tools Console: Number.isInteger(3.14)
    //When this is done, the Unit test "TW1.1 DinnerModel/can set the number of guests" should pass
    // also "number of guests is a positive integer"
},

addToMenu(dishToAdd){
    // array spread syntax example. Make sure you understand the code below.
    // It sets this.dishes to a new array [   ] where we spread (...) the previous value
    this.dishes= [...this.dishes, dishToAdd];
},

removeFromMenu(dishToRemove){
    // callback exercise! Also return keyword exercise
    function shouldWeKeepDishCB(dish){
        return dish.id !== dishToRemove.id;
        // This will keep the dish when we filter below.
        // That is, we will not keep the dish that has the same id as dishToRemove (if any)
    }
    this.dishes= this.dishes.filter(shouldWeKeepDishCB);
    // the test "can remove dishes" should pass
},

/* 
   setting the ID of dish currently checked by the user.
   A strict MVC/MVP Model would not keep such data, 
   but we take a more relaxed, "Application state" approach. 
   So we store also abstract data that will influence the application status.
 */
setCurrentDish(id) {
    if (id && this.currentDish !== id) {
        this.currentDish = id;
        let promise = getDishDetails(id);
        resolvePromise(promise, this.currentDishPromiseState);
    }
},

setSearchDishesResults(dishes){
    this.searchResults = dishes;
},

}