<style lang="scss" scope>

</style>
<template>
  <div class="book-detaile"></div>
</template>
<script>
export default {
  props: {
    books: Array
  },
  mounted () {
    console.log(this.books);
  }
};
</script>
