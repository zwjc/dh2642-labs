import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child, onValue} from "/src/teacherFirebase.js";
import {getMenuDetails} from "/src/dishSource";
// Add relevant imports here 
import firebaseConfig from "/src/firebaseConfig.js";
import {observable, reaction, configure} from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions
// Initialise firebase app, database, ref
const app= initializeApp(firebaseConfig)
const db= getDatabase(app)
//  PATH is the “root” Firebase path. NN is your TW2_TW3 group number
const PATH="dinnerModel36"
const rf=ref(db, PATH)
// set(ref(db, PATH+"/test"), "dummy"); /* this is for db initialize testing */

function observerRecap(/*TODO*/) {
    //TODO
}

function modelToPersistence(model){
    function getIdCB(dish){
        return dish.id;
    }
    return {
        guests: model.numberOfGuests,
        dishIDs: model.dishes.map(getIdCB).sort(),
        currtDish: model.currentDish,
    }
}

function persistenceToModel(data, model){
    model.numberOfGuests=data?.guests || 2;
    model.currentDish=data?.currtDish || null;
    return getMenuDetails(data?.dishIDs||[]).then(function saveToModelACB(dishes){ 
        model.dishes=dishes;
    });
}

function saveToFirebase(model){
    if(model.ready) {
        model.ready=false;
        set(rf, modelToPersistence(model))?.then(function setModelReadyACB(){
            model.ready=true;
        });
    }
}

function readFromFirebase(model){
    model.ready=false;
    onValue(rf, (data)=>{
        if(model.ready) {
            persistenceToModel(data.val(), model);
        }
    })
    get(rf).then(function convertACB(data){
                return persistenceToModel(data.val(), model);
            })
            .then(function setModelReadyACB(){
                model.ready=true;
            })  
}

function connectToFirebase(model, watchFunction){
    readFromFirebase(model)
    function checkACB(){
        console.log("checking");
        // any combination of the values that should trigger the side effect
        // we use an array, but an object will also work
        return [model.numberOfGuests, model.currentDish, model.dishes];
    }
    function effectACB(){
        saveToFirebase(model);
    }
    watchFunction(checkACB, effectACB);
}


// Remember to uncomment the following line:
export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase}

export default connectToFirebase;