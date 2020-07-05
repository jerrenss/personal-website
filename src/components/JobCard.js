import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Typography, Button, Modal } from '@material-ui/core'
import { FONTS, PALETTE } from '../utils/const'
import PropTypes from 'prop-types'

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
    marginTop: theme.spacing(2),
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  button: {
    padding: theme.spacing(1, 0),
    marginTop: theme.spacing(2),
    borderRadius: 20,
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(16),
  },
  paper: {
    width: 600,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {
      width: 330,
    },
  },
}))

const JobCard = (props) => {
  JobCard.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    role: PropTypes.string,
  }
  const { image, alt, role } = props
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box className={classes.root}>
      <img src={image} alt={alt} />
      <Typography className={classes.roleText}>{role}</Typography>
      <Button
        variant="contained"
        fullWidth
        className={classes.button}
        onClick={handleOpen}
      >
        Job Description
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.paper}>
          <Typography>Job Description</Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default JobCard
