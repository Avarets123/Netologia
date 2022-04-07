import React, { useState } from "react";

import Toolbar from '../Toolbar';


export default function Portfolio() {

    const [filter, setFilter] = useState('All')

    console.log(filter);
    

    return (
        <section className='tabs-section'>
        <div className='container'>
            <Toolbar filters={['All', 'Websites', 'Flayers', 'Business Cards']} 
            selected={filter} onSelectFilter={(filter) => setFilter(filter)}
            
            />
        </div>
        </section>
    )
}