import React from "react";
 
const OtherLinks = ({title, children}) => {


    return (
        <div className="other-link-content">
        <a href="##" className="other-links "> {title} </a>
        {children}
        </div>
    )

}

export default OtherLinks;