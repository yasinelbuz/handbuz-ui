/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryFn } from "@storybook/react";
import Input from "./";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "outlined", "filled"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn<any> = (args: any) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "medium",
  placeholder: "Enter text...",
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  size: "medium",
  placeholder: "Enter text...",
  disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
  size: "medium",
  placeholder: "Enter text...",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "default",
  size: "medium",
  placeholder: "Enter text...",
  disabled: true,
};
