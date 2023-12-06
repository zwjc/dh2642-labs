import "/src/style.css";

function SearchResultsView(props){
    
    return (
        <div className="gridContainer">
            {
                props.searchResults.map(dishesArrayRenderingCB)
            }
        </div>
    );
    
    function dishesArrayRenderingCB(dish){
        function clickForDetailsACB(){
            props.onDetailSearch(dish);
            window.location.hash="#/details";
        }
        return (
            <div key={dish.id} className="dishItem">
                <span onClick={clickForDetailsACB}>
                    <img className="image" src={dish.image} height='100'></img>
                    <div className="textaligncenter">{dish.title}</div>
                </span>
            </div>
        );
    }
}

export default SearchResultsView;