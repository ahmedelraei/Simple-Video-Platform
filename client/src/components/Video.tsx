import { useRef, useState, useEffect } from 'react'
import axiosInstance from '../axios'
import './styles/Video.css'

export type ItemType = {
  id: number
  owner: string
  views: number
  title: string
  updated_date: string
  upload_date: string
  video: string
}
/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function Video({ item }: any) {
  const [playing, setPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    //window.addEventListener('scroll', debounce(handleScroll, 200))
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const onPressVideo = () => {
    axiosInstance
      .post(`/videos/analytics/${item.id}`)
      .catch((err) => console.error(err))
    if (playing) {
      videoRef.current && videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current && videoRef.current.play()
      setPlaying(true)
    }
  }
  const handleScroll = () => {
    if (playing) {
      videoRef.current && videoRef.current.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onPressVideo}
        ref={videoRef}
        src={item.video}
      ></video>
    </div>
  )
}
