import React, {useRef} from 'react';
import styled from 'styled-components';
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsUpDown} from "@fortawesome/free-solid-svg-icons";

const Header = ({ userName }) => {
    const workspaces = [
            {
                label: 'Workspace 1',
                value: 1,
                color: '#63b9ac'
            }, {
                label: 'Workspace 2',
                value: 2,
                color: '#6367b9'
            }, {
                label: 'Workspace 3',
                value: 3,
                color: '#b96394'
            }, {
                label: 'Workspace 4',
                value: 4,
                color: '#b98163'
            }
        ]
    ;

    const ref = useRef(null);

    const CustomOption = ({innerProps, isDisabled, data}) => {
        return !isDisabled ? (
            <div {...innerProps}><span className={'letter'}
                                       style={{backgroundColor: data?.color}}>{data?.label[0]}</span>{data?.label}</div>
        ) : 1;
    }

    const DownChevron = ({
                             innerProps,
                         }) => {
        return <FontAwesomeIcon icon={faArrowsUpDown} />;
    };
    const openDropdown = () => {
        const selectEl = ref.current;
        if (!selectEl) return;
        selectEl.openMenu();
    };
    const CustomOption2 = (val) => {
        const data = val.getValue()[0];
        return data ? (
            <div onClick={()=>{openDropdown()}} className={'align-items-center d-flex'} {...val?.innerProps}><span className={'letter'}
                                                                                                                   style={{backgroundColor: data?.color}}>{data?.label[0]}</span>


                {
                   <div className={'dropdown-label'}>{data?.label}</div>
                }

            </div>
        ) : <div></div>;
    }

    return (
        <div className={'align-items-end border-3 border-bottom d-flex justify-content-end'} style={{padding: '15px 30px'}}>

            <Select
                ref={ref}
                styles={{ menuPortal: (base) => ({ ...base, minWidth: '140px' }) }}

                defaultValue={workspaces[0]}
                menuPortalTarget={document.body}
                isSearchable={false}
                components={{Option: CustomOption, ValueContainer: CustomOption2}}
                options={workspaces}
            />

        </div>
    );
};

export default Header;
