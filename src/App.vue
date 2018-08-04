<template>
  <div id="app">
    <painel :produtos='produtos' :precoTotal='precoTotal'></painel>
    <itemNovo @novo='novo'></itemNovo>
    <p class="help has-text-black-ter">Clique duas vezes no item desejado para excluí-lo</p>
    <ul class="lista-produtos">
      <li v-for='(produto, i) in produtos' :key='i' @dblclick='apaga(i)'>{{produto.nome}}; <span class="valor-total has-text-black-ter">R$ {{produto.precoTotal}}</span></li>
    </ul>
  </div>
</template>

<script>
import painel from './components/painel.vue';
import itemNovo from './components/itemNovo.vue';
export default {
  components: {
    'painel': painel,
    'itemNovo': itemNovo
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
.lista-produtos{
  list-style: decimal !important;
}

.lista-produtos li {
  margin-top: 1rem;
  margin-left: 1rem !important;
  background-color: gray;
}

.valor-total{
  font-weight: bold;
}
</style>
