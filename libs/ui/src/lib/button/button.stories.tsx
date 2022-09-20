import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button
} as ComponentMeta<typeof Button>;

// Default Button
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {}
