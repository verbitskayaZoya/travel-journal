import world from "../assets/icon-world.png"

export default function Header() {
    return (
        <div className="header-container">
          <img className="icon" src={world} alt="Icon of the world"/>
          <h1 className="header-title"> my travel journal </h1>
        </div>
    )
} 