import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { setNavigation } from 'app/store/fuse/navigationSlice';
import { homeNavigation, adminNavigation } from 'app/configs/navigationConfig';
import { selectFuseNavbar, setNavGroup } from 'app/store/fuse/navbarSlice';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  const dispatch = useDispatch();
  const navbar = useSelector(selectFuseNavbar);
  const { selectedNavGroup, navGroups } = navbar;

  const handleChange = (event) => {
    dispatch(setNavGroup(event.target.value));
    if (event.target.value === 'admin') {
      dispatch(setNavigation(adminNavigation));
    } else {
      dispatch(setNavigation(homeNavigation));
    }
  };

  return (
    <Root className="flex items-center" style={{ width: '100%' }}>
      <img className="logo-icon w-32 h-32" src="assets/images/logo/logo.svg" alt="logo" />

      <div style={{ width: 'inherit', padding: '10px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Navigation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedNavGroup}
            style={{ textTransform: 'capitalize' }}
            label="Navigation"
            onChange={handleChange}
          >
            {navGroups.map((n) => (
              <MenuItem value={n.name} key={n.id} style={{ textTransform: 'capitalize' }}>
                {n.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Root>
  );
}

export default Logo;
