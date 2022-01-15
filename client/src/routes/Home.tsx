import { useRef, useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import axiosInstance from '../axios'
import { AxiosResponse } from 'axios'
import Video, { ItemType } from '../components/Video'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    axiosInstance(`/videos/`)
      .then((res: AxiosResponse) => {
        setData(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <Grid container>
      {data.map((item: ItemType) => (
        <Grid item xs={12} key={item.id}>
          <Video item={item} />
        </Grid>
      ))}
    </Grid>
  )
}
