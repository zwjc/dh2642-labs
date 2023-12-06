// un-comment when needed:
import {sortIngredients} from "/src/utilities.js";
import "/src/style.css"

/* Functional JSX component. Name must start with capital letter */
function SummaryView(props){
  function backToSearchACB(){
    window.location.hash="/search";
  }
    return (
            <div className="summary">
              <div className="flexParent">
                Summary for <strong>{props.people}</strong> persons: 
                <button onClick={backToSearchACB} className="naviButton">Back To Search</button>
              </div>
              

              <table className="center">
                <thead>
                  <tr>
                    <th>Ingredients</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                  </tr>
                </thead>
                
                
                <tbody>
                  {  //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript expressions\
                      sortIngredients(props.ingredients).map(ingredientTableRowCB)
                  }
                </tbody>
              </table>
            </div>
    );
    /* for TW1.5 
      Note also that the callback can be defined after it is used! 
      This JS feature is called "function hoisting".
    */
    function ingredientTableRowCB(ingr){
        return <tr key={ingr.id} >
                 <td>{ingr.name}</td>
                 <td>{ingr.aisle}</td>
                 <td className="numberalign">{(ingr.amount*props.people).toFixed(2)}</td>
                 <td>{ingr.unit}</td>
               </tr>;
    }
}

export default SummaryView;