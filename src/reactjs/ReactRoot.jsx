import Summary from "./summaryPresenter.jsx";
import Sidebar from "./sidebarPresenter.jsx";
import Detail from "./detailsPresenter.jsx";
import Search from "./searchPresenter.jsx";
import { createHashRouter,  RouterProvider} from "react-router-dom";
import { observer } from "mobx-react-lite";
export default


observer( 
function ReactRoot(props){
    function makeRouter(model){
        return createHashRouter([
            {path: "/", element: <Search model={model} />,},
            {path: "/search", element: <Search model={model} />,},
            {path: "/summary", element: <Summary model={model} />,},
            {path:"/details", element: <Detail model={model} />},
        ])
    }
    function App(props){
        return (
            <div className="flexParent">
                <div className="sidebar"><Sidebar model={props.model} /></div>              
                <div className="mainContent">
                    <RouterProvider router={makeRouter(props.model)}/>
                </div>
            </div>
        );
    }
    return (
            props.model.ready? <App model={props.model}></App> : <img src={"https://i.gifer.com/XOsX.gif"}></img>
           );
}
)