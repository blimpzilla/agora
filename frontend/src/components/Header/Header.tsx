import "./Header.css"
type HeaderProps = {
    Title: String;
    Subtitle: String
    onCreate: ()=>void;
}

function Header( { Title, Subtitle, onCreate }: HeaderProps ) {
    return (
      <header className="header-container">
        <div className="header-content">
          <h1> { Title } </h1>
          <span className="subheading"> { Subtitle } </span>
        </div>
  
        <div className="header-button-container">
          <button className="primary-button" onClick={onCreate}>Create Event</button>
        </div>
      </header>
    );
  }

export default Header;