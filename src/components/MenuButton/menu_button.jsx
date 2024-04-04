import "./menu_button.css"
export const MenuButton = ({ isActive, onClick }) => {
    return (
      <button
        onClick={() => onClick()}
        className={`header__menu-button
          ${isActive === true ? "active" : ""}
          ${isActive === false ? "unactive" : ""}
        `}
      >
        <span></span>
      </button>
    );
  };