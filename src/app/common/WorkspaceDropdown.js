import React, {useState} from 'react';
import Select from "react-select";

const WorkspaceDropdown = () => {
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

    const CustomOption = ({innerProps, isDisabled, data}) => {
        return !isDisabled ? (
            <div {...innerProps}><span className={'letter'}
                                       style={{backgroundColor: data?.color}}>{data?.label[0]}</span>{data?.label}</div>
        ) : 1;
    }
    const CustomOption2 = (val) => {
        const data = val.getValue()[0];
        return data ? (
            <div className={'align-items-center d-flex'} {...val?.innerProps}><span className={'letter'}
                                            style={{backgroundColor: data?.color}}>{data?.label[0]}</span><div className={'dropdown-label'}>{data?.label}</div></div>
        ): <div></div>;
    }

    return (
        <div className="workspace-dropdown">
            <Select
                defaultValue={workspaces[0]}
                isSearchable={false}
                components={{Option: CustomOption, ValueContainer: CustomOption2}}
                options={workspaces}
            />
        </div>
    );
};

export default WorkspaceDropdown;
