import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "content-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function SwipeDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const Header = styled(AppBar)`
    background: #fff;
    height: 65px;
    box-shadow: inset 0 -1px 0 0;
    color: #000;
    font-size: 40px;
  `;

  const Heading = styled(Typography)`
    color: #000;
    font-size: 25px;
    margin-left: 20px;
  `;

  const handleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg";

  const navList = [
    { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon />, route: '/' },
    { id: 2, name: "Reminder", icon: <NotificationsNoneOutlinedIcon />, route: '/reminder' },
    { id: 3, name: "Edit labels", icon: <EditOutlinedIcon />, route: '/editLabel' },
    { id: 4, name: "Archive", icon: <ArchiveOutlinedIcon />, route: '/archive' },
    { id: 5, name: "Trash", icon: <DeleteOutlineOutlinedIcon />, route: '/trash' },
  ];
  
  return (
    <Box>
      <Header>
        <Toolbar>
          <IconButton onClick={handleDrawer} edge="start" sx={{ marginRight: "20px" }}>
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" style={{ width: 25 }} />
          <Heading>Keep</Heading>
        </Toolbar>
      </Header>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {navList.map((list) => (
            <ListItem key={list.id}>
              <Link to={list.route} style={{textDecoration: 'none', display: 'flex', color: 'inherit', }}> 
              {/* // to is property for where routing */}
              <ListItemButton style= {{ padding: 2, borderRadius:'5px', marginLeft: '6px', width: "240px"}}>
                <ListItemIcon style= {{ alignItems: 'center'}}>{list.icon}</ListItemIcon>
                <ListItemText primary={list.name} />
              </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default SwipeDrawer;
