<template>
  <modal-factory/>
  <router-view/>
</template>

<script>
import ModalFactory from './components/ModalFactory/modal_index.vue'

export default {
  components: { ModalFactory }
}
</script>
