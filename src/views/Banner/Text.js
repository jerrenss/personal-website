import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Container, Typography, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  defaultText: {
    fontFamily: 'Montserrat',
    color: 'white',
  },
}))

const Text = (props) => {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant="h6" className={classes.defaultText}>
        Greetings, I'm
      </Typography>
      <Typography variant="h2" className={classes.defaultText}>
        Gerren Seow
      </Typography>
      <Typography variant="h6" className={classes.defaultText}>
        A Web Development Enthusiast
      </Typography>
    </Box>
  )
}

export default Text
