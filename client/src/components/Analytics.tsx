import {
  Grid,
  Card,
  Container,
  CardContent,
  Box,
  CssBaseline,
} from '@mui/material'

import { useState, useEffect } from 'react'
import axiosInstance from '../axios'
import { AxiosResponse } from 'axios'
import { ItemType } from './Video'
import { theme } from '../constants'
import { ThemeProvider } from '@mui/material/styles'

export default function Analytics() {
  const [data, setData] = useState([])
  useEffect(() => {
    axiosInstance(`/videos/`)
      .then((res: AxiosResponse) => {
        setData(res.data)
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg" sx={{ p: 5 }}>
        <CssBaseline />
        <Grid
          container
          sx={{ pb: 5 }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <h1>Dashboard</h1>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {data.map((item: ItemType) => (
            <Grid item xs={3}>
              <Card variant="outlined">
                <CardContent>
                  <h1>{item.title}</h1>
                  <h3>{item.views} views</h3>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
