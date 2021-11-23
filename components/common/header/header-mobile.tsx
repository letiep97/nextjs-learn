import { Box } from '@mui/system';
import * as React from 'react';

export interface IHeaderMobileProps {}

export default function HeaderMobile(props: IHeaderMobileProps) {
  return <Box display={{ sx: 'block', md: 'none' }}>Header Mobile</Box>;
}
