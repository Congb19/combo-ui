import { defineComponent, ref, render } from 'vue';
const vnode = <button>tabbar</button>;
export default defineComponent({
  props: {
    size: {
      type: String,
    }
  },
  name: 'CTabBar',
  setup() {},
  render() {
    return <div>{vnode}</div>;
  },
});
