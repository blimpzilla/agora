import "./Sidebar.css";
import {
  BadgeQuestionMark,
  CalendarPlus,
  LibraryBig,
  PanelRightOpen,
  Settings,
} from "lucide-react";

type SidebarProps = {
  onCreateEvent: () => void;
  sidebarState: boolean;
  onToggle: () => void;
};

const accountName = "Blimpmeister";
const accountImgSrc = "/IMG_1637.JPG";
const logo = "/lettermark.svg";

function Sidebar({ sidebarState, onToggle, onCreateEvent }: SidebarProps) {
  return (
    <aside className={`sidebar ${sidebarState ? "open" : "collapsed"}`}>
      <header className="sidebar-header">
        <div className="sidebar-logo-toggle-wrapper">
          <a className="sidebar-logo">
            <img src={logo} />
          </a>
          <button className={"sidebar-toggle-icon"} onClick={onToggle}>
            <PanelRightOpen />
          </button>
        </div>
      </header>

      <nav className="sidebar-nav">
        <button className="sidebar-item" onClick={onCreateEvent}>
          <CalendarPlus className="sidebar-item-icon" />
          <span className="sidebar-item-label">Create new event</span>
        </button>

        <a className="sidebar-item">
          <LibraryBig className="sidebar-item-icon" />
          <span className="sidebar-item-label">Library</span>
        </a>
      </nav>

      <footer className="sidebar-footer">
        <nav className="sidebar-footer-nav">
          <a className="sidebar-item">
            <BadgeQuestionMark className="sidebar-item-icon" />
            <span className="sidebar-item-label">Help</span>
          </a>
          <a className="sidebar-item">
            <Settings className="sidebar-item-icon" />
            <span className="sidebar-item-label">Preferences</span>
          </a>
        </nav>
        <a className="sidebar-account">
          <img className="sidebar-account-avatar" src={accountImgSrc} />
          <span className="sidebar-item-label">{accountName}</span>
        </a>
      </footer>
    </aside>
  );
}

export default Sidebar;
