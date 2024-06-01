import { useState } from 'react'
import React from "react"
import data from "./data.jsx"
import TravelCard from "./components/TravelCard"
import Header from "./components/Header"


export default function App() {  
    const travelCards = data.map(item => {
        return (
            <>
                <TravelCard
                    key={item.id}
                    location={item.location}
                    title={item.title}
                    img={item.imageUrl}
                    date={item.dateOfTravel}
                    info={item.description}
                    googleMap={item.googleMapsUrl}
            />
        </>
        )
    } )
    return (     
        <div>
            <Header />
            <div className="container" >
           {travelCards}
           </div>
        </div>
    )
}
 