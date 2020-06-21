/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Grid, Container } from '@material-ui/core'
import { PALETTE } from '../../utils/const'
import JobCard from '../../components/JobCard'
import { MOCK_EXPERIENCES } from './Mocks'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PALETTE.background.secondary,
  },
  arrows: {
    fontSize: theme.typography.pxToRem(70),
    color: PALETTE.text.primary,
  },
}))

const Experience = (props) => {
  const classes = useStyles()

  const GALLERY = MOCK_EXPERIENCES.map((experience) => (
    <Grid item xs={4}>
      <JobCard
        image={experience.image}
        alt={experience.alt}
        role={experience.role}
      />
    </Grid>
  ))

  const swiperParams = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 0,
    slidesPerView: 'auto',
    renderPrevButton: () => (
      <ArrowLeftIcon
        fontSize="large"
        className={clsx(classes.arrows, 'swiper-button-prev')}
      />
    ),
    renderNextButton: () => (
      <ArrowRightIcon
        fontSize="large"
        className={clsx(classes.arrows, 'swiper-button-next')}
      />
    ),
  }

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          <Swiper {...swiperParams}>{GALLERY}</Swiper>
        </Grid>
      </Container>
    </Box>
  )
}

export default Experience
