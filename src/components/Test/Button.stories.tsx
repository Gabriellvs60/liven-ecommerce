// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@mui/material/Button';


export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button>Button</Button>;