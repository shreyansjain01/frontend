import React, { Fragment,  useState, useEffect } from "react";
import "./ResetPassword.css";
//import Loader from "../layout/Loader/Loader";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearErrors, resetPassword} from "../../actions/userAction";
import {useAlert} from "react-alert";
import MetaData from "../layout/MetaData";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";

const ResetPassword = ({history, match}) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const {error, success, loading} = useSelector((state) => state.forgotPassword); 

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const resetPasswordSubmit=(e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("Password", password);
        myForm.set("confirmPassword", confirmPassword);
        dispatch(resetPassword(match.params.token, myForm));
    };

    useEffect(() => {
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if(success) {
            alert.success("Password Updated Successfully");
            history.push("/login");
        }
    }, [dispatch, error, alert, history, success]);
    return (
        <Fragment>
            <MetaData title="Change Password"/>
                <div className="resetPasswordContainer">
                    <div className="resetPasswordBox">
                        <h2 className="resetPasswordHeading">Reset Password</h2>
                        <form className="resetPasswordForm" encType="multipart/form-data" onSubmit={resetPasswordSubmit}>
                        <div className="loginPassword">
                            <LockOpenIcon />
                            <input 
                                type="password"
                                placeholder="New Password"
                                required
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="loginPassword">
                            <LockIcon />
                            <input 
                                type="password"
                                placeholder="Confirm Password"
                                required
                                name="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        
                        
                        <input 
                            type="submit"
                            value="UPDATE"
                            className="resetPasswordBtn"
                        />
                    </form>
                    </div>
                </div>
            </Fragment>
    )
};

export default ResetPassword;