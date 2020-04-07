import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { blue } from '@material-ui/core/colors';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone'; 
import ContactSupportTwoToneIcon from '@material-ui/icons/ContactSupportTwoTone';
import MessageTwoToneIcon from '@material-ui/icons/MessageTwoTone';
import InsertCommentTwoToneIcon from '@material-ui/icons/InsertCommentTwoTone';


const useStyles = makeStyles({
  list: {
    width: 200,
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Posts', 'Replies'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index ? <InsertCommentTwoToneIcon />: <MessageTwoToneIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Profile','Contact Us'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index ? <ContactSupportTwoToneIcon /> : <AccountCircleTwoToneIcon />}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['Guide'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
