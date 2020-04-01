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

export default function FormDialog() {
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
        Login / Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please enter username/email address and password to continue.
          </DialogContentText>
          <TextField
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
        <CustomizedExpansionPanels />
      </Dialog>
    </div >
  );
}