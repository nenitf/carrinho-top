<template lang="html">
  <div class="notification is-info">
    <h1 class="title is-5">Carrinho Top 🛒 🔝</h1>
    <h1 class="title is-5">Total de <span class="has-text-black-ter">R$ {{precoTotal}}</span></h1>
  </div>

</template>

<script>
export default {
  props:['produtos','precoTotal'],
  data () {
    return {
    }
  },
  methods:{
    calculaPreco(){
    },
  }
}
</script>

<style lang="css">
</style>
