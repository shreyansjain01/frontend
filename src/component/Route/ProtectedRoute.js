import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"; // Import Routes

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <Fragment>
      {!loading && (
        <Routes> {/* Use Routes component here */}
          <Route
            {...rest}
            element={ // Use element instead of render
              isAuthenticated ? (
                <Component />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
