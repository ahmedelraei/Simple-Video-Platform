import { useRef, useState } from 'react'
import { Grid } from '@mui/material'
import './styles/Home.css'

export default function Home() {
  const [playing, setPlaying] = useState(false)
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
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className="video">
          <video
            className="video__player"
            loop
            onClick={onPressVideo}
            ref={videoRef}
            src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
          ></video>
        </div>
      </Grid>
    </Grid>
  )
}
