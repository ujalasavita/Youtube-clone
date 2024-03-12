import React from "react"
import{container} from "react-bootstrap"
import Header from "./components/header/header"
import sidebar from "./components/sidebar/sidebar"
const App = () => {
    return  (
        <>
        <Header/>
        <div className= "app container">

        
        <sidebar/> 
        <container className = "app_main">
            <homesrceen></homesrceen>
        </container>
        </div>
        </>  
        )
    
}
 export default homesrceen