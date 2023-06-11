import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar, Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Navigation() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.addEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className={scrolled ? "scrolled" : "navbar"}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Link to="/">
            <Button
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/news_presentation">
            <Button
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              News
            </Button>
          </Link>
          <Link to="">
            <Button
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Gallery
            </Button>
          </Link>
        </Box>

        

      </Toolbar>
    </div>
  );
}
