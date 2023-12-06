import SidebarView from "../views/sidebarView.jsx";
import { observer } from "mobx-react-lite";
export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function Sidebar(props){
        function handleNumberChangeACB(n){
            console.log(n)
            props.model.setNumberOfGuests(n);
        }
        function handleLinkClickACB(dish){
            console.log(dish)
            props.model.setCurrentDish(dish.id)
        }
        function handleXButtonClickACB(dish){
            console.log(dish)
            props.model.removeFromMenu(dish)
        }
        return <SidebarView number={props.model.numberOfGuests} dishes={props.model.dishes} onNumberChange={handleNumberChangeACB}
        onHyperLinkClick={handleLinkClickACB} onXButtonClick={handleXButtonClickACB}/>;
    }
);
