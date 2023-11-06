import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { AppliedLg } from "@/components/user/apply/lg";
import { AppliedMd } from "@/components/user/apply/md";
import { FavoriteLg } from "@/components/user/favorite/lg";
import { FavoriteMd } from "@/components/user/favorite/md";
import { BREAK_POINT, COMMON_Z_INDEX, LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { initializeApollo, addApolloState } from "@/lib/apollo/client";
import { COLOR } from "@/styles/colors";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const getServerSideProps = withPageAuthRequired({
  // @ts-ignore
  async getServerSideProps() {
    const client = initializeApollo({});
    const documentProps = addApolloState(client, {
      props: {},
    });
    return {
      props: documentProps.props,
    };
  },
});

function My() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <CustomBox
        sx={() => ({
          borderBottom: 1,
          borderColor: "divider",
          position: "sticky",
          background: `${COLOR.WHITE.code}`,
          zIndex: `${COMMON_Z_INDEX.TAB}`,
        })}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="お気に入り" {...a11yProps(0)} />
          <Tab label="応募済み" {...a11yProps(1)} />
        </Tabs>
      </CustomBox>
      <CustomTabPanel value={value} index={0}>
        <>
          <Box
            component="div"
            sx={{
              display: { ...LG_BREAK_POINT },
            }}
          >
            <FavoriteLg />
          </Box>
          <Box
            component="div"
            sx={{
              display: { ...MD_BREAK_POINT },
            }}
          >
            <FavoriteMd />
          </Box>
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <>
          <Box
            component="div"
            sx={{
              display: { ...LG_BREAK_POINT },
            }}
          >
            <AppliedLg />
          </Box>
          <Box
            component="div"
            sx={{
              display: { ...MD_BREAK_POINT },
            }}
          >
            <AppliedMd />
          </Box>
        </>
      </CustomTabPanel>
    </Box>
  );
}

const CustomBox = styled(Box)`
  top: 64px;
  @media (min-width: ${BREAK_POINT.sm}px) {
    top: 73px;
  }
`;

export default My;
