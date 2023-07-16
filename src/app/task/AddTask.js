import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faPlus, faUser} from "@fortawesome/free-solid-svg-icons";

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [qty, setQty] = useState(0);
    const [items, setItems] = useState(0);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            alert('Please enter a title for the task.');
            return;
        }

        const newTask = {
            title: title,
            qty: qty,
            items: items,
            environment: {},
            date: new Date()
        };

        onAdd(newTask);
        setTitle('');
        setQty(0);
        setItems(0)
    };

    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex" style={{width: '500px'}}>
                    <input type="text" placeholder={'Task description'} className="form-control"  value={title} onChange={handleTitleChange} />
                    <div className={'p-2 d-inline-flex align-items-center'} style={{gap: '7px'}} >
                        <button type='button' className="btn btn-primary d-flex p-2">
                            <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />
                        </button>

                        <FontAwesomeIcon icon={faClock} />
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
                <div className={'d-flex align-items-center'} style={{gap: '10px'}}>
                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">Items</label>
                    </div>
                    <div className="col-auto">
                        <input type="number" className="form-control" value={items} onChange={(e)=>setItems(e.target.value)}
                               aria-labelledby="passwordHelpInline"></input>
                    </div>

                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">Qty</label>
                    </div>
                    <div className="col-auto">
                        <input type="number" className="form-control" value={qty} onChange={(e)=>setQty(e.target.value)}
                               aria-labelledby="passwordHelpInline"></input>
                    </div>

                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">Total</label>
                    </div>
                    <div className="col-auto">
                        {qty*items}
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary d-flex p-2 mt-3">+ Add</button>

                </div>

            </form>
        </div>
    );
};

export default AddTask;
