// Author: Bhavdeep Singh Nijhawan

import React, { useState, useEffect } from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import styled from 'styled-components';

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
    const handleResize = () => {
        const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
        setIsMobile(isMobileDevice);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the value on the first render

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

// JSX to be conditionally rendered based on isMobile state
{
    isMobile ?
        <ActionMenu row={row} actions={actions} /> :
        <StyledSpeedDial
            ariaLabel="SpeedDial playground example"
            icon={<SpeedDialIcon />}
            direction="right"
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.action}
                />
            ))}
        </StyledSpeedDial>
}

const StyledSpeedDial = styled(SpeedDial)`
  .MuiSpeedDial-fab {
    background-color: #240439;
    &:hover {
      background-color: #440080;
    }
  }
`;
