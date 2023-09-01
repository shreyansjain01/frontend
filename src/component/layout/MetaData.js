import React from "react";
import Helmet from "react-helmet";

const MetaData = ({title}) => { //Whenever we import any component into the psge the title will be chnaged to what we will enter in this
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default MetaData;