import React, {useState} from 'react';
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";


const Filters = ({onChange}) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (e) => {
        e?.preventDefault();
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <button type="button" onClick={handleClick} className="btn btn-outline-secondary"><FontAwesomeIcon icon={faClock} /> Date</button>
            {isOpen && (<DatePicker
                inline
                portalId=".root"

                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    handleClick(null)
                    setDateRange(update);
                    onChange({dateRange:update});
                }}
            />)}
        </div>
    );
};

export default Filters;
