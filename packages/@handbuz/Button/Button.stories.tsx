import { Meta, StoryObj } from "@storybook/react";
import { Button, Props as ButtonProps } from "./";

// Storybook'un meta bilgilerini tanımlar.
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "danger"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    fullWidth: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    children: {
      type: "string",
    },
  },
} as Meta<typeof Button>;

export const Variant: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    children: "asdasd",
  },

  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Button {...args} variant="primary" size="medium">
        Primary
      </Button>
      <Button {...args} variant="secondary" size="medium">
        Secondary
      </Button>
      <Button {...args} variant="success" size="medium">
        Success
      </Button>
      <Button {...args} variant="danger" size="medium">
        Danger
      </Button>
    </div>
  ),
};

export const Size: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Button {...args} size="small">
        Primary
      </Button>
      <Button {...args} size="medium">
        Secondary
      </Button>
      <Button {...args} size="large">
        Success
      </Button>
    </div>
  ),
};
