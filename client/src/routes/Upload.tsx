import Dashboard from '../components/Dashboard'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import UploadIcon from '@mui/icons-material/Upload'

export default function Upload() {
  const handleSubmit = () => {
    return 0
  }
  return (
    <Dashboard>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 550,
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <UploadIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Upload a video
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
              />
              <Typography component="p" sx={{ mt: 3, mb: 2 }}>
                Upload a video
              </Typography>
              <Button
                fullWidth
                variant="contained"
                component="label"
                sx={{ mt: 3, mb: 2 }}
              >
                Upload
                <input type="file" hidden />
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Dashboard>
  )
}
