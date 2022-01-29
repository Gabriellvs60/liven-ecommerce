
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from './index';

export default {
  title: 'atoms/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Primary: ComponentStory<typeof Divider> = () => <Divider/>