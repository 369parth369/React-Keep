// import * as React from "react";
// import { styled, useTheme} from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";


// // component
// // import NavList from "./NavList";
// // icons for drawer
// import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// // icon import
// // import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
// // import CssBaseline from "@mui/material/CssBaseline";
// // import Divider from "@mui/material/Divider";
// //components
// // import HeaderBar from './HeaderBar';
// // import NavList from './NavList';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

//  function SwipeDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const Header = styled(AppBar)`
//     background: #fff;
//     height: 65px;
//     box-shadow: inset 0 -1px 0 0;
//     color: #000;
//     font-size: 40px;
//   `;

//   const Heading = styled(Typography)`
  
//   color: #000;
//     font-size: 25px;
//     margin-left: 20px`;

  
//   const handleDrawer = () => {
//     setOpen((prevState) => !prevState); }
//   const logo = 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg';

//     const Item = () => {
//         const Item = [
//           {id:1, name: 'Notes', icon:<LightbulbOutlinedIcon />},
//           {id:2, name: 'Reminder', icon:<NotificationsNoneOutlinedIcon/>},
//           {id:3, name: 'Edit label', icon:<EditOutlinedIcon/>},
//           {id:4, name: 'Archive', icon:< ArchiveOutlinedIcon/>},
//           {id:5, name: 'Trash', icon:<DeleteOutlineOutlinedIcon />}
//         ]
//       }
//       return (

//     <Box>
//       <Header> 
//       {/* open={open} if you want drawer should keep open in header*/}
//         <Toolbar>
//           <IconButton
//             onClick={handleDrawer}
//             edge="start"
//             sx={{marginRight: "20px" }}>
//             <MenuIcon />
//           </IconButton>
//           <img src={logo} alt="logo" style={{width: 25 }}/>
//           <Heading>Keep</Heading>
//         </Toolbar>
//       </Header>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawer}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//        {/* <NavList /> */}
//        <List>
//       {
//       Item.map((list)   => (
//         <ListItem key={list.id}>
//           <ListItemButton>
//             <ListItemIcon>{list.icon}</ListItemIcon>
//             <ListItemText primary={list.name} />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//     </Drawer>
//     </Box>
//       )
// };




// export default SwipeDrawer