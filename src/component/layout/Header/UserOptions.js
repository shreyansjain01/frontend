import React, { Fragment, useState } from "react";
import { useAlert } from "react-alert";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import zIndex from "@mui/material/styles/zIndex";
import Backdrop from "@material-ui/core/Backdrop";

const UserOptions = ({ user }) => {
    const { cartItems } = useSelector((state) => state.cart);

    const [open, setOpen] = useState(false);

    const navigate = useNavigate(); // Use useNavigate for navigation

    const alert = useAlert();

    const dispatch = useDispatch();

    const options = [
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        { icon: <PersonIcon />, name: "Profile", func: account },
        {
            icon: (
                <ShoppingCartIcon
                    style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
                />
            ),
            name: `Cart(${cartItems.length})`,
            func: cart,
        },
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
    ];

    if (user && user.role === "admin") {
        options.unshift({
            icon: <DashboardIcon />,
            name: "Dashboard",
            func: dashboard,
        });
    };

    function dashboard() {
        navigate("/admin/dashboard"); // Use navigate instead of history.push
    }

    function orders() {
        navigate("/orders"); // Use navigate instead of history.push
    }

    function account() {
        navigate("/account"); // Use navigate instead of history.push
    }

    function cart() {
        navigate("/cart"); // Use navigate instead of history.push
    }

    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Successfully");
    }

    return (
        <Fragment>
            <Backdrop open={open} style={{ zIndex: "10" }} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                style={{ zIndex: "11" }}
                open={open}
                direction="down"
                className="speedDial"
                icon={
                    <img
                        className="speedDialIcon"
                        src={user && user.avatar && user.avatar.url ? user.avatar.url : "/Profile.png"}
                        alt="Profile"
                    />
                }

            >
                {options.map((item) => (
                    <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} onClick={item.func} toolTipOpen={window.innerWidth <= 600 ? true : false} />
                ))}
            </SpeedDial>
        </Fragment>
    );
};

export default UserOptions;
