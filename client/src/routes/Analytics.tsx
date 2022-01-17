import { useEffect, useState } from 'react'
import Dashboard from '../components/Dashboard'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import {
  BarChart,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Typography } from '@mui/material'
import axiosInstance from '../axios'

export default function Analytics() {
  const [data, setData] = useState([])
  const [stats, setStats] = useState([])
  useEffect(() => {
    axiosInstance(
      `/videos/?owner__username=${localStorage.getItem('user')}&limit=5`
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
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Last Five Videos
          </Typography>
          <ResponsiveContainer>
            <BarChart width={730} height={250} data={data}>
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="views" fill="#00FF7F" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Top Gender
          </Typography>

          <ResponsiveContainer>
            <PieChart width={730} height={250}>
              <Pie
                data={data}
                dataKey="views"
                nameKey="gender"
                outerRadius={50}
                fill="#fc0356"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Top Countries
          </Typography>

          <ResponsiveContainer>
            <BarChart width={730} height={250} data={data}>
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="views" fill="#03befc" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Most Liked videos in last month
          </Typography>

          <ResponsiveContainer>
            <BarChart width={730} height={250} data={data}>
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="views" fill="#fc9003" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Dashboard>
  )
}
