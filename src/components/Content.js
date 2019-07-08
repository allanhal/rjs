import React from 'react';
import Button from '@material-ui/core/Button';
import BottomNav from './BottomNav'


const Content = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
			</Button>
      <BottomNav></BottomNav>
    </div>
  );
}

export default Content;
