import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AceEditor from '../codeEditor';
import axios from 'axios'
import SimpleCard from './solution';
import LoginModal from '../login'
import SolutionModal from './solution';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    backgroundColor: '#e8eaf6',
    margin: 'auto'
  },
  media: {
    height: 300,
    margin: 'auto',
    backgroundColor: 'white',

  },
});


export default function CodeChallenge() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia

          className={classes.media}
          image="assets/images/Coding_Challenge.png"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Maximum Multiple
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div>
              Given a Divisor and a Bound , Find the largest integer N , Such That:
            </div>

            <div>
              Conditions :
              N is divisible by divisor

              N is less than or equal to bound

              N is greater than 0.

            </div>
            <div>
              <h3>Input >> Output Examples  </h3>
              <code>maxMultiple (2,7) ==> return (6)</code>

              <h3>Explanation</h3>
              <p>(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .</p>
            </div>


          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="https://www.google.com" target="_blank" size="small" color="primary">
          Help
        </Button>

        <Button size="small" color="primary">
          <SolutionModal/>
        </Button>
      </CardActions>
      <AceEditor />
    </Card>
  );
}
