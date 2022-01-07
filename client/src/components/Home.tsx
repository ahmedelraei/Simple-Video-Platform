import { useRef, useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import './styles/Home.css'
import axiosInstance from '../axios'
import { AxiosResponse } from 'axios'
import Video, { ItemType } from './Video'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../constants'

export default function Home() {
  const [playing, setPlaying] = useState(false)
  const [data, setData] = useState([])
  const videoRef = useRef<HTMLVideoElement>(null)
  const onPressVideo = () => {
    if (playing) {
      videoRef.current && videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current && videoRef.current.play()
      setPlaying(true)
    }
  }
  useEffect(() => {
    axiosInstance(`/videos/`)
      .then((res: AxiosResponse) => {
        setData(res.data)
      })
      .catch((err) => console.error(err))
  }, [])
  console.log(data)

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        {data.map((item: ItemType) => (
          <Grid item xs={12} key={item.id}>
            <Video item={item} />
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  )
}
