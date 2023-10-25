import logo_header from "../assets/images/logo.png";

import icon_brow from "../assets/images/icon-brow.png";
import icon_note from "../assets/images/icon-note.png";
import icon_protect from "../assets/images/icon-protect.png";
import icon_search from "../assets/images/icon-search.png";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

export const Header = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  return (
    <>
      <Box className="main-header">
        <Box className="header-1">
          <Box className="header-content">
            <Box className="header-left">
              <Box className="header-logo">
                <img className="logo-header" src={logo_header} alt="" />
              </Box>
              <Box className="nav-header">
                <Box className="nav-item">
                  <Box className="nav-icon">
                    <img src={icon_brow} alt="" />
                  </Box>
                  <Box className="nav-text">Giới thiệu</Box>
                </Box>
                <Box className="nav-item">
                  <Box className="nav-icon">
                    <img src={icon_note} alt="" />
                  </Box>
                  <Box className="nav-text">Tin tức sự kiện</Box>
                </Box>
                <Box className="nav-item">
                  <Box className="nav-icon">
                    <img src={icon_protect} alt="" />
                  </Box>
                  <Box className="nav-text">Chất lượng sản phẩm</Box>
                </Box>
              </Box>
            </Box>
            <Box className="header-right">
              <Box className="search-box">
                <img className="search-icon" src={icon_search} alt="" />
                <input className="search-input" placeholder="Tìm kiếm" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="header-2">
          <Box className="header-content">
            <Box className="header-left">
              <Box className="header-menu">
                <Box className="menu-item">
                  <Typography
                    sx={{ margin: "10px" }}
                    onClick={(event) => setAnchorEl1(event.currentTarget)}
                    className="menu-main-item"
                  >
                    Sản phẩm
                  </Typography>
                  <Menu
                    anchorEl={anchorEl1}
                    id="basic-menu"
                    aria-haspopup="true"
                    aria-controls={anchorEl1 ? "basic-menu" : undefined}
                    aria-expanded={anchorEl1 ? "true" : undefined}
                    open={Boolean(anchorEl1)}
                    onClose={() => setAnchorEl1(null)}
                    MenuListProps={{
                      "aria-labelledby": "menu-main-item",
                    }}
                  >
                    <MenuItem>Lăng - Mộ đá</MenuItem>
                    <MenuItem>Mộ đá</MenuItem>
                    <MenuItem>Cột hàng rào đá</MenuItem>
                    <MenuItem>Tượng đá</MenuItem>
                    <MenuItem>Phụ kiện đá</MenuItem>
                    <MenuItem>Hòn non bộ</MenuItem>
                  </Menu>
                </Box>
                <Box className="menu-item">
                  <Typography
                    sx={{ margin: "10px" }}
                    onClick={(event) => setAnchorEl2(event.currentTarget)}
                    className="menu-main-item"
                  >
                    Hỗ trợ khách hàng
                  </Typography>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl2}
                    aria-controls={
                      Boolean(anchorEl2) ? "basic-menu" : undefined
                    }
                    aria-expanded={Boolean(anchorEl2) ? "true" : undefined}
                    open={Boolean(anchorEl2)}
                    onClose={() => setAnchorEl2(null)}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem>Thanh toán</MenuItem>
                    <MenuItem>Chính sách bảo hành</MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Box>
            <Box className="header-right">
              <Box className="free-right">Miễn phí tư vấn + Thiết kế</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
