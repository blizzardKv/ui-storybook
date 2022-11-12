import WDatePicker from '@tradesoft/war-ui/components/WDatePicker.vue';

export default {
  title: 'Client/WDatePicker',
  component: WDatePicker,
  argTypes: {
    size: {
      type: String,
      defaultValue: 'md',
      required: false,
      validate: (value) => ['sm', 'md', 'lg'].includes(value),
    },
    stickX: {
      type: String,
      defaultValue: 'left',
      required: false,
      validate: (value) => ['left', 'right', 'center'].includes(value),
    },
    stickY: {
      type: String,
      defaultValue: 'bottom',
      required: false,
      validate: (value) => ['top', 'bottom'].includes(value),
    },
    format: {
      type: [String, Function],
    },
    value: {
      type: String,
      defaultValue: '',
    },
    translations: {
      type: Object,
    }
  }
}

const Template = (args) => ({
  components: { WDatePicker },
  setup() {
    return { args };
  },
  template: '<WDatePicker v-bind="args" />',
});

export const DatePicker = Template.bind({});

DatePicker.args = {
  translations:  {
    'language': 'ru',
    'months': ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    'monthsAbbr': ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    'days': ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    'yearSuffix': '',
  }
}
