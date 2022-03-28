// @ts-ignore
import Logo from "../../assets/logo.svg";
// @ts-ignore
import Profile from "../../assets/profile.jpg";

import "./style.css";

export function Header() {
    return (
        <div className="container-header">
            <img src={Logo} alt="logo" />

            <div className="welcome">
                <img src={Profile} alt="foto fo perfil" />

                <span>Bem-vindo, fulano de tal!</span>
            </div>
        </div>
    );
};
