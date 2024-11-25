<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './loading_index.vue'
export default {
  components: { Loading },
  props: {
    name: { type: String, required: true }
  }
}
</script>
