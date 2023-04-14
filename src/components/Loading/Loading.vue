<template>
  <div class="c-loading">
    <div class="c-loading__icon">
      <CIcon>
        <ReloadSharp></ReloadSharp>
      </CIcon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CIcon } from '../'
import { watch } from 'vue-demi'
import { ReloadSharp } from '@vicons/ionicons5'
import './index.css'
// interface Props {
//   status: boolean
// }
// const props = withDefaults(defineProps<Props>(), {
//   status: false,
// })
</script>
