import React from "react";




export default function ProjectList({ category, projects }) {

    let  addProjects;
    let filterProjects;


    // eslint-disable-next-line default-case
    switch (category) {
        case 'All': {
            filterProjects = projects;
            break;
        }
        case 'Websites': {
            filterProjects = projects.filter(item => item.category === 'Websites');
            break;
        }
        case 'Flayers': {
            filterProjects = projects.filter(item => item.category === 'Flayers');
            break;
        }
        case 'Business Cards': {
            filterProjects = projects.filter(item => item.category === 'Business Cards')
            break;
        }

    }

        
    addProjects = filterProjects.map(item => {
        return (
            <img   className="projectPhoto" src={item.img} alt="projectPhoto"/>   
        )
    })
        
    return (
        <div className="row">
            <div className="col-10 offset-1">
                <div key={category}  className="wrapperProjectPhoto">
                {addProjects}
                </div>
            </div>
        </div>

        
    )
}