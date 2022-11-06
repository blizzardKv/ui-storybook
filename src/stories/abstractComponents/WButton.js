import WButton from '@tradesoft/war-ui/components/WButton';
import { withDesign } from 'storybook-addon-designs';

export const AbstractButton = {
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
export const AbstractTemplate = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { WButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<WButton v-bind="args">{{ args.title }}</WButton>',
});
