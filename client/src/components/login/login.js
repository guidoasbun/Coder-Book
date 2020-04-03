import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import UserContext from "../../utils/userContext";
import CustomizedExpansionPanels from '../register'
import SignIn from '../signIn'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(() => ({
  title: {
    backgroundColor: '#3f51b5',


  }
}))

export default function FormDialog() {
  const classes = useStyles()

  const {
    name,
    email,
    username,
    password,
    handleLogin,
    handleInputChange
  } = useContext(UserContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Sign In / Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.title} id="form-dialog-title" > <img src="/assets/images/coder_book.png" style={{ height: '60px' }} /></DialogTitle>




        {/* <DialogContent> */}
        {/* <DialogContentText>
            Please enter username/email address and password to continue.
          </DialogContentText> */}
        {/* <TextField
            autoFocus
            name="username"
            value={username}
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            name="password"
            value={password}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={handleInputChange}
          /> */}

        {/* <SignIn /> */}


        {/* </DialogContent> */}
        {/* <DialogActions> */}
        {/* <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary">
            Sign In
          </Button> */}
        {/* </DialogActions> */}
        <CustomizedExpansionPanels />
      </Dialog>
    </div >
  );
}