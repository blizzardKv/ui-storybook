import WButton from '@tradesoft/war-ui/components/WButton';
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Client/WButton',
  component: WButton,
  decorators: [withDesign],
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: {
      type: String,
      required: false,
    },
    rounded: {
      type: Boolean,
      defaultValue: true,
    },
    href: {
      type: [String, undefined],
    },
    onClick: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { WButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<WButton v-bind="args">{{ args.title }}</WButton>',
});

export const Accent = Template.bind({});

Accent.args = {
  title: 'Кнопка',
};

Accent.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/fgxDffGJVeDofPisFr1vUe/02.-Library---BAP-Default?node-id=13713%3A120583",
  }
};

export const Secondary = Template.bind({});
export const Large = Template.bind({});
export const Small = Template.bind({});

Secondary.args = {
  title: 'test',
  secondary: true,
};

Secondary.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/fgxDffGJVeDofPisFr1vUe/02.-Library---BAP-Default?node-id=13713%3A120583",
  }
};

Large.args = {
  size: 'large',
  label: 'Button',
};

Small.args = {
  size: 'small',
  label: 'Button',
};
