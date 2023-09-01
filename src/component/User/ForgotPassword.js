import React, { Fragment,  useState, useEffect } from "react";
import "./ForgotPassword.css";
//import Loader from "../layout/Loader/Loader";
import {Link} from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import {useDispatch, useSelector} from "react-redux";
import {clearErrors, forgotPassword} from "../../actions/userAction";
import {useAlert} from "react-alert";
import MetaData from "../layout/MetaData";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const {error, message, loading} = useSelector(
        (state) => state.forgotPassword
    );

    const [email, setEmail] = useState("");

    const forgotPasswordSubmit=(e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("email", email);
        dispatch(forgotPassword(myForm));
    };

    useEffect(() => {
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if(message) {
            alert.success(message);
        }
    }, [dispatch, error, alert, message]);

    return (
        <Fragment>
            <MetaData title="Forgot Password"/>
                <div className="forgotPasswordContainer">
                    <div className="forgotPasswordBox">
                        <h2 className="forgotPasswordHeading">Forgot Password</h2>
                        <form className="forgotPasswordForm" encType="multipart/form-data" onSubmit={forgotPasswordSubmit}>
                        <div className="forgotPasswordEmail">
                            <MailOutlineIcon />
                            <input 
                                type="email"
                                placeholder="Email"
                                required
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <input 
                            type="submit"
                            value="SEND"
                            className="forgotPasswordBtn"
                        />
                    </form>
                    </div>
                </div>
            </Fragment>
    )
}

export default ForgotPassword;


//add this later in the form element ref={forgotPasswordTab}.