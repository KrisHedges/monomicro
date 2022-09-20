import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Listitem } from './listitem';

export default {
  component: Listitem,
  title: 'Listitem',
} as ComponentMeta<typeof Listitem>;

const Template: ComponentStory<typeof Listitem> = (args) => (
  <Listitem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Text"
};
