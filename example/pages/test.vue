<template>
  <CThemeProvider>
    <CLoadingProvider>
      <CMessageProvider>
        <div style="display: block">
          ------------------其他-------------------
          <br />
          主题：<CSwitch v-model:value="switchvalue2"></CSwitch>&nbsp;
          <CButton :type="typetest" clean @c_click="typeclick">
            prop change test
          </CButton>
          <input v-model="inputvalue2" />
          <CInput v-model:value="inputvalue2" />
          <CButton type="primary" clean @c_click="click111">
            debounce click
          </CButton>
          <CButton type="primary" clean @c_click="roll111">
            throttle click
          </CButton>
        </div>
        <div style="display: block">
          ------------------datepicker-------------------
          <br />
          {{ datevalue }}
          <CDatePicker v-model:value="datevalue"></CDatePicker>
        </div>
        <div style="display: block">
          ------------------loading-------------------
          <br />
          {{ CLoadingStatus }}
          <CButton @c_click="loading2">Loadingbar</CButton>
          <CButton @c_click="loadingbarstart">Loadingbar start</CButton>
          <CButton @c_click="loadingbarstop">Loadingbar stop</CButton>
          <CButton @c_click="goto(40)">goto40</CButton>
          <br />
          <CButton @c_click="loading">Loading</CButton>
          <CButton @c_click="loadingstart">Loading start</CButton>
          <CButton @c_click="loadingstop">Loading stop</CButton>
        </div>

        <div style="display: block">
          ------------------block-------------------
          <br />
          <CBlock content="default"></CBlock>
          <CBlock type="info" :content="blockcontent"></CBlock>
          <CBlock type="success" :content="blockcontent"></CBlock>
          <CBlock type="warning" :content="blockcontent"></CBlock>
          <CBlock type="error" :content="blockcontent"></CBlock>
          <CBlock type="info" detail :content="blockcontent"></CBlock>
          <br />
          展开收起
          <br />
          <CBlock
            type="success"
            detail
            :expanded="false"
            :content="blockcontent"
          ></CBlock>
          <CBlock
            type="info"
            title="customtitle"
            :content="blockcontent"
          ></CBlock>
          <br />
          指定宽度
          <br />
          <CBlock type="info" :content="blockcontent" :width="300"></CBlock>
        </div>

        <div style="display: block">
          ------------------select-------------------
          <br />
          {{ selectvalue }}
          <br />
          <CSelect v-model:value="selectvalue" :options="dict"></CSelect>
          <CSelect
            v-model:value="selectvalue2"
            :options="[]"
            @c_select="selectevent"
          ></CSelect>
          <CSelect
            v-model:value="selectvalue"
            :options="dict"
            placement="top"
          ></CSelect>
          <CSelect
            v-model:value="selectvalue"
            :options="dict"
            disabled
          ></CSelect>
          <CSelect
            v-model:value="selectvalue"
            :options="dict"
            :max-height="80"
          ></CSelect>
        </div>

        <div style="display: block">
          ------------------icon-------------------
          <br />
          <CIcon>
            <AmericanFootballSharp />
          </CIcon>
          <CIcon color="orange">
            <img src="./test.svg" />
          </CIcon>
          <CIcon color="orange" :size="30" background-color="blue"> 😂 </CIcon>
          <CIcon color="orange" :size="30" background-color="blue"> 喔 </CIcon>
        </div>
        <div style="display: block">
          ------------------checkbox-------------------
          <br />
          <br />
          {{ checkboxvalue }}
          <br />
          默认
          <br />
          <CCheckbox v-model:value="checkboxvalue"></CCheckbox>&nbsp;
          <CCheckbox v-model:value="checkboxvalue" disabled></CCheckbox>&nbsp;
          <!-- <br />
        颜色
        <br />
        <CCheckbox v-model:value="checkboxvalue" color="red"></CCheckbox>&nbsp;
        <CCheckbox v-model:value="checkboxvalue" color="green"></CCheckbox
        >&nbsp; -->
          <br />
          尺寸
          <br />
          <CCheckbox v-model:value="checkboxvalue" size="s"></CCheckbox>&nbsp;
          <CCheckbox v-model:value="checkboxvalue" size="m"></CCheckbox>&nbsp;
          <CCheckbox v-model:value="checkboxvalue" size="l"></CCheckbox>&nbsp;
          <br />
          自定义图标
          <br />
          <CCheckbox
            v-model:value="checkboxvalue"
            size="l"
            :icon="AmericanFootballSharp"
          ></CCheckbox
          >&nbsp;
          <CCheckbox
            v-model:value="checkboxvalue"
            size="l"
            icon="🏡"
          ></CCheckbox>
        </div>
        <div style="display: block">
          ------------------switch-------------------
          <br />
          <br />
          {{ switchvalue }}
          <br />
          默认
          <br />
          <CSwitch v-model:value="switchvalue"></CSwitch>&nbsp;
          <CSwitch v-model:value="switchvalue" disabled></CSwitch>&nbsp;
          <!-- <br />
        颜色
        <br />
        <CSwitch v-model:value="switchvalue" color="red"></CSwitch>&nbsp;
        <CSwitch v-model:value="switchvalue" color="grey"></CSwitch>&nbsp; -->
          <br />
          尺寸
          <br />
          <CSwitch v-model:value="switchvalue" size="s"></CSwitch>&nbsp;
          <CSwitch v-model:value="switchvalue" size="m"></CSwitch>&nbsp;
          <CSwitch v-model:value="switchvalue" size="l"></CSwitch>&nbsp;
          <br />
          自定义图标
          <br />
          <CSwitch v-model:value="switchvalue" :icon="FootballOutline"></CSwitch
          >&nbsp;
          <CSwitch v-model:value="switchvalue" size="l" icon="☀️"></CSwitch>
        </div>
        <div style="display: block">
          ---------------------message----------------------
          <br />
          <CButton type="success" clean @c_click="msgtest1"> msgtest1 </CButton>
          <CButton type="success" clean @c_click="msgtest2"> msgtest2 </CButton>
          <CButton type="success" clean @c_click="msgtest3"> msgtest3 </CButton>
        </div>
        <br />
        <div style="display: block">
          ---------------------button----------------------
          <br />
          default
          <CButton id="testbtn1" @c_click="clicktest">Btn 默认</CButton>
          <CButton clean @c_click="testbtn1click">Btn 默认</CButton>
          <br />
          size
          <CButton size="s">Btn s</CButton>
          <CButton size="m">Btn m</CButton>
          <CButton size="l">Btn l</CButton>
          <br />
          round
          <CButton round>Btn round</CButton>
          <br />
          type
          <CButton type="primary">Btn primary</CButton>
          <CButton type="success">Btn success</CButton>
          <CButton type="warning">Btn warning</CButton>
          <CButton type="error">Btn error</CButton>
          <br />
          clean=false
          <CButton type="primary" clean>primary clean</CButton>
          <CButton type="success" clean>success clean</CButton>
          <CButton type="warning" clean>warning clean</CButton>
          <CButton type="error" clean>error clean</CButton>
          <br />
          disabled
          <CButton disabled>Btn disabled</CButton>
          <CButton disabled clean>Btn disabled</CButton>
          <br />
          c_click
          <CButton @c_click="clicktest">Btn 事件</CButton>

          <br />
        </div>
        <div style="display: block">
          -------------------切换主题测试---------------------
          <br />
          <CButton clean type="success" @c_click="changeTheme('light')">
            to-light
          </CButton>
          <CButton @c_click="changeTheme('dark')">to-dark</CButton>
          <CButton clean type="success" @c_click="changeTheme2('light')">
            to-light
          </CButton>
          <CButton @c_click="changeTheme2('dark')">to-dark</CButton>
          <div
            style="
              color: var(--combo-test-color);
              transition: all 0.2s ease-out;
            "
          >
            {{ currentTheme }}
          </div>
        </div>
        <br />

        <div style="display: block">
          ------------------input-------------------
          <br />
          {{ inputvalue }}
          <br />
          <CInput v-model:value="inputvalue" />
          <CInput placeholder="input!" />
          <br />
          size
          <br />
          <CInput v-model:value="inputvalue" size="s" />
          <CInput v-model:value="inputvalue" size="m" />
          <CInput v-model:value="inputvalue" size="l" />
          <br />
          disabled
          <br />
          <CInput v-model:value="inputvalue" disabled />
          <br />
          password
          <br />
          <CInput v-model:value="inputvalue" type="password" />
          <br />
          textarea
          <br />
          <CInput v-model:value="inputvalue" type="textarea" />
          <br />
          maxlength
          <br />
          <CInput v-model:value="inputvalue" :max-length="12" />
          <CInput v-model:value="inputvalue" :max-length="12" type="textarea" />
          <br />
          event （c_focus, c_blur, c_change）
          <br />
          <CInput
            v-model:value="inputvalue"
            @c_focus="focustest"
            @c_blur="blurtest"
            @c_change="changetest"
          />
          <br />
        </div>
        <div style="display: block">
          ------------------tag-------------------
          <br />
          默认
          <CTag>123</CTag>
          <CTag type="primary">标签</CTag>
          <CTag type="success">123</CTag>
          <CTag type="warning">标签</CTag>
          <CTag type="error">123</CTag>
          <CTag clean>123</CTag>
          <CTag type="primary" clean>标签</CTag>
          <CTag type="success" clean>123</CTag>
          <CTag type="warning" clean>标签</CTag>
          <CTag type="error" clean>123</CTag>
          <br />
          尺寸
          <CTag type="primary" size="s">标签</CTag>
          <CTag type="success" size="m">标签</CTag>
          <CTag type="warning" size="l">标签</CTag>
          <CTag type="primary" size="s" clean>标签</CTag>
          <CTag type="success" size="m" clean>标签</CTag>
          <CTag type="warning" size="l" clean>标签</CTag>
          <br />
          round
          <CTag type="primary" size="s" round>round</CTag>
          <CTag type="success" size="m" round>round</CTag>
          <CTag type="warning" size="l" round>round</CTag>
          <CTag type="primary" size="s" round clean>标签</CTag>
          <CTag type="success" size="m" round clean>标签</CTag>
          <CTag type="warning" size="l" round clean>标签</CTag>
          <br />
          closable
          <CTag type="success" size="s" clean closable>close</CTag>
          <CTag type="success" size="m" clean closable>close</CTag>
          <CTag type="success" size="l" clean closable>close</CTag>
          <CTag type="success" size="s" clean closable round>close</CTag>
          <CTag type="success" size="m" clean closable round>close</CTag>
          <CTag type="success" size="l" clean closable round>close</CTag>
          <CTag type="success" size="m" closable>closable</CTag>
          <CTag type="success" size="m" closable clean @c_close="closetest"
            >closable</CTag
          >
          <CTag type="success" size="m" closable round>closable</CTag>
        </div>
        <br />
        <br />
        <br />
      </CMessageProvider>
    </CLoadingProvider>
  </CThemeProvider>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  // CBlock,
  // // CButton,
  // CTag,
  // CInput,
  // CSwitch,
  // CCheckbox,
  // CIcon,
  // CSelect,
  // CMessageProvider,
  // CThemeProvider,
  useMsg,
  useTheme,
  // CLoadingProvider,
  useLoading,
} from '../../src'
import { AmericanFootballSharp, FootballOutline } from '@vicons/ionicons5'
// import testSVG from './test.svg'
const msg = useMsg()
const { currentTheme, changeTheme } = useTheme()
const changeTheme2 = (theme: string) => {
  document.getElementsByTagName('html')[0].className = theme ? theme : ''
}

const clicktest = () => {
  console.log('click')
  alert('click')
  msg.error('test msg', 4000)
}
const mouseovertest = () => {
  console.log('mouseover')
}
const closetest = () => {
  console.log('close')
}
const inputvalue = ref('input测试')
const switchvalue = ref(true)
const switchvalue2 = ref(currentTheme.value == 'light' ? false : true)
watch(
  () => switchvalue2.value,
  (val) => {
    if (val) changeTheme('dark')
    else changeTheme('light')
  }
)
const checkboxvalue = ref(true)
const typetest: any = ref('warning')
const typeclick = () => {
  typetest.value = 'error'
}
const focustest = () => console.log('focus')
const blurtest = () => console.log('blur')
const changetest = () => console.log('change')

const msgtest1 = () => {
  msg.error('test msg', 4000)
}
const msgtest2 = () => {
  msg.error({
    msg: '222222222222',
    duration: 400000,
    position: 'right',
    closable: true,
  })
}
const msgtest3 = () => {
  msg.error({
    msg: '33333333333333333',
    duration: 400000,
    position: 'left',
    closable: true,
  })
}
// map响应测试
let a = { val: ref(1) }
let map = new Map([[1, a]])
let b = computed(() => {
  console.log('computed')
  let res = 100
  map.forEach((item, key) => {
    res += item.val.value
  })
  return res
})
console.log(b.value)
setTimeout(() => {
  a.val.value++
  console.log('effect', b.value)
}, 1000)

// prop 变化测试2
const inputvalue2 = ref('asd')
setTimeout(() => {
  inputvalue2.value = 'qwe'
}, 1000)

// select
const selectvalue = ref(1)
const selectvalue2 = ref(null)
const dict = ref([
  { value: 1, label: 'test1' },
  { value: 2, label: 'test2' },
  { value: 3, label: 'test31231123231affsvefwvlewvevlreaasdf23' },
  { value: 4, label: 'test4', disabled: true },
])
const selectevent = (value: any) => {
  console.log('select!!!', value)
}

// block
const blockcontent =
  'Either change the import in "example/pages/test.vue?vue&type=script&setup=true&lang.ts" to point directly to the exporting module or reconfigure "output.manualChunks" to ensure these modules end up in the same chunk.'

// loading
const { CLoading, CLoadingStatus, CLoadingBar } = useLoading({ text: '加载中' })
const loadingstart = () => {
  CLoading.start()
}
const loadingstop = () => {
  CLoading.stop()
}
const loading = () => {
  CLoading.start()
  setTimeout(() => {
    CLoading.stop()
  }, 4000)
}
const loadingbarstart = () => {
  CLoadingBar.start()
}
const loadingbarstop = () => {
  CLoadingBar.stop()
}
const loading2 = () => {
  CLoadingBar.start()
  setTimeout(() => {
    CLoadingBar.finish()
  }, 2000)
}
const goto = (percent) => {
  CLoadingBar.goto(percent)
}

// 123
let testbtn1click = () => {
  let btn1 = document.getElementById('testbtn1')
  console.log('testbtn1click', btn1)
  btn1?.click()
}

const log = (...args: any[]) => {
  console.log('**------------------**')
  console.log('**', ...args, '**')
}

const obj = {
  a: 1,
  fn(...args: any[]) {
    console.log(this.a, ...args)
  },
}
const obj2 = {
  a: 2,
}
obj.fn(111, 222)
log('原生call apply 测试')
obj.fn.call(obj2, 111, 222)
obj.fn.apply(obj2, [111, 222])

// @ts-ignore
Function.prototype.myCall = function (obj, ...args: any[]) {
  if (obj == undefined || obj == null) {
    obj = globalThis
  }
  // 给目标obj临时加上fn方法。此处this指的就是调用myCall的fn方法。
  obj.fn = this
  // 执行
  let res = obj.fn(...args)

  delete obj.fn
  return res
}

// @ts-ignore
Function.prototype.myApply = function (obj, args: any[]) {
  if (obj == undefined || obj == null) {
    obj = globalThis
  }
  // 给目标obj临时加上fn方法。此处this指的就是调用myCall的fn方法。
  obj.fn = this
  // 执行
  let res = obj.fn(...args)

  delete obj.fn
  return res
}
log('myCall myApply 测试')
// @ts-ignore
obj.fn.myCall(obj2, 111, 222)
// @ts-ignore
obj.fn.myApply(obj2, [111, 222])

log('原生bind测试')
let newFn = obj.fn.bind(obj2, 111, 222)
newFn()

// @ts-ignore
Function.prototype.myBind = function (obj, ...args) {
  let originFn = this
  let fn = function () {
    return originFn.call(obj, ...args)
  }
  return fn
}
log('myBind测试')
// @ts-ignore
let newFn2 = obj.fn.myBind(obj2, 111, 222)
newFn2()

let fn = () => {
  log('click!')
}
const myDebounce = function (fn, delay) {
  let timer: any = null
  return function (...args) {
    clearTimeout(timer) // 无论如何，清空timer 重新计时
    timer = setTimeout(function () {
      // 因为实际调用fn的是调用debouncedFn的主体对象，也就是this，所以这里用call this。
      fn.call(this, ...args)
      log('debounce this', this)
    }, delay)
  }
}
let debouncedFn = myDebounce(fn, 1000)
// 用法
const click111 = debouncedFn
// 然后按钮触发click就行。

let fn2 = () => {
  log('roll!')
}
const myThrottle = function (fn, delay) {
  let flag = true // 表示是否锁住
  return function (...args) {
    if (!flag) return // 如果刚才已经解锁了 就返回 不用再生成一个计时器来实际触发函数和上锁了
    flag = false // 解锁
    setTimeout(() => {
      fn.call(this, ...args)
      flag = true // 执行完一次后重新锁住
    }, delay)
  }
}
let throttledFn2 = myThrottle(fn2, 200)
const roll111 = throttledFn2

// 深浅拷贝
let level2Obj = {
  a1: 2,
  b1: 'b1',
}
let originObj = {
  a: 1,
  b: [1, 'b'],
  c: level2Obj,
}
// 浅
log('myCloneShallow测试')
const myCloneShallow = function (obj) {
  return {
    ...obj,
  }
}
let obj111 = myCloneShallow(originObj)
log(obj111)
// @ts-ignore
log(obj111.c == level2Obj) // 仍然是同一个引用

// JSON深拷贝
log('JSON深拷贝测试')
let obj222 = JSON.parse(JSON.stringify(originObj))
log(obj222)
// @ts-ignore
log(obj222.c == level2Obj) // 已经非同一个引用了

// 深
log('myCloneDeep测试')
const myCloneDeep = function (obj) {
  // 非正常obj
  if (typeof obj !== 'object' || obj == null) {
    if (obj instanceof Function) return obj.call(this, ...arguments)
    return obj
  }
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  let res = {}
  for (const key in obj) {
    // 必须是自己的属性，不是原型链上的属性，所以用 hasOwnProperty
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      if (element instanceof Array) {
        res[key] = []
        element.forEach((item) => res[key].push(myCloneDeep(item)))
      }
      // 还有一些没考虑到的情况，先不讨论
      // else if() {}
      else res[key] = myCloneDeep(element)
    }
  }
  return res
}
let obj333 = myCloneDeep(originObj)
log(obj333)
// @ts-ignore
log(obj333.c == level2Obj)

// reduce
let arr = [1, 3, 5, 7]
log('reduce测试')
let sum = arr.reduce((prev, curr) => prev + curr, 0)
log(sum)

// @ts-ignore
Array.prototype.myReduce = function (fn, init) {
  // 浅拷贝数组
  const arr = Array.prototype.slice.call(this)
  // 注意: reduce() 对于空数组是不会执行回调函数的。
  if (!arr.length) return

  // init默认是0，这可能有问题，例如fn里出现了乘法
  // let curr = init
  // arr.forEach((value, index) => {
  //   curr = fn(curr, value, index, this)
  // })
  let hasInit = false
  if (init !== null || init !== undefined) hasInit = true
  let curr = hasInit ? init : arr[0]

  for (let i = hasInit ? 0 : 1; i < arr.length; i++) {
    curr = fn(curr, arr[i], i, this)
  }
  return curr
}

log('myReduce测试')
// @ts-ignore
let sum2 = arr.myReduce((prev, curr, currIndex, arr) => prev + curr, 0)
log(sum2)

// ------datepicker
const datevalue = ref(new Date())
</script>
