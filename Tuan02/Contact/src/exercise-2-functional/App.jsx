import ListContact from "./ListContact"
import React from "react"

const App = () => {
  const listContact = [
    {
      id: 1,
      firstName: 'Chidi',
      lastName: 'Anagonye',
      phone: '555-366-8987',
      address: "St. Join's University, Sydney, Australia"
    },
    {
      id: 2,
      firstName: 'Eleanor',
      lastName: 'Shellstrop',
      phone: '555-483-1457',
      address: "335 Avalon St, Apt 2C, Pheonix, Arizona"
    },
    {
      id: 3,
      firstName: 'Tahani',
      lastName: 'AI-Jamil',
      phone: '555-276-7991',
      address: "1 Lancaster Terrace, London, England"
    },
    {
      id: 4,
      firstName: 'Jason',
      lastName: 'Mendoza',
      phone: '555-113-8388',
      address: "799 William St, Miami, Florida"
    }
  ]

  return (
    <>
      <ListContact listContact={listContact}></ListContact>
    </>
  )
}

export default App
