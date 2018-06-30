<template lang="html">

  <div class="box columns is-mobile">
    <div class="column">

      <div class="columns is-mobile">
        <div class="column">
          <input type="text" class='input' v-model='nome'>
          <p class="help">nome produto</p>
        </div>
        <div class="column is-one-third has-text-centered">
          <button type="button" class="button is-success" @click='novo'><span class="icon-cart-plus"></span></button>
        </div>
      </div>


      <div class="columns is-gapless is-mobile">

        <div class="column">
          <input type="number" class='input' v-model='preco' @change='calculaPrecoTotal'>
          <p class="help">preço un R$</p>
        </div>
        <div class="column">
          <input type="number" class='input' v-model='qtd' @change='calculaPrecoTotal'>
          <p class="help">quantidade</p>
        </div>
        <div class="column">
          <input type="number" class='input' v-model='precoTotal' disabled>
          <p class="help">preço total R$</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      nome: null,
      preco: null,
      qtd: 1,
      precoTotal: null,
    }
  },
  methods:{
    novo(){
      let produto={
        nome: this.nome,
        preco: this.preco,
        qtd: this.qtd,
        precoTotal: this.precoTotal,
      };
      this.$emit('novo', produto);
      this.resetaCampos();
    },
    resetaCampos(){
      this.nome = null;
      this.preco = null;
      this.qtd = 1;
      this.precoTotal = null;
    },
    calculaPrecoTotal(){
      this.precoTotal = this.preco * this.qtd;
    }
  }
}
</script>

<style lang="css">
.column{
  padding: 0 .75rem !important;
}
.input{
  background-color: transparent;
  border-color: transparent;
  height: auto;
  padding: 0;
}
.box{
  padding: 1rem 0 .2rem;
  margin-bottom: 1.2rem !important;
}
.icon-cart-plus{
  font-size: 1.5rem;
}
</style>
