import DetailsView from "../views/detailsView.jsx";
import { observer } from "mobx-react-lite";
export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function Details(props){
        function ifDishInMenu(){
            props.model.ifDishInMenu(props.model.currentDish);
        }
        function handleAddToMenu(dish){
            props.model.addToMenu(dish);
        }
        return <DetailsView guests={props.model.numberOfGuests} dishData={props.model.currentDishPromiseState.data} 
        isDishInMenu={props.model.ifDishInMenu(props.model.currentDish)} onAddToMenu={handleAddToMenu}/>;
    }
);
