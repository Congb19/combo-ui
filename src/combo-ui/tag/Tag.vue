<script lang="ts">
export default {
  name: 'CTag',
};
</script>
<script setup lang="ts">
import { PropType } from 'vue';
const emit = defineEmits(['c_click', 'c_mouseover', 'c_close']);
const props = defineProps({
  size: {
    type: String as PropType<'s' | 'm' | 'l'>,
    default: 'm',
  },
  color: {
    type: String,
    default: '#aa0000',
  },
  round: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<
      'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
    >,
    default: 'default',
  },
  closable: {
    type: Boolean,
    default: false,
  },
});
const resolveType = (type: string) => {
  switch (type) {
    case 'primary':
      return {
        __backgroundColor: 'pink',
        __borderColor: 'red',
        __fontColor: 'red',
      };
      break;
    case 'info':
      return {
        __backgroundColor: 'pink',
        __borderColor: 'blue',
        __fontColor: 'blue',
      };
      break;
    case 'success':
      return {
        __backgroundColor: 'pink',
        __borderColor: 'green',
        __fontColor: 'green',
      };
      break;
    case 'warning':
      return {
        __backgroundColor: 'yellow',
        __borderColor: 'orange',
        __fontColor: 'orange',
      };
      break;
    case 'error':
      return {
        __backgroundColor: 'pink',
        __borderColor: 'red',
        __fontColor: 'red',
      };
      break;
    default:
      return {
        __backgroundColor: '#eee',
        __borderColor: '#aaa',
        __fontColor: '#aaa',
      };
      break;
  }
};
const resolveSize = (size: string) => {
  switch (size) {
    case 's':
      return {
        __height: 22,
        __fontSize: 12,
      };
    case 'm':
      return {
        __height: 28,
        __fontSize: 14,
      };
    case 'l':
      return {
        __height: 34,
        __fontSize: 14,
      };
    default:
      return {
        __height: 28,
        __fontSize: 14,
      };
  }
};
const events = {
  c_click: () => {
    emit('c_click');
  },
  c_mouseover: () => {
    emit('c_mouseover');
  },
  c_close: (e: Event) => {
    emit('c_close');
    e.stopPropagation();
  },
};
const styleVars = {
  __height: resolveSize(props.size).__height,
  __fontSize: resolveSize(props.size).__fontSize,
  __backgroundColor: resolveType(props.type).__backgroundColor,
  __borderColor: resolveType(props.type).__borderColor,
  __fontColor: resolveType(props.type).__fontColor,
};
const style = {
  padding: `
    ${(styleVars.__height - styleVars.__fontSize) / 2}px 
    ${props.round ? styleVars.__height / 2 : 7}px
  `,
  fontSize: `${styleVars.__fontSize}px`,
  lineHeight: `${styleVars.__fontSize}px`,
  height: `${styleVars.__height}px`,
};
const styleBorder = {
  border: `1px ${styleVars.__borderColor} solid`,
  borderRadius: `${props.round ? styleVars.__height / 2 : 2}px`,
  zIndex: -1,
  backgroundColor: styleVars.__backgroundColor,
};
console.log(style);
</script>

<template>
  <div
    class="c-tag"
    :style="style"
    @click="events.c_click"
    @mouseover="events.c_mouseover"
  >
    <slot>标签</slot>
    <span class="c-tag__close" v-if="closable" @click="events.c_close"> ×</span>
    <div class="c-tag__border" :style="styleBorder"></div>
  </div>
</template>

<style scoped>
.c-tag {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
}
.c-tag:hover {
  cursor: default;
}
.c-tag__close {
  cursor: pointer;
}
.c-tag__border {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
