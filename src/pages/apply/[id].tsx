import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import { Apply as _Apply } from "@/components/apply";

function Apply() {
  return (
    <Box component="div">
      <_Apply />
    </Box>
  );
}

export default withPageAuthRequired(Apply);
