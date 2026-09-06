import "./Header.css"
type HeaderProps = {
    title: string;
    subtitle: string;
    onCreate: ()=>void;
}

function Header( { title, subtitle, onCreate }: HeaderProps ) {
    return (
      <header className="header-container">
        <div className="header-content">
          <h1> { title } </h1>
          <span className="subheading"> { subtitle } </span>
        </div>
  
        <div className="header-button-container">
          <button className="primary-button" onClick={onCreate}>Create Event</button>
        </div>
      </header>
    );
  }

export default Header;