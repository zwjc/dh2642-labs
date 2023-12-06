import SearchFormView from "../views/searchFormView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";
import promiseNoDataView from "../views/promiseNoData.jsx";
import { observer } from "mobx-react-lite";
export default
observer(
    function Search(props){
        function handleInputTextABC(text){
            props.model.setSearchQuery(text);
        }
        function handleSelectTypeABC(type){
            props.model.setSearchType(type);
        }
        function handleSearchDishABC(){
            props.model.doSearch({'query': props.model.searchParams.query || '', 'type': props.model.searchParams.type || ''});
        }
        function handleDetailSearchACB(dish){
            props.model.setCurrentDish(dish.id);
        }
        return (
            <div>
                {<SearchFormView text={props.model.searchParams.query} type={props.model.searchParams.type} dishTypeOptions={["starter","main course","dessert"]} 
        onInputText={handleInputTextABC} onSelectType={handleSelectTypeABC} onSearch={handleSearchDishABC}/>}
                {promiseNoDataView(props.model.searchResultsPromiseState) || <SearchResultsView searchResults={props.model.searchResultsPromiseState.data} onDetailSearch={handleDetailSearchACB}/>}
            </div>
        );
    }
);