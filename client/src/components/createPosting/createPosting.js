import React, { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import LoginModal from "../login";
import PostingModal from "../postingModal"
import Button from '@material-ui/core/Button';


const CreatePosting = () => {

  return (
    <div>
      <Button color="inherit"><PostingModal /></Button>
    </div>
  )
}

export default CreatePosting