import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import { Link } from 'react-router-dom'

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/upload">
      <ListItemIcon>
        <FileUploadIcon />
      </ListItemIcon>
      <ListItemText primary="Upload video" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Videos Anaytics" />
    </ListItem>
  </div>
)
