import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AccountCircle, Favorite, Home } from "@mui/icons-material";
import { Grid2 } from "@mui/material";

const drawerWidth = 240;
const list = [
  { text: "Início", icon: <Home /> },
  { text: "Favoritos", icon: <Favorite /> },
  { text: "Conectar", icon: <AccountCircle /> },
];
export function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            mt: 11,
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {list.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "black" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid2 container spacing={2}>
          {/* map stats */}
          <Grid2 key={""} size={3}>
            <Box>stats</Box>
          </Grid2>
          {/* map habil. */}
          <Grid2 size={3}>
            <Box>habilidades</Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
