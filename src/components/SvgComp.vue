<template>
  <div>
    <slot></slot>
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
