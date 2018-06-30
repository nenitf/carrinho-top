<template lang="html">

  <div class="box box-color columns is-mobile">
    <div class="column">

      <div class="columns is-mobile">
        <div class="column">
          <input type="text" class='input' v-model='produto.nome' @change='muda'>
        </div>
        <div class="column is-one-third has-text-centered">
          <button type="button" class="button is-danger" @click='apaga'><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>

      <div class="columns is-gapless is-mobile">

        <div class="column">
          <input type="number" class='input' v-model='produto.preco' @change='muda' disabled>
        </div>
      <div class="column">
        <input type="number" class='input' v-model='produto.qtd' @change='muda' disabled>
      </div>
    <div class="column">
      <input type="number" class='input' v-model='produto.precoTotal' @change='muda' disabled>
    </div>

  </div>
</div>

</div>
</template>

<script>
export default {
  props:['produto'],
  data () {
    return {
    }
  },
  methods:{
    apaga(){
      this.$emit('apaga');
    },
    muda(){
      this.$emit('muda', this.produto);
    },
  },
  created(){
    // this.nome = this.produto.nome;
    // this.preco = this.produto.preco;
    // this.qtd = this.produto.qtd;
    // this.precoTotal = this.produto.precoTotal;
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
.box-color{
  background-color: rgba(255,255,255,0.7);
}
</style>
