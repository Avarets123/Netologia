import React, { useState } from 'react';
import WorkoutModel from '../../Models/Workout/Workout.model';

const Workout = () => {

    let form = document.querySelector('form');


    const [getWork, setWork] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault();

        if (e.target.data.value === '' || !e.target.distance.value) {
            return;
        }

        const hasWork = getWork.find(el => el.data === e.target.data.value)
        if (hasWork) {

           await setWork(prev => {

                const idx = prev.findIndex(el => el.data === hasWork.data);


                let editElem = prev[idx];

                
                
                let newElem = {
                    data: editElem.data,
                    distance: editElem.distance + +e.target.distance.value,
                    id: editElem.id
                }
                

                
                const before = prev.slice(0, idx);
                const after = prev.slice(idx + 1);

                return [...before, newElem, ...after];

            });

            form.reset();
            

        } else {
            const newWorkout = new WorkoutModel(e.target.data.value, +e.target.distance.value);

            await setWork(prev => [newWorkout, ...prev]);

            document.querySelector('form').reset();




        }
    }

    const onRemove = (id) => {
        

        setWork(prev => {

            const idx = prev.findIndex(elem => elem.id === id);

            const before = prev.slice(0, idx);
            const after = prev.slice(idx + 1);

            return [...before, ...after];
            

        })
    }


    const onEdit = (id) => {

        const editElem = getWork.find(elem => elem.id === id);

        form.data.value = editElem.data;
        form.distance.value = editElem.distance;

    }


    return (

        <div className='container'>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='wrapper-input'>
                    <label htmlFor='data'> Дата (ДД.ММ.ГГ) </label>
                    <input  id='data' type='text' name='data' />
                </div>
                <div className='wrapper-input'>
                    <label htmlFor='distance'> Пройдено км </label>
                    <input  id='distance' type='number' name='distance'/>
                </div>
                <button type='submit' className='submit'> OK</button>
            </form>


            <div className='result'>
                <div className='table'>
                    <span>Дата (ДД.ММ.ГГ)</span>
                    <span>Пройдено км</span>
                    <span>Действия</span>
                </div>
                

                <div className='result-list'>
 


                    {getWork.map(({data, distance, id}) => {
                        return (
                            <div className='result-item' key={id}>
                                <span>{data}</span>
                                <span>{distance}</span>
                                <div className='icon'>
                                    <span className='remove' onClick={() => onRemove(id)} >
                                        &#10008;  
                                    </span>
                                    <span className='edit' onClick={() => onEdit(id)}>
                                        &#9998;
                                    </span>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );

}


export default Workout;
