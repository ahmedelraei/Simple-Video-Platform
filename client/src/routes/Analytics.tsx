import Dashboard from '../components/Dashboard'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Chart from '../components/Chart'

export default function Analytics() {
  return (
    <Dashboard>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
    </Dashboard>
  )
}
