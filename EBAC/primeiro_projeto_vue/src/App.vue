<script setup>
  import { reactive } from 'vue';
  import { ref } from 'vue'

  const selected = ref('')


  const estado = reactive({
    valor1: 0,
    valor2: 0,
    resultado: null,
  })
  function inputValor1(evento){
    estado.valor1 = evento.target.value;
  }
  function inputValor2(evento){
    estado.valor2 = evento.target.value;
  }
  function realizaOperacao(){
    let { valor1, valor2 } = estado;
    
    if(selected.value === 'Média aritmética'){
      estado.resultado = (Number(valor1) + Number(valor2))/2;
    }
    if(selected.value === 'Soma'){
      estado.resultado = (Number(valor1) + Number(valor2));
    }
    if(selected.value === 'Subtração'){
      estado.resultado = (Number(valor1) - Number(valor2));
    }
  }
</script>

<template>
  <div class="content">
    <header>
      <h1>Calculadora</h1>
    </header>
    <main>
      <label> 
        Valor 1:
        <input type="number" @keyup="inputValor1">
      </label>
      <label> 
        Valor 2:
        <input type="number" @keyup="inputValor2">
      </label>
      <div>Selected: {{ selected }}</div>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>Média aritmética</option>
        <option>Soma</option>
        <option>Subtração</option>
      </select>
      {{ realizaOperacao() }}
    </main>
    <footer>
      <h2>Resultado: {{ estado.resultado }}</h2>
    </footer>
  </div>
</template>

<style scoped>
  .content{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
  label{
    width: 100%;
    display: flex;
    flex-flow: column;
    margin-bottom: 10px;
  }
  input{
    padding: 5px;
  }
  select{
    width: 100%;
    margin-top: 10px;
    padding: 5px;
  }
</style>
