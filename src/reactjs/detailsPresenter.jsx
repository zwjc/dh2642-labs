import DetailsView from "../views/detailsView.jsx";
import promiseNoDataView from "../views/promiseNoData.jsx";
import { observer } from "mobx-react-lite";
export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function Details(props){
        function handleAddToMenuACB(){
            props.model.addToMenu(props.model.currentDishPromiseState.data);
        }
        function findDishInMenu(dish){
            return dish.id == props.model.currentDish;
        }
        return promiseNoDataView(props.model.currentDishPromiseState) || <DetailsView guests={props.model.numberOfGuests} dishData={props.model.currentDishPromiseState.data} 
        isDishInMenu={props.model.dishes.filter(findDishInMenu).length>0} onAddToMenu={handleAddToMenuACB}/>;
    }
);