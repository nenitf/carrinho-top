<template>
  <div id="app">
    <painel :produtos='produtos' :precoTotal='precoTotal'></painel>
    <itemNovo @novo='novo'></itemNovo>
    <item v-for='(produto, i) in produtos' :key='i' :produto='produto' @apaga='apaga(i)' @muda='muda(i)'></item>

<button type="button" class="button is-small is-warning" @click='mostraDados = !mostraDados'>mostrar dados</button>
<div v-show='mostraDados'>
  <input type="text" v-model='JSON.stringify(produtos)'>
  <pre>{{produtos}}</pre>
</div>

  </div>
</template>

<script>
import painel from './components/painel.vue';
import itemNovo from './components/itemNovo.vue';
import item from './components/item.vue';
export default {
  components: {
    'painel': painel,
    'itemNovo': itemNovo,
    'item': item
  },
  name: 'app',
  data () {
    return {
      mostraDados: false,
      produtos: [],
      precoTotal: 0
    }
  },
  methods:{
    novo(valor){
      this.produtos.push(valor);
      this.calculaPrecoTotal();
    },
    apaga(i){
      this.produtos.splice(i, 1);
      this.calculaPrecoTotal();
    },
    muda(produto, i){
      console.log(i);
      //this.produtos.splice(i, 1);
      this.calculaPrecoTotal();
    },
    calculaPrecoTotal(){
      this.precoTotal = 0;
      for (var i = 0; i < this.produtos.length; i++) {
        this.precoTotal += Number(this.produtos[i].precoTotal);
      }
    }
  }
}
</script>

<style>
</style>
