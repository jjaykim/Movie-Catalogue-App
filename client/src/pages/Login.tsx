import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

interface LoginProps {
  className?: string;
}

const UnstyledLogin: FunctionComponent<LoginProps> = ({ className }) => {
  return (
    <Box>
      <Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        aspernatur nam nulla necessitatibus magnam, exercitationem quia
        reiciendis enim! Distinctio error optio aliquid dignissimos ad eaque
        dolorem nobis itaque quaerat voluptatem.
      </Box>
    </Box>
  );
};

export const Login = withTheme(styled(UnstyledLogin)``);
