import { useState } from "react";
import { MenuButton } from "../MenuButton/menu_button.jsx"
export default function Header(){
    const [isOpen, setOpen] = useState();
    return (
       
    <header>
            <div className="header">
                <h1 className="logo">ROBO.SCHOOL</h1>
                <nav className={`header__nav ${isOpen ? "active" : ""}`}>
                    <ul className = "header__list">
                        <li className="header__item">
                            <a className="header__link" href="#school">О школе</a>
                            </li>
                        <li className="header__item"><a className="header__link" href="#coachers">Тренеры</a></li>
                        <li className="header__item"><a className="header__link" href="#price">Стоймость</a></li>
                    </ul>
                </nav>
                
                <h1 className = "telethon-number telethon-number--none">
                    +7 800 000 11 22
                </h1>
                <div className="header__mobile-number-and-button">
                    <img src="img\Group 312.png"></img>
                    <MenuButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
                </div>
            </div>
    </header>
    )

}