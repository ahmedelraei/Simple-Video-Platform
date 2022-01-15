import Dashboard from '../components/Dashboard'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import UploadIcon from '@mui/icons-material/Upload'
import React, { useState } from 'react'
import axiosInstance from '../axios'
import { useNavigate } from 'react-router-dom'

type UploadState = {
  file: File | null
}

export default function Upload() {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState<UploadState>({ file: null })
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const title: string = data.get('title') as string
    const formData = new FormData()
    formData.append('title', title)
    formValues.file && formData.append('video', formValues.file)
    console.log(formData)
    axiosInstance
      .post(`/videos/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        navigate('/dashboard')
      })
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(() => ({
      file: event.target.files ? event.target.files[0] : null,
    }))
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
            component="form"
            onSubmit={handleSubmit}
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
            <Box sx={{ mt: 1 }}>
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
              <input
                accept="video/*"
                onChange={(e) => handleChange(e)}
                multiple
                type="file"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Upload
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Dashboard>
  )
}
