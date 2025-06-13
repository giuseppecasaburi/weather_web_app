import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
        <header>
            <div className="container">
                <div id="nav-link">
                    <NavLink className="nav-link-elem" to={"/"}>Dashboard</NavLink>
                    <NavLink className="nav-link-elem" to={"/settings"}>Settings</NavLink>
                </div>

            </div>
        </header>
        </>
    )
}

export default Header;