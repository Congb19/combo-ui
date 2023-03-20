<script setup>
import { ref } from 'vue-demi'
import { CInput } from '../../src'
import InputExample from './input-example.vue'
const value = ref('test')
</script>

# Input 输入框

<!-- <input-example></input-example> -->

<div>
  <CInput v-model:value="value" />
  <div>{{ value }}</div>
</div>
