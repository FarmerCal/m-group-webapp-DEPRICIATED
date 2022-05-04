import React, { useState } from "react";
import {
  AppBar,
  Button,
  SvgIcon,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";

import Logo from "../assets/logo";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#000000" }}>
        <Toolbar>
          <Logo />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Marus Group
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Mission" />
                <Tab label="Tools" />
                <Tab label="Other" />
              </Tabs>
              <Button
                variant="outlined" href="https://maruslearn.com" target="_blank"
                sx={{ marginLeft: "auto", color: "#ffffff", borderColor: "#ffffff" }}>
                Learn
              </Button>
              <Button sx={{ marginLeft: "10px", color: "#ffffff", borderColor: "#ffffff" }} variant="outlined" href="https://marusbuild.com" target="_blank">
                Build
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
