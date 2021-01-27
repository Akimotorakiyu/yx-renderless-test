<template>
  <ButtonCore :logic="run" >
    <template #default="{runner,status}">
      <button @click="runner" :disabled="status.pending">000</button>     
    </template>
  </ButtonCore>
  <ButtonCore :logic="run" >
    <template #default="{runner,status}">
      <plain-button :logic="runner" :status="status">111</plain-button>     
    </template>
  </ButtonCore>
   <ButtonCore :logic="run" >
    <plain-button >222</plain-button>  
  </ButtonCore>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonCore from './components/ButtonCore.vue'
import PlainButton from './components/PlainButton.vue'

export default defineComponent({
  name: 'App',
  components: {
    ButtonCore,
    PlainButton
  },
  setup(){
    function run() {
      return new Promise((reslove)=>{
        setTimeout(reslove,1000)
      })
    }
    return{
      run
    }
  }
})
</script>
