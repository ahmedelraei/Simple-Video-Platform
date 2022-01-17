import { useEffect, useState } from 'react'
import Dashboard from '../components/Dashboard'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import axiosInstance from '../axios'
import { ItemType } from '../components/Video'

export default function Analytics() {
  const [data, setData] = useState([])
  const [stats, setStats] = useState([])
  useEffect(() => {
    axiosInstance(
      `/videos/?owner__username=${localStorage.getItem('user')}&limit=10`
    ).then((res) => {
      setData(res.data.results)
    })
    axiosInstance(`/videos/analytics/`).then((res) => {
      setStats(res.data)
    })
  }, [])
  console.log(data, stats)
  return (
    <Dashboard>
      {data.map((item: ItemType) => (
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography component="h2" variant="h6" gutterBottom>
              {item.title}
            </Typography>
            <Typography
              component="h5"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Views: {item.views}
            </Typography>
            <Typography
              component="h5"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Likes: {item.views}
            </Typography>
            <Typography
              component="h5"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Dislikes: {item.views}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Dashboard>
  )
}
