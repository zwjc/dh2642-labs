import {dishType, menuPrice, sortDishes} from "/src/utilities.js";
import "/src/style.css";

function SidebarView(props){
    function handleClickMinusACB(evt){
        console.log(props.onNumberChange);
        props.onNumberChange(props.number-1);
    }
    function handleClickPlusACB(evt){
        props.onNumberChange(props.number+1);
    }


    return (
        <div>
            <div><strong>Number of Guests: </strong></div>
            <div className="flexParent">
                <button onClick={handleClickMinusACB} disabled={props.number===1} >-</button>
                <span title="menu">{props.number}</span> 
                <button onClick={handleClickPlusACB}>+</button>
            </div>
            

            <table>
                <tbody>
                    {
                        sortDishes([...props.dishes]).map(dishTableRowCB)
                    }
                    <tr>
                        <td></td>
                        <td><strong>Total:</strong></td>
                        <td></td>
                        <td className="numberalign">{(menuPrice(props.dishes)*props.number).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    function dishTableRowCB(dish){
        function handleHyperLinkClickACB(evt){
            props.onHyperLinkClick(dish);
        }
        function handleXButtonClickACB(evt){
            props.onXButtonClick(dish)
        }
        return (
        <tr key={dish.id}>
            <td><button className="XButton" onClick={handleXButtonClickACB}>X</button></td>
            <td><a href="#/details" onClick={handleHyperLinkClickACB}>{dish.title}</a></td>
            <td>{dishType(dish)}</td>
            <td className="numberalign">{(dish.pricePerServing*props.number).toFixed(2)}</td>
        </tr>
        )
    }

}


export default SidebarView;