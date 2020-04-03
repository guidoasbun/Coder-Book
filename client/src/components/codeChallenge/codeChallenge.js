import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AceEditor from '../codeEditor';

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
            Sum of Minimums!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.
            <br />
            [
            [1, 2, 3, 4, 5],       // minimum value of row is 1
            <br />
            [5, 6, 7, 8, 9],       // minimum value of row is 5
            <br />
            [20, 21, 34, 56, 100]  // minimum value of row is 20
            ]
            <br />
            So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26
            <br />
            Note: You will be always given non-empty array containing Positive values.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Code
        </Button>
        <Button size="small" color="primary">
          Hint
        </Button>

      </CardActions>
      <AceEditor />
    </Card>
  );
}
