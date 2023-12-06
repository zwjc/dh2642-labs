import "/src/style.css";

function SearchFormView(props){
    function handleInputACB(evt){
        props.onInputText(evt.target.value)
    }
    
    function handleSelectTypeACB(evt){
        props.onSelectType(evt.target.value)
    }

    function handleSearchACB(evt){
        props.onSearch();
    }
    function handleGoToSummary(){
        window.location.hash="#/summary";
    }

    return (
        <div className="searchForm">
            <input className="item" type="text" onChange={handleInputACB} value={props.text || ''}/>
            <select className="item" onChange={handleSelectTypeACB} value={props.type || ''}>
                <option value="">Choose:</option>
                {props.dishTypeOptions.map(dishTypeOptionCB)}
            </select>
            <button className="myButton" onClick={handleSearchACB}>Search</button>
            <button onClick={handleGoToSummary} className="naviButton">Summary</button>
        </div>
    );

    function dishTypeOptionCB(opt){
        return <option  key={opt} value={opt}>{opt}</option>
    }

}

export default SearchFormView;