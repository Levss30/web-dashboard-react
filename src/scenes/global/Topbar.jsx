import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationseOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-materialPersoneOutlined";
import SearchIcon from "@mui/icons-material/LightModeOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="Flex" justifyContent="space-between" p={2}>
          {/* SEARCH BAR */}
          <Box
          display="flex" 
          backgroundColor={colors.primary[400]} 
          borderRadius="3px"
          >
            <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
        {/* ICONS */}
      <Box display="flex">

      </Box>
    </Box>
  )
}

export default Topbar