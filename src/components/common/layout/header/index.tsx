import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, Avatar, InputBase, Menu, MenuItem, styled as muiStyled, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { BREAK_POINT, LG_GLOBAL_NAVIGATION, MD_GLOBAL_NAVIGATION } from "@/constants";
import { GetUserDocument } from "@/lib/graphql/graphql";
import { removeObjectKey } from "@/util/remove-object-key";

export function LayoutHeader() {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const { user } = useUser();
  const { data: userData } = useQuery(GetUserDocument, {
    variables: {
      id: user?.sub,
    },
  });

  const toolbarRef = useRef(null);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const pages = [
    userData?.users[0].userName && userData?.users[0].userName,
    "お気に入り案件一覧",
    "応募済み案件一覧",
    "LOGOUT",
  ];
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const filteredQuery =
    inputValue !== ""
      ? {
          ...router.query,
          keyword: inputValue,
        }
      : { ...removeObjectKey(router.query, "keyword") };

  const handleCloseNavMenu = (target?: string) => {
    switch (target) {
      case "LOGOUT":
        router.push("/api/auth/logout");
        setAnchorElNav(null);
        break;
      case "お気に入り案件一覧":
        router.push("/user/favorite");
        setAnchorElNav(null);
        break;
      case "応募済み案件一覧":
        router.push("/user/apply");
        setAnchorElNav(null);
        break;
      default:
        setAnchorElNav(null);
    }
  };

  return (
    <CustomAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          ref={toolbarRef}
          sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" }, justifyContent: "space-between" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/works"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Logo src="images/Group-35.png" alt="ライオット" />
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" }, alignItems: "center" }}>
            <Box sx={{ flexGrow: 0, display: { xs: "block", md: "block" } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon
                    onClick={() => {
                      router.push({
                        pathname: "works/",
                        query: {
                          ...filteredQuery,
                        },
                      });
                    }}
                  />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="キーワード検索..."
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.code === "Enter") {
                      e.preventDefault();
                      router.push({
                        pathname: "works/",
                        query: {
                          ...filteredQuery,
                        },
                      });
                    }
                  }}
                />
              </Search>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "block", md: "block" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <Avatar alt={user?.email || ""} src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleCloseNavMenu()}
                sx={{
                  display: { xs: "block", md: "block" },
                }}
              >
                {pages.map((page, idx) => (
                  <MenuItem
                    key={idx}
                    onClick={() => {
                      if (page) {
                        handleCloseNavMenu(page);
                      }
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
}

const Logo = styled.img`
  width: 68px;
  @media screen and (max-width: ${BREAK_POINT.md}px) {
    width: 52px;
  }
`;

const CustomAppBar = styled(AppBar)`
  height: ${MD_GLOBAL_NAVIGATION.HEADER}px;
  @media screen and (min-width: ${BREAK_POINT.md}px) {
    height: ${LG_GLOBAL_NAVIGATION.HEADER}px;
  }
`;

const Search = muiStyled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = muiStyled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
