import React from "react";
import PropTypes from 'prop-types';


export default function Stars({count}) {

    const svg =  <svg fill="#ffff00" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/><path d="M0 0h18v18H0z" fill="none"/></svg>;

    let content = [];

    
    function useStars(starsCount) {

        if (starsCount < 1 || starsCount > 5) {
            return null;

        } else {
            for (let i = 1; i <= starsCount; i++) {
                content.push(svg);
            }
        }

        return content.map((item, i) => {
            return (
                <li key={i}>{item}</li>
            )
        })
    }

    return(
        <div className="stars">
            <ul className="card-body-stars u-clearfix">
                {useStars(count)}
            </ul>
        </div>
    )
}


Stars.propTypes = {
    count: PropTypes.number
};

Stars.defaultProps = {
    count: Math.ceil(Math.random() * 5)
}

