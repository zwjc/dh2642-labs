import "/src/style.css";
function DetailsView(props) {
  let handleAddToMenuClick = function() {
    props.onAddToMenu();
    window.location.hash="#/search";
  };

  if (!props.dishData) {
      return <div>Generating</div>;
  }
  let isDishInMenu;
  if (props.isDishInMenu !== undefined) {
      isDishInMenu = props.isDishInMenu;
  } else {
      isDishInMenu = false;
  }
  function backToSearchACB(){
    window.location.hash="#/search";
  }
  
  return (
    <div>
        <button onClick={backToSearchACB}>Cancel</button>
        <h2 className="center">{props.dishData.title}</h2>
        <div>
            <div className="center">
                <img className="center" src={props.dishData.image} alt={props.dishData.title} height='150' />
                <p className="textBox">{props.dishData.instructions}</p>
                {props.dishData.sourceUrl && (
                    <p>
                        <a href={props.dishData.sourceUrl} target="_blank" rel="noopener noreferrer">
                            Original Recipe
                        </a>
                    </p>
                )}
            </div>
            <div className="center">

                <div className="textBox">
                    <div><strong>Ingredients:</strong></div>
                    <ul className="text">
                    {props.dishData.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id} className="mp"> 
                            {ingredient.name} (per person: {ingredient.amount} {ingredient.unit})
                        </li>
                    ))}
                    </ul>
                    <p className="numberalign">Price per dish: ${props.dishData.pricePerServing.toFixed(2)}</p>
                    <p className="numberalign">Total price for all guests: ${(props.dishData.pricePerServing * props.guests).toFixed(2)}</p>
                    
                </div>
                <div className="end">
                    <button 
                        onClick={handleAddToMenuClick} 
                        disabled={isDishInMenu}
                        className="myButton" >
                        {isDishInMenu ? 'Dish in Menu' : 'Add to Menu'}
                    </button>
                </div>
                
            </div>
        </div>
        
        
    </div>
);
}
export default DetailsView