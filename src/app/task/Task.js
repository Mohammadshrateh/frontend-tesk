import React, {useState} from 'react';
import Select from "react-select";
import Environment from "../common/enviroments";
import {faPaperclip, faUpload} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Task = ({ task,index, priorityChanged }) => {
    const [environment, setEnvironment] = useState(task.environment)
    const enviroments = Object.keys(Environment).map((key) => ({
        value: Environment[key],
        label: Environment[key],
    }));
    function getColor() {
        switch (environment.value) {
            case Environment.DEVELOPMENT:
                return   'oldlace';
            case Environment.STAGING:
                return   'yellow';
            case Environment.PRODUCTION:
                return   'blue';
        }
    }

    function changePriority() {
        if(!task.priority){
            task.priority = 0;
        }
        task.priority++;

        priorityChanged(index);
    }
    const formatDate = (date) => {
        const options = { month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const currentDate = new Date();
    const targetDate = new Date(task.date);

    const isDateBeforeCurrent = targetDate < currentDate;
    const isDateAfterCurrent = targetDate > currentDate;

    let className = '';
    if (isDateBeforeCurrent) {
        className = 'before-current';
    } else if (isDateAfterCurrent) {
        className = 'after-current';
    }
    return (
        <div className="task d-flex justify-content-between">
            <div>
                <div className={'d-flex'}>
                    <h6>{task.title}</h6>
                </div>
                <div className={'d-flex task-details-container'}>
                    <div> Items : <span className={'value'}>{task.items}</span></div>
                    <div> QTY : <span className={'value'}>{task.qty}</span></div>
                    <div> Total : <span className={'value'}>{task.qty * task.items}</span></div>
                </div>
            </div>
            <div className={'d-flex align-items-center'} style={{gap: '10px'}}>
                <div>
                    <Select
                        onChange={(val)=>{task.environment = val; setEnvironment(task.environment)}}
                        styles={{


                            control: (base) => ({
                                ...base,

                                color: '#fff',
                                background: getColor(),
                            }),
                        }}
                        defaultValue={task.environment}
                        value={task.environment}
                        isSearchable={false}
                        options={enviroments}
                    />
                </div>
                {
                    task.attachments ?
                        <div >
                            <FontAwesomeIcon icon={faPaperclip} />
                            {task.attachments}
                        </div>: ''

                }
                <div className={'cursor-pointer'} onClick={()=> changePriority()}>
                    <FontAwesomeIcon icon={faUpload} />
                </div>

                <div>
                    <div className={'d-flex align-items-center task-date '+className} style={{gap: '10px'}}>
                        <FontAwesomeIcon icon={faClock} />
                        {formatDate(task.date)}
                    </div>

                </div>
                <div>
                    <img width={'40px'} src={task.avatar} alt="Avatar" />
                </div>
            </div>
        </div>
    );
};

export default Task;
