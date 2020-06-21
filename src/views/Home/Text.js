import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Typography } from '@material-ui/core'
import { PALETTE, FONTS } from '../../utils/const'

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
      <Typography variant="h6" className={classes.interestText}>
        A Web Development Enthusiast
      </Typography>
    </Box>
  )
}

export default Text
