import { AbstractButton, AbstractTemplate } from './abstractComponents/WButton';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  ...AbstractButton,
  title: 'Client/WButton/L',
  argTypes: {
    large: {
      type: Boolean,
      defaultValue: true,
    }
  },
};

export const Accent = AbstractTemplate.bind({});

Accent.args = {
  title: 'Кнопка',
};

Accent.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/fgxDffGJVeDofPisFr1vUe/02.-Library---BAP-Default?node-id=13713%3A120583",
  }
};

export const Outline = AbstractTemplate.bind({});
Outline.args = {
  title: 'Кнопка',
  outlined: true,
}
