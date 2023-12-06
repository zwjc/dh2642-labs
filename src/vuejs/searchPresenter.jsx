import SearchFormView from "../views/searchFormView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";
import { observer } from "mobx-react-lite";
export default
observer(
    function Search(props){
        function handleInputTextABC(text){
            console.log(text);
            props.model.setSearchText(text);
        }
        function handleSelectTypeABC(type){
            console.log(type);
            props.model.setSearchType(type);
        }
        function handleSearchDishABC(){
            // const dishes = searchDishes({'query': props.model.searchText, 'type': props.model.searchType});
            // console.log(dishes);
            // props.model.setSearchDishesResults(dishes)
        }
        function handleDetailSearchACB(dish){

        }
        return (
            <div>
                {<SearchFormView text={props.model.searchText} type={props.model.searchType} dishTypeOptions={props.model.dishTypeOptions} 
        onInputText={handleInputTextABC} onSelectType={handleSelectTypeABC} onSearch={handleSearchDishABC}/>}
                {<SearchResultsView searchResults={props.model.dishes} onDetailSearch={handleDetailSearchACB}/>}
            </div>
        );
    }
);
