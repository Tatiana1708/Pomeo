import React from 'react';
import { Link } from 'react-router-dom';


import './styles.css';
import home from "../../assets/images/home.png";

function SideBar ({ menu }) {
    // const location = useLocation();

    // const [active, setActive] = useState(1);

    // useEffect(() => {
    //     menu.forEach(element => {
    //         if (location.pathname === element.path) {
    //             setActive(element.id);
    //         }
    //     });
    // }, [location.pathname])

    // const __navigate = (id) => {
    //     setActive(id);
    // }

    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <Link to={"/"}>
                    <img
                        src={home}
                        alt="logo" />

                    </Link>
                </div>

                {/* <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label'>Logout</span>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                    </div>
                </div> */}
            </div>
        </nav>
    )
}

export default SideBar;