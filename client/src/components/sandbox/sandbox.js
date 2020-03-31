// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';


// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
//       </Container>
//     </React.Fragment>
//   );
// }





import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chuckticker from '../chuckticker';
import Avatar from '@material-ui/core/Avatar';
import NewsArea from '../NewsArea';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100vh',
    backgroundColor: "#3f51b5"

  },
  userBio: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '30vh',
    backgroundColor: '#3f51b5',
    color: 'white'
  },
  mainFeed: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100vh',
    backgroundColor: "#3f51b5"
  },
  newsFeed: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '66.8vh',
    backgroundColor: '#3f51b5',
    marginTop: '8px'
  }
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Paper className={classes.userBio}>
            <Avatar alt="Remy Sharp" src="/assets/images/cn.jpg" className={classes.large} />
            <img src="/assets/images/cn.jpg" id="user-photo" alt="user avatar" style={{ width: "70px", borderRadius: "10px" }} />
            <p id="username">Chuck Norris</p>
            
          </Paper>
          <Paper className={classes.newsFeed}>
            <NewsArea />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Paper className={classes.mainFeed}>
            <Chuckticker />
            <div id="posts"></div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

