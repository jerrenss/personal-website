import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Typography, Button } from '@material-ui/core'
import { FONTS, PALETTE } from '../utils/const'

const defaultText = {
  fontFamily: FONTS.montserrat,
  color: PALETTE.text.primary,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(3, 6),
    '& .MuiTypography-root': {
      ...defaultText,
    },
    '& img': {
      height: 200,
      width: 200,
    },
  },
  roleText: {
    fontWeight: 600,
  },
  button: {
    padding: theme.spacing(1, 0),
    marginTop: theme.spacing(2),
    borderRadius: 20,
    fontWeight: 600,
    textTransform: 'capitalize',
  },
}))

const JobCard = (props) => {
  const { image, alt, role } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <img src={image} alt={alt} />
      <Typography className={classes.roleText}>{role}</Typography>
      <Button variant="contained" fullWidth className={classes.button}>
        Job Description
      </Button>
    </Box>
  )
}

export default JobCard
