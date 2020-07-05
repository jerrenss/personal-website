/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {
  Box,
  Typography,
  Grid,
  Container,
  List,
  ListItemText,
} from '@material-ui/core'
import { PALETTE, FONTS } from '../../utils/const'
import { MOCK_ABOUT } from './Mocks'
import FaceIcon from '@material-ui/icons/Face'
import SchoolIcon from '@material-ui/icons/School'
import ComputerIcon from '@material-ui/icons/Computer'
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
    padding: theme.spacing(10, 0),
    backgroundColor: PALETTE.background.primary,
    '& .MuiTypography-root': {
      ...defaultText,
    },
    '& .MuiTypography-body1': {
      fontSize: theme.typography.pxToRem(14),
    },
  },
  gridWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  knowledgePanel: {
    '& .MuiGrid-item:first-child': {
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
    },
  },
  textWrapper: {
    border: 'solid',
    borderWidth: 'thin',
    height: 'fit-content',
    padding: theme.spacing(4, 6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
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
}))

const About = (props) => {
  const classes = useStyles()
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  })

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Grid container className={classes.gridWrapper}>
          <Grid item xs={12} sm={6} className={classes.textWrapper} data-aos="fade-left">
            <Box className={classes.title}>
              <FaceIcon />
              <Typography variant="h5">About Myself</Typography>
            </Box>
            <Typography>{MOCK_ABOUT.firstPara}</Typography>
            <br />
            <Typography>{MOCK_ABOUT.secondPara}</Typography>
          </Grid>
          <Grid item container xs={12} sm={4} className={classes.knowledgePanel} data-aos="fade-left">
            <Grid item xs={12} className={classes.textWrapper}>
              <Box className={classes.title}>
                <SchoolIcon />
                <Typography variant="h5">Education</Typography>
              </Box>
              <List>
                {MOCK_ABOUT.education.map((school) => (
                  <ListItemText>{school}</ListItemText>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} className={classes.textWrapper}>
              <Box className={classes.title}>
                <ComputerIcon />
                <Typography variant="h5">Proficiencies</Typography>
              </Box>
              <List>
                {MOCK_ABOUT.proficiencies.map((skill) => (
                  <ListItemText>{skill}</ListItemText>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
