import WIcon from './WIcon.vue';

const iconsData = [
  { 'arrow-back': '0 0 24 24' },
  { 'arrow-back_corner': '0 0 24 24' },
  { 'arrow-back_long': '0 0 24 24' },
  { 'arrow-forward': '0 0 24 24' },
  { 'arrow-forward_corner': '0 0 24 24' },
  { 'arrow-forward_long': '0 0 24 24' },
  { availability: '0 0 24 24' },
  { car: '0 0 24 24' },
  { card: '0 0 24 24' },
  { cart: '0 0 24 24' },
  { cart_outline: '0 0 24 24' },
  { check: '0 0 13 11' },
  { 'checkbox-s': '0 0 16 16' },
  { 'close-s': '0 0 16 16' },
  { comment: '0 0 20 19' },
  { delete: '0 0 24 24' },
  { docs: '0 0 24 24' },
  { 'drop-down_corner': '0 0 16 16' },
  { 'drop-down_corner-outline': '0 0 24 24' },
  { 'drop-down_outline-big-s': '0 0 16 16' },
  { 'drop-down_outline-s': '0 0 16 16' },
  { 'drop-s': '0 0 16 16' },
  { 'drop-up_corner': '0 0 16 16' },
  { edit: '0 0 24 24' },
  { error: '0 0 20 20' },
  { faq: '0 0 20 20' },
  { filter: '0 0 24 24' },
  { flip: '0 0 24 24' },
  { info: '0 0 18 18' },
  { 'info-s': '0 0 16 16' },
  { know: '0 0 24 24' },
  { 'know-s': '0 0 16 16' },
  { 'like-off': '0 0 24 24' },
  { 'like-on': '0 0 24 24' },
  { list: '0 0 24 24' },
  { loader: '0 0 24 24' },
  { mail: '0 0 24 24' },
  { map: '0 0 24 24' },
  { menu: '0 0 24 24' },
  { minus: '0 0 8 3' },
  { 'no-visible-m': '0 0 24 24' },
  { 'notice-close': '0 0 8 8' },
  { 'notice-error-m': '0 0 18 18' },
  { 'official-dealer': '0 0 16 16' },
  { 'open-in-new-tab-m': '0 0 16 16' },
  { 'order-list': '0 0 24 24' },
  { 'orders-2': '0 0 24 24' },
  { 'photo-camera': '0 0 24 24' },
  { plus: '0 0 10 10' },
  { print: '0 0 24 24' },
  { refresh: '0 0 24 24' },
  { 'return-not': '0 0 16 16' },
  { 'return-unknown': '0 0 16 16' },
  { 'return-yes': '0 0 16 16' },
  { search: '0 0 24 24' },
  { 'search-diagram': '0 0 16 16' },
  { 'search-result-info': '0 0 16 16' },
  { 'setting-m': '0 0 24 24' },
  { 'sort-m': '0 0 24 24' },
  { spoiler: '0 0 16 16' },
  { success: '0 0 20 20' },
  { time: '0 0 24 24' },
  { 'toolbar-cart_outline': '0 0 20 20' },
  { 'toolbar-catalog': '0 0 20 20' },
  { 'toolbar-orders': '0 0 20 20' },
  { 'toolbar-search': '0 0 20 20' },
  { user: '0 0 24 24' },
  { 'user-fill': '0 0 24 24' },
  { 'vin-call': '0 0 20 19' },
  { 'visible-m': '0 0 24 24' },
  { warning: '0 0 22 19' }
]

export default {
  title: 'Client/Icons',
  components: WIcon,
  argTypes: {
    href: {
      type: String,
    },
    iconsData: {
      type: Array,
    }
  },
};

const Template = (args) => ({
  components: { WIcon },
  setup() {
    return { args };
  },
  template: '<div v-for="(item, key) in iconsData"><WIcon :href="`public/ui-kit.svg#${key}`"/></div>',
});

export const Icons = Template.bind({});

Icons.args = {
  iconsData,
}
