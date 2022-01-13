import React, { useContext, useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../constants'
import { AxiosResponse } from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth.contexts'
import axiosInstance from '../axios'
import axios from 'axios'
import { ENDPOINT } from '../constants'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { SelectChangeEvent } from '@mui/material'

interface ICountry {
  country: string
  code: string
}

export default function SignIn() {
  const navigate = useNavigate()
  const { setAuthenticated, authenticated } = useContext(AuthContext)
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState('')

  useEffect(() => {
    axios(`${ENDPOINT}/users/countries/`).then((res: AxiosResponse) => {
      setCountries(res.data)
    })
  }, [])
  const handleChangeCountry = (event: SelectChangeEvent<unknown>) => {
    setCountry(event.target.value as string)
  }
  const handleChangeGender = (event: SelectChangeEvent<unknown>) => {
    setGender(event.target.value as string)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email: string = data.get('email') as string
    const username: string = data.get('username') as string
    const password: string = data.get('password') as string

    const payload = {
      email: email,
      username: username,
      gender: gender,
      country: country,
      password: password,
    }
    axios
      .post(`${ENDPOINT}/users/register/`, payload)
      .then(() => {
        navigate(`/login`)
      })
      .catch((err) => console.error(err))
  }

  if (authenticated) return <Navigate to="/" />

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            value={gender}
            fullWidth
            onChange={(e) => handleChangeGender(e)}
          >
            <MenuItem value="Male" key="M">
              Male
            </MenuItem>
            <MenuItem value="Female" key="F">
              Female
            </MenuItem>
          </Select>
          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={country}
            fullWidth
            onChange={(e) => handleChangeCountry(e)}
          >
            {countries.map((country: ICountry) => (
              <MenuItem value={country.country} key={country.code}>
                {country.country}
              </MenuItem>
            ))}
          </Select>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Join
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
