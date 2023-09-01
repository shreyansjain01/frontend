import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import {Navigate, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const {loading, isAuthenticated, user} = useSelector((state) => state.user);
    return (
        <Fragment>
            {!loading && (
                <Route 
                    {...rest}
                    render={(props) => {
                      if(isAuthenticated) {
                        return <Navigate to="/login" />;
                      }
                    
                    return <Component {...props} />;
                    }}
                />
            )}
        </Fragment>

        /*<Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Navigate to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Navi to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>*/
    );
}

export default ProtectedRoute;