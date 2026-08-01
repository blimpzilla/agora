import "./Sidebar.css";
import {
  BadgeQuestionMark,
  CalendarPlus,
  LibraryBig,
  PanelRightOpen,
  Settings,
} from "lucide-react";

type SidebarProps = {
  onCreate: () => void;
};

const accountName = "Blimpmeister";
const accountImgSrc = "../public/IMG_1637.JPG";

function Sidebar({ onCreate }: SidebarProps) {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-brandmark">agora</span>

        <div className="sidebar-toggle-button">
          <PanelRightOpen />
        </div>
      </div>

      <div className="sidebar-menu">
        <button className="sidebar-menu-item" onClick={onCreate}>
          <CalendarPlus className="sidebar-icon" />
          <span className="sidebar-menu-item__label">
            Create New Event
          </span>
        </button>

        <button className="sidebar-menu-item --active">
          <LibraryBig className="sidebar-icon" />
          <span className="sidebar-menu-item__label">Library</span>
        </button>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-footer-menu">
          <button className="sidebar-menu-item">
            <BadgeQuestionMark className="sidebar-icon" />
            <span className="sidebar-menu-item__label">Help</span>
          </button>

          <button className="sidebar-menu-item">
            <Settings className="sidebar-icon" />
            <span className="sidebar-menu-item__label">Preferences</span>
          </button>
        </div>

        <button className="sidebar-account-item">
          <img
            className="sidebar-account-avatar"
            src={accountImgSrc}
            alt={`${accountName}'s avatar`}
          />
          <span className="sidebar-menu-item__label">{accountName}</span>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;