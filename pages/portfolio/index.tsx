import { Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import * as React from 'react';

export interface IPortfolioProps {}

export default function Portfolio(props: IPortfolioProps) {
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        Portfolio
      </Typography>
    </Box>
  );
}
