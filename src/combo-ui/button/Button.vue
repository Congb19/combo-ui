<script lang="ts">
export default {
  name: 'CButton',
};
</script>
<script setup lang="ts">
import { PropType } from 'vue';
// props & events
// ------------------------------------------------------------------------------
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
    type: Number,
    default: 50,
  },
  type: {
    type: String as PropType<'r' | 'y' | 'b'>,
    default: 'b',
  },
});
const events = {
  c_click: () => {
    emit('c_click');
  },
};
// style
// ------------------------------------------------------------------------------
const resolveType = (type: string) => {
  switch (type) {
    case 'r':
      return {
        __backgroundColor: 'pink',
        __borderColor: 'red',
        __fontColor: 'red',
      };
    case 'y':
      return {
        __backgroundColor: 'pink',
        __borderColor: 'yellow',
        __fontColor: 'yellow',
      };
    // default b
    default:
      return {
        __backgroundColor: 'pink',
        __borderColor: 'blue',
        __fontColor: 'blue',
      };
  }
};
const resolveSize = (size: string) => {
  switch (size) {
    case 's':
      return {
        __height: 22,
        __fontSize: 12,
      };
    case 'l':
      return {
        __height: 34,
        __fontSize: 14,
      };
    // default m
    default:
      return {
        __height: 28,
        __fontSize: 14,
      };
  }
};
const styleVars = {
  __height: resolveSize(props.size).__height,
  __fontSize: resolveSize(props.size).__fontSize,
  __backgroundColor: resolveType(props.type).__backgroundColor,
  __borderColor: '#ccc',
  __fontColor: resolveType(props.type).__fontColor,
};
const style = {
  padding: `
    ${(styleVars.__height - styleVars.__fontSize) / 2}px 
    ${7}px
  `,
  fontSize: `${styleVars.__fontSize}px`,
  lineHeight: `${styleVars.__fontSize}px`,
  height: `${styleVars.__height}px`,
};
const styleBorder = {
  border: `3px ${styleVars.__borderColor} solid`,
  borderRadius: `${(props.round * styleVars.__height) / 200}px`,
  zIndex: -1,
  backgroundColor: styleVars.__backgroundColor,
};
</script>

<template>
  <div class="c-button" @click="events.c_click" :style="style">
    <slot>按钮</slot>
    <div class="c-button__border" :style="styleBorder"></div>
  </div>
</template>

<style scoped>
.c-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
}
.c-button:hover {
  cursor: pointer;
}
.c-button__border {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
