/* eslint-disable react/jsx-key */
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Grid, Container } from '@material-ui/core'
import { PALETTE } from '../../utils/const'
import JobCard from '../../components/JobCard'
import { MOCK_EXPERIENCES } from './Mocks'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PALETTE.background.secondary,
  },
}))

const Experience = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          {MOCK_EXPERIENCES.map((experience) => (
            <Grid item xs={4}>
              <JobCard
                image={experience.image}
                alt={experience.alt}
                role={experience.role}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Experience
