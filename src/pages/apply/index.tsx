import { Box } from "@mui/material";
import { ApplyLg } from "@/components/apply/lg";
import { ApplyMd } from "@/components/apply/md";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";

function Apply() {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT },
        }}
      >
        <ApplyLg />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <ApplyMd />
      </Box>
    </>
  );
}

export default Apply;
