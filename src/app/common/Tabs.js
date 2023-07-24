import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
            <div className="tabs-container">
                <div className="tab-buttons">
                    {tabs.map((tab) => (

                        <div
                            onClick={() => handleTabClick(tab.id)}
                            className={'tab-button btn ' + (tab.id === activeTab ? 'active-btn' : '')}>
                            {tab.title}
                            <Badge
                                style={{marginLeft: '15px'}}
                                key={tab.id}
                                color="primary"
                                badgeContent={tab.badgeContent} // Replace this with your desired badge content
                                overlap="circular"
                            >
                            </Badge>
                        </div>

                    ))}
                </div>
                <style>{`
        .tabs-container {
          font-family: Arial, sans-serif;
          overflow: hidden;
        }

        .tab-buttons {
          display: flex;
          gap: 20px
        }

        .tab-button {
          margin: 4px;
          background-color: initial;
          border: initial!important;
        }

        .tab-content {
          padding: 20px;
        }

        .tab-pane {
          display: none;
        }

        .tab-pane.active {
          display: block;
          border-bottom: 3px solid red;
          color: red;
        }
      `}
                </style>
            </div>

    );
};

export default Tabs;
