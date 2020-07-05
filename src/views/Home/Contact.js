import React, { useEffect } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {
  Box,
  Grid,
  Container,
  Typography,
  IconButton,
  TextField,
  Button,
  Link,
} from '@material-ui/core'
import { FONTS, PALETTE } from '../../utils/const'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import PeopleIcon from '@material-ui/icons/People'
import AOS from 'aos'
import 'aos/dist/aos.css'

const defaultText = {
  fontFamily: FONTS.montserrat,
  color: PALETTE.text.primary,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(20, 10),
    backgroundColor: PALETTE.background.primary,
    '& .MuiTypography-root': {
      ...defaultText,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 0),
    },
  },
  personalDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
      color: PALETTE.text.primary,
      height: 30,
      width: 30,
    },
  },
  emailLabel: {
    fontWeight: 700,
  },
  linksWrapper: {
    padding: theme.spacing(1, 0),
    '& .MuiSvgIcon-root': {
      padding: theme.spacing(0.5),
      '&:hover': {
        borderRadius: 15,
        backgroundColor: PALETTE.background.secondary,
      },
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '& .MuiTypography-h5': {
      fontWeight: '600',
      marginLeft: theme.spacing(1),
    },
  },
  formWrapper: {
    padding: theme.spacing(8),
    border: 'solid',
    borderWidth: 'thin',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root': {
      marginTop: theme.spacing(2),
    },
  },
  messageField: {
    '& .MuiInputBase-input': {
      minHeight: 100,
    },
  },
  button: {
    marginTop: theme.spacing(2),
    borderRadius: 20,
    fontWeight: 600,
  },
}))

const Contact = (props) => {
  const classes = useStyles()
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  })

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container data-aos="fade-left">
          <Grid item xs={12} md={6} className={classes.personalDetailsWrapper}>
            <Typography className={classes.emailLabel}>Email:</Typography>
            <Typography>gerrenseow@gmail.com</Typography>
            <Box className={classes.linksWrapper}>
              <Link href="https://www.instagram.com/jerrens_/">
                <InstagramIcon />
              </Link>
              <Link href="https://www.linkedin.com/in/gerren-seow-675005167/">
                <LinkedInIcon />
              </Link>
              <Link href="https://github.com/jerrenss/">
                <GitHubIcon />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={classes.formWrapper}>
            <Box className={classes.title}>
              <PeopleIcon />
              <Typography variant="h5">Let's Connect</Typography>
            </Box>
            <Box className={classes.fields}>
              <TextField variant="filled" label="Name" />
              <TextField variant="filled" label="Email" />
              <TextField
                variant="filled"
                label="Message"
                multiline
                className={classes.messageField}
              />
            </Box>
            <Button variant="contained" className={classes.button}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact
