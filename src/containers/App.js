import React from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

class App extends React.Component{
    render() {
        return (
            <>
                <SideBar/>
                <Content/>
            </>
        );
    }
}

export default App;
