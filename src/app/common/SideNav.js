import React, {Component, useState} from 'react';
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
    faCalendar,
    faFolder,
    faFolderOpen, faSignal,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
    const list = [
        {
            label: 'Dashboard',
            icon: faHome
        },
        {
            label: 'Projects',
            icon: faFolder
        },
        {
            label: 'Users',
            icon: faUsers
        },
        {
            label: 'Calender',
            icon: faCalendar
        },
        {
            label: 'Media',
            icon: faFolderOpen
        },
    ];

    const [sideNaveOpen, setSideNaveOpen] = useState(true);

    const logo = './assets/logo.svg';
    const logoGoogle = './assets/google-drive-logo-4.png';
    return (
        <div className="sidenav d-flex flex-column position-relative" style={{width: !sideNaveOpen? '60px' : '200px', padding:  !sideNaveOpen? '14px' : '20px'}}>
            <div className={'sidenav-arrow'} onClick={() => {setSideNaveOpen(!sideNaveOpen)}}>

                {!sideNaveOpen ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleLeft} />}
            </div>

            <img className={'mb-3'} src={logo} alt="Logo"/>
            <div>
                <div>Workapace</div>
            </div>
            {
                list.map(value => {
                    return <div className={'d-flex align-items-center cursor-pointer'}>
                        <FontAwesomeIcon icon={value.icon} className={'p-2'}/>
                        {
                            sideNaveOpen?
                                <div className={'sidenav-label'}>{value.label}</div> : ''

                        }
                    </div>
                })
            }
            <div className={'mt-3'}>
                <div> Integrations</div>
                <img className={'mb-3 mt-2 p-3'} src={logoGoogle} alt="Logo" style={{maxWidth: '100%', backgroundColor: '#e2e7f1'}}/>
                <div className={'d-flex'}>
                    Storage
                </div>
                <div className={'d-flex w-100'}>
                    <div className={'progress-value mt-2'} style={{height: '7px', width: '40%', backgroundColor: '#4238d3'}}>
                    </div>
                </div>

                <div className={'d-flex mt-1'} style={{fontSize: '13px'}}>
                    40.43 GB of 100 GB Used
                </div>

                <div className={'p-2 mt-2 mb-2'} style={{border: '2px solid grey', borderRadius:'4px'}}>
                    Upgrade Storage
                </div>

                <div className={'d-flex align-items-center cursor-pointer'}>
                    <FontAwesomeIcon icon={faSignal} className={'p-2'}/>
                    {
                        sideNaveOpen?
                            <div className={'sidenav-label'}>Reports</div> : ''

                    }
                </div>
            </div>
        </div>
    );
}

export default SideNav;
