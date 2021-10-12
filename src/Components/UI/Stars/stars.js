import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function BasicRating({ rate }) {
  return (
    <Stack
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="half-rating-read"
        defaultValue={rate}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
