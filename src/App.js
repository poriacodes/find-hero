import React, {BrowserRouter, useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HomePage from "../src/pages/Homepage"
import { HashLoader } from 'react-spinners';


const App = () =>{

  // Loading state  

  const [isLoading, setIsLoading] = useState(true); 

  
  useEffect(() => { 

  
    // Wait for 3 seconds 

    setTimeout(() => { 

      setIsLoading(false); 

    }, 3000); 

  }, []); 

  

  // Custom css for loader 

  const override = ` 

  display: block; 

  margin-left: auto;

  margin-right:auto; 

  margin-top: 200px;

  border-color: red; 
`; 


  return isLoading ? 


    // If page is still loading then splash screen 

    <HashLoader color={'#000000'} isLoading={isLoading} 

      css={override} size={150}  /> :
    
    <div className="App">

       <Router>
          <Switch>
          <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      
    </div>
    

}

export default App;
