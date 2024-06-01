import auckland from "./assets/auckland.jpg"
import cape from "./assets/cape.jpg"
import lyon from "./assets/lyon.jpg"
import madagascar from "./assets/madagascar.jpg"
import petra from "./assets/petra.jpg"

export default [
    {
        id: "1",
        title: "Lyon",
        location: "FRANCE",
        googleMapsUrl: "https://maps.app.goo.gl/HCqretYDk2utdbr66",
        dateOfTravel: "April, 2014",
        description: "It's a vibrant city in France renowned for its exquisite cuisine and charming old town, Vieux Lyon. Don’t miss a visit to the Basilica of Notre-Dame de Fourvière for panoramic views of the city.",
        imageUrl: `${lyon}`,     
    },
     {
        id: "2",
        title: "Cape of Good Hope",
        location: "SOUTH AFRICA",
        googleMapsUrl: "https://maps.app.goo.gl/nsxhNyQMwoZqa1Cj6",
        dateOfTravel: "April, 2015",
        description: "It offers breathtaking coastal views and diverse wildlife. Visitors can enjoy scenic hikes, explore the historic lighthouse, and marvel at the meeting point of the Atlantic and Indian Oceans.",
        imageUrl: `${cape}`,     
    },
    {
        id: "3",
        title: "Petra",
        location: "JORDAN",
        googleMapsUrl: "https://maps.app.goo.gl/aoahbDAQ4kHZRSic9",
        dateOfTravel: "January, 2015",
        description: "It's renowned for its stunning rock-cut architecture and historical significance. Visitors can explore the iconic Treasury, hike through the narrow Siq canyon, and discover the rich history of this UNESCO World Heritage Site.",
        imageUrl: `${petra}`,       
    },
    {
        id: "4",
        title: "Waiheke Island",
        location: "NEW ZEALAND",
        googleMapsUrl: "https://maps.app.goo.gl/AD6PyMJaMFCVjeL8A",
        dateOfTravel: "March, 2014",
        description: "Waiheke Island, located a short ferry ride from Auckland, is renowned for its beautiful beaches, world-class vineyards, and stunning coastal scenery.",
        imageUrl: `${auckland}`,       
    },
    {
        id: "5",
        title: "Madagascar",
        location: "MADAGASCAR",
        googleMapsUrl: "https://maps.app.goo.gl/uJTtFWmoxygkPfUW7",
        dateOfTravel: "July 2013",
        description: "It's a lush rainforest sanctuary known for its rich biodiversity, including the iconic indri lemur. Visitors can enjoy guided walks through the forest, discover unique wildlife.",
        imageUrl: `${madagascar}`, 
    },

]