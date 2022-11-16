<template>
  <svg>
    <use :href="href"></use>
  </svg>
</template>

<script>
export default {
  name: 'WIcon',
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.href);
  },
}
</script>
