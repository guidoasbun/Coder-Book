import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
// import UserContext from "../../utils/userContext";
import CustomizedExpansionPanels from '../register'
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function PostingModal() {
   
  const [postingState, setPostingState] = useState({
    entryTitle: '',
    entry: '',
    posting: {}
  })

  const handleCreateEntry = (event) => {
    event.preventDefault();
    axios
      .post('api/postings/one', {
    entryTitle: postingState.entryTitle,
    entry: postingState.entry,
    owner: localStorage.getItem("id")
    }) 
    .then(()=>{
      setOpen(false)
    })
  }

  const handleInputChange = ({ target }) => {
    setPostingState({ ...postingState, [target.name]: target.value })
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Create a Post
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter Post Information</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            type="text"
            name="entryTitle"
            value={postingState.entryTitle}
            margin="dense"
            id="entryTitle"
            label="Entry Title"
            fullWidth
            onChange={handleInputChange}
          />
          
          <TextField
            type="text"
            name="entry"
            value={postingState.entry}
            id="outlined-multiline-static"
            label="Entry"
            multiline
            rows="6"
            variant="outlined"
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleCreateEntry} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}