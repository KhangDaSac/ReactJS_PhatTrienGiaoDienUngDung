import Contact from "./Contact"
import React from "react"

class App extends React.Component{
    contactDetail = {
        firstName: 'Chidi',
        lastName: 'Anagonye',
        phone: '555-366-8987',
        address: "St. Join's University, Sydney, Australia"
    }
    render(){
      return (
        <>
          <Contact contactDetail = {contactDetail}></Contact>
        </>
      )
    }
}

export default App
