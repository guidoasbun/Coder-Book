import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import PostingRoutes from '../../../../routes/postingRoutes';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const PostData = () => {

  const [data, setData] = useState([])
  const [postTitle, setPostTitle] = useState([])
  const [postEntry, setPostEntry] = useState([])
  const [postOwner, setPostOwner] = useState([])

  const fetchData = () => {
    const postAPI = 'api/postings/all'

    const getPost = axios.get(postAPI)
    console.log(getPost)
    axios.all([getPost]).then(
      axios.spread((...allData) => {
        const allDataTitle = allData[0].data[0].entryTitle
        const allDataEntry = allData[0].data[0].entry
        const allDataOwner = allData[0].data[0].owner

        setPostTitle(allDataTitle)
        setPostEntry(allDataEntry)
        setPostOwner(allDataOwner)
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])




  // useEffect(() => {
  //   axios.get("api/postings/all")
  //     .then(result => setData(result.data))

  //   console.log(data)
  // }, [])




  // const { classes, screams: { entry, dateEntryCreated, owner, entryTitle } } = this.props

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {postTitle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {postOwner}
        </Typography>
        <Typography variant="body2" component="p">
          {postEntry}
          <br />

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">comment</Button>
      </CardActions>
    </Card>
  );
}








// return (
//   <>
//     <ul>
//       <div>Subject: {postTitle}</div>
//       <div>Post: {postEntry}</div>
//       <div>Owner: {postOwner}</div>
//     </ul>
//   </>
// )
// }







export default PostData;




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