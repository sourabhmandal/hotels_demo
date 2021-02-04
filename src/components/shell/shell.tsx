import React from "react"
import { BrowserRouter as Router, Route,  Switch  } from "react-router-dom"
import PackageDetail from "Container/PackageDetail"
import Dashboard from "Container/Dashboard"
import NoMatch from "Views/NoMatch"

import Header from "../containers/Header"
import Footer from "../containers/Footer"


const Shell: React.FC = () => {
  return (
    <div className="bg-gray-100">
      
      <Router >
        <Header/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/:id" component={PackageDetail}/>
          <Route  component={NoMatch}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default Shell
