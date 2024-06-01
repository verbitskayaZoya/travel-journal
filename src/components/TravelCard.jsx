import icon from "../assets/icon-location.png"

export default function TravelCard(props) {
    const {img, location, googleMap, title, date, info} = props
    return (
        <div className="card">
            <img src={img} className="card--image"/>
            <div>
                <div className="card--info--map">
                    <img src={icon} className="icon" alt="location icon" />
                    <p className="card--location"> {location} </p>
                    <a href={googleMap} className="card--google-maps" target="blank"> View on Google Maps </a>
                </div>
            <p className="card--title"> {title} </p>
            <p className="card--date">{date} </p>
            <p className="card--description">{info}</p>
            </div>
        </div>
    )
} 
         
 

 
 

