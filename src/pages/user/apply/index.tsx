import { Box } from "@mui/material";
import { AppliedLg } from "@/components/user/apply/lg";
import { AppliedMd } from "@/components/user/apply/md";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";

function UserApply() {
  return (
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
  );
}

export default UserApply;
