import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Card, Container, Typography, Paper } from '@material-ui/core'
import Text from '../Banner/Text'

const useStyles = makeStyles((theme) => ({
  root: {},
  banner: {
    height: '100vh',
    backgroundImage: `url('/home/banner.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '& .MuiBox-root': {
      marginBottom: theme.spacing(40),
    },
  },
  image: {
    width: '100%',
  },
}))

const Home = (props) => {
  const classes = useStyles()

  return (
    <Box>
      {/* Home Banner Section */}
      <Paper className={classes.banner}>
        <Text />
        {/* <img
          src="/home/banner.png"
          alt="Home Banner"
          className={classes.image}
        /> */}
      </Paper>
      <Container></Container>
    </Box>
  )
}

export default Home
