import React, {useState} from 'react';
import Task from "./Task";
import Environment from "../common/enviroments";
import AddTask from "./AddTask";
import Tabs from "../common/Tabs";
import Filters from "../common/Filters";

const TasksList = () => {
    const tabs = [
        {
            id: 1,
            title: 'General',
        },
        {
            id: 2,
            title: 'Tasks',
            badgeContent: 3
        },
    ];
    const generateRandomId = () => {
        return Math.floor(Math.random() * 1000);
    };

    // Function to generate a random age between 18 and 60
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 60);
    };

    // Function to generate a random email address
    const generateRandomEmail = () => {
        const emailPrefix = Math.random().toString(36).substring(2, 10);
        const emailDomain = ['gmail.com', 'yahoo.com', 'hotmail.com'];
        const randomDomain = emailDomain[Math.floor(Math.random() * emailDomain.length)];

        return `${emailPrefix}@${randomDomain}`;
    };
    const titles = [
        'Lorem Ipsum',
        'Random Title',
        'Title Generator',
        'Dynamic Title',
        'Title Example',
        'Randomized Text',
        'Title Maker',
        'Generated Title',
    ];
    const avatarts = [
        './assets/avatars/1.svg',
        './assets/avatars/2.svg',
        './assets/avatars/3.svg',
    ];

    // Function to generate a random title
    const generateRandomTitle = () => {
        const randomIndex = Math.floor(Math.random() * titles.length);
        return titles[randomIndex];
    };
    const generateRandomAvatar = () => {
        const randomIndex = Math.floor(Math.random() * avatarts.length);
        return avatarts[randomIndex];
    };
    const getRandomEnvironment = () => {
        const environments = Object.values(Environment);
        const randomIndex = Math.floor(Math.random() * environments.length);
        return {label: environments[randomIndex], value: environments[randomIndex]};
    };

    const generateRandomDate = (start, end) => {
        const startDate = new Date(start).getTime();
        const endDate = new Date(end).getTime();

        if (startDate >= endDate) {
            throw new Error('Invalid date range');
        }

        const randomTimestamp = Math.random() * (endDate - startDate) + startDate;
        const randomDate = new Date(randomTimestamp);

        return randomDate;
    };
    // Generate an array of random objects
    const generateRandomArray = () => {
        const arrayLength = 5; // Set the desired length of the array
        const randomArray = [];

        for (let i = 0; i < arrayLength; i++) {
            const randomObject = {
                id: generateRandomId(),
                priority: 0,
                date: generateRandomDate('2023-01-01', '2024-01-01'),
                name: `Person ${i + 1}`,
                title: generateRandomTitle(),
                items: generateRandomNumber(),
                qty: generateRandomNumber(),
                attachments: generateRandomNumber(),
                email: generateRandomEmail(),
                environment: getRandomEnvironment(),
                avatar: generateRandomAvatar()
            };
            randomArray.push(randomObject);
        }

        return randomArray;
    };
    const [forceRender, setForceRender] = useState(false);

    const priorityChange=(index)=>{
        if(index>0){
            const temp = tasks[index];
            tasks[index] = tasks[index-1];
            tasks[index-1] = temp;
        }
        setForceRender(!forceRender);
    }

    const onFilterChange=(f)=>{
        f = {...filter,...f}
        setFilter(f)
    }
    const formatDate = (date) => {
        const options = { month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    // Call the generateRandomArray function to get the random object array
    const [tasks, setTasks] = useState(generateRandomArray());
    const [filter, setFilter] = useState({});
    return (
        <div className="tasks-list d-flex flex-column flex-1">


            <div className={'d-flex justify-content-between w-100 p-5'}>
                <div  className={'d-flex'}>
                    <Tabs tabs={tabs} />
                    <div style={{width: '40px'}}></div>

                    {(filter && filter.dateRange && <div className={'border border-1 filter-item m-auto p-1'}>{formatDate(filter.dateRange[0])} - {filter.dateRange[1] && formatDate(filter.dateRange[1])}</div>)}
                </div>


                <div>
                    <Filters onChange={(filter)=>{onFilterChange(filter)}}></Filters>
                </div>
            </div>

            <div className={'w-100 p-4 '}>
                {tasks.filter(value => {
                    let test = true;
                    if(filter?.dateRange){
                        if(value.date < filter.dateRange[0]){
                            test= false;
                        }
                        if(filter.dateRange[1] && value.date > filter.dateRange[1]){
                            test= false;
                        }
                    }return test;
                }).map((task, index) => (
                    <Task index={index} task={task} priorityChanged={(index)=>{priorityChange(index)}}></Task>
                ))}
            </div>

            <AddTask onAdd={(val)=> {tasks.push(val); setTasks([...tasks])}}></AddTask>
        </div>
    );
};

export default TasksList;
