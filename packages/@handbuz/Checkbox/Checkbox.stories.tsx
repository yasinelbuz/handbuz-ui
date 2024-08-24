/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryFn } from "@storybook/react";
import Checkbox from "./";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: "Default Checkbox",
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "Checked Checkbox",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  label: "Disabled Checkbox",
  disabled: true,
};
