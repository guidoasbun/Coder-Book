import React, { Component } from 'react';
import Axios from 'axios';
import { PostingRoutes } from '../../../../routes/postingRoutes';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typograpghy from '@material-ui/core/Typography';

class DisplayPosts extends Component { 

  styles = {
    card: {
      display: 'flex',
      marginBottom: 30,
    },
    entry: {
      padding: 25,
      objectFit: 'cover'
    }
  }

  state = {
    screams: []
  }

  componentDidMount() {
    Axios.get(PostingRoutes)
      .then(({ data: { Posting } }) => {
        this.setState({ screams: Posting })
      })
      .catch(err => console.log(err));
  }

  render() {
        const { classes, screams : { entry, dateEntryCreated, owner, entryTitle } } = this.props
    return(
      <>
        <ul>
          {
            <Card className={classes.card}>
                <CardMedia
                //image={userImage}
                title={classes.entryTitle} className={classes.owner} />
                <CardContent class={classes.entry}>
                    <Typograpghy variant="h5">{classes.owner}</Typograpghy> 
                    <Typography variant='body2' color="textSecondary">{classes.dateEntryCreated}</Typography>
                    <Typograpghy variant='body1'>{classes.entry}</Typograpghy>
                </CardContent>
            </Card>
          }
        </ul>
      </>
    )
  }
}

export default withStyles(styles)(DisplayPosts);




// UNUSED CODE

 // updatePost () {
  //   Axios.put(PostingRoutes)
  //     .then(({ data: { dateEntryCreated } }) => {
  //       this.setState({ recent: dateEntryCreated })
  //     .catch(err => console.log(err));
  //     })
  // }

  //USING REACT FRAGMENT
  // render () {
  //   return (
  //     <React.Fragment>
  //       <CssBaseline />
  //         this.state.recent.map((Date, Date.now) => (
  //           <p key={Date.now}>{Date.now} ago</p>)
  //     </React.Fragment>
  //   )
  // }

  //USING GRID
//   render () {
//     let recentScreamsMarkeup = this.state.screams ? (
//     this.state.screams.map(scream => <Scream scream={scream}>)
//     ) : <p>Loading...</p>
//     return (
//       <Grid container spacing={16}>
//         <Grid item sm={8} xs={12}>
//           {recentScreamsMarkeup}
//         </Grid>
//         <Grid item sm={4} xs={12}>
//           <p>Profile</p>
//         </Grid>
//       </Grid>
//     )
//   }
// }