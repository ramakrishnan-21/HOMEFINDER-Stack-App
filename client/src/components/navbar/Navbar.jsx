import "./Navbar.scss";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
    const [open, setOpen] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const fetch = useNotificationStore((state) => state.fetch);
    const number = useNotificationStore((state) => state.number);
  
    if(currentUser) fetch();
    console.log(number);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { 
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="logo.png" alt="HomeFinder Logo"/>
                    <span>HomeFinder</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/list">Properties</Link>
                <Link to="/">Contact Us</Link>
            </div>
            <div className="right">
                {currentUser ? (
                    <div className="user">
                        <img
                        src={currentUser.avatar || "/noavatar.jpg"}
                        alt=""
                        />
                        <span>{ currentUser.username }</span>
                        <Link to="/profile" className="profile">
                        {number > 0 && <div className="notification">{number}</div>}
                        <span>Profile</span>
                        </Link>
                    </div>
                    ) : (
                    <>
                        <a href="/login">Sign in</a>
                        <a href="/register" className="registeration">
                        Sign up
                        </a>
                    </>
                )}

                <div className="menuIcon">
                    <img 
                    src="menu.png" 
                    alt="Menu Icon"
                    onClick={() => setOpen((prevValue) => !prevValue)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/list">Properties</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/login">Sign In</Link>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
