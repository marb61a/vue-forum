<template>
  <div v-if="asyncDataStatus_ready" class="col-full">
    {{category.name}}
    <CategoryListItem :category="category"/>
  </div>
</template>

<script>
import CategoryListItem from '@/components/CategoryListItem'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  components: {
    CategoryListItem
  },
  mixins: [asyncDataStatus],
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {

    }
  },
  methods: {

  },
  created () {

  }
}
</script>

<style scoped>

</style>
