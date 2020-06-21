import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Paper } from '@material-ui/core'
import Text from './Text'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
import Layout from '../../components/Layout'

const useStyles = makeStyles((theme) => ({
  root: {},
  banner: {
    height: '100vh',
    backgroundImage: `url('/Home/banner.png')`,
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
}))

const Home = (props) => {
  const classes = useStyles()

  return (
    <Layout>
      {/* Home Banner Section */}
      <Paper className={classes.banner}>
        <Text />
      </Paper>
      {/* Home About Section */}
      <About />
      {/* Home Experience Section */}
      <Experience />
      {/* Home Contact Section */}
      <Contact />
    </Layout>
  )
}

export default Home
