import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Typography } from '@material-ui/core'
import { PALETTE, FONTS } from '../../utils/const'
import Typewriter from 'typewriter-effect'

const defaultText = {
  fontFamily: FONTS.montserrat,
  color: PALETTE.text.contrast,
}

const useStyles = makeStyles((theme) => ({
  greetingsText: {
    ...defaultText,
    fontWeight: 700,
  },
  nameText: {
    ...defaultText,
    fontWeight: 800,
    fontSize: theme.typography.pxToRem(54),
    textTransform: 'uppercase',
  },
  interestText: {
    ...defaultText,
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 500,
  },
}))

const Text = (props) => {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant="h6" className={classes.greetingsText}>
        Greetings, I'm
      </Typography>
      <Typography variant="h2" className={classes.nameText}>
        Gerren Seow
      </Typography>
      <Typewriter
        options={{
          wrapperClassName: classes.interestText,
          cursorClassName: classes.interestText,
          strings: ['A Web Development Enthusiast'],
          autoStart: true,
          loop: true,
        }}
      />
    </Box>
  )
}

export default Text
