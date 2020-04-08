import React, { Component } from 'react'
// import React, { useEffect, useState } from 'react';
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





class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('api/postings/all')
      .then(({ data }) => {
        console.log(data)
        this.setState({ posts: data })
      })
      .catch(e => console.error(e))
  }


  render() {
    return (
      <>

        {
          this.state.posts.map(post => (
            <div>
              <Typography>
              <div style={{ border: '1px solid #505050 ', marginBottom: '25px', borderRadius: '5px', color: 'white', backgroundColor: '#505050', padding: '5px', boxShadow: '0px 10px 20px black' }}>
                <p>{post.entryTitle}</p>
                <hr style={{ borderTop: '1px solid #606060', borderBottom: '1px solid #606060'}}/>
                <p>{post.entry}</p>
                <br/>
                
              </div>
              </Typography>




            </div>
          ))
        }
      </>
    )
  }

}




export default App

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });


// const PostData = () => {

//   const [data, setData] = useState([])
//   const [postTitle, setPostTitle] = useState([])
//   const [postEntry, setPostEntry] = useState([])
//   const [postOwner, setPostOwner] = useState([])

//   const fetchData = () => {
//     const postAPI = 'api/postings/all'

//     const getPost = axios.get(postAPI)
//     console.log(getPost)
//     axios.all([getPost]).then(
//       axios.spread((...allData) => {
//         const allDataTitle = allData[0].data[3].entryTitle
//         const allDataEntry = allData[0].data[3].entry
//         const allDataOwner = allData[0].data[3].owner

//         setPostTitle(allDataTitle)
//         setPostEntry(allDataEntry)
//         setPostOwner(allDataOwner)
//       })
//     )
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])



//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography variant="h5" component="h2">
//           {postTitle}
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           {postOwner}
//         </Typography>
//         <Typography variant="body2" component="p">
//           {postEntry}
//           <br />

//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">comment</Button>
//       </CardActions>
//     </Card>
//   );
// }








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












