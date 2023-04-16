<template>
  <div>
    <h2>search</h2>
    <h3>params参数:{{ $route.params.keyworld }}</h3>
    <h3>query参数:{{ $route.query.keyworldQuery }}</h3>
    <h3>props参数keyworldQuery:{{ keyworldQuery }}</h3>
    <h3>props参数keyworld:{{ keyworld }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['keyworld', 'keyworldQuery'],
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped></style>
