<template>
  <CThemeProvider>
    <CMessageProvider>
      <div style="display: block">
        ------------------特别测试区-------------------
        <br />
        主题：<CSwitch v-model:value="switchvalue2"></CSwitch>&nbsp;
        <CButton :type="typetest" clean @c_click="typeclick">
          prop change test
        </CButton>
        <input v-model="inputvalue2" />
        <CInput v-model:value="inputvalue2" />
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
        <br />
        颜色
        <br />
        <CCheckbox v-model:value="checkboxvalue" color="red"></CCheckbox>&nbsp;
        <CCheckbox v-model:value="checkboxvalue" color="green"></CCheckbox
        >&nbsp;
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
        <br />
        颜色
        <br />
        <CSwitch v-model:value="switchvalue" color="red"></CSwitch>&nbsp;
        <CSwitch v-model:value="switchvalue" color="grey"></CSwitch>&nbsp;
        <br />
        尺寸
        <br />
        <CSwitch v-model:value="switchvalue" size="s"></CSwitch>&nbsp;
        <CSwitch v-model:value="switchvalue" size="m"></CSwitch>&nbsp;
        <CSwitch v-model:value="switchvalue" size="l"></CSwitch>&nbsp;
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
        <CButton>Btn 默认</CButton>
        <CButton clean>Btn 默认</CButton>
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
          style="color: var(--combo-test-color); transition: all 0.2s ease-out"
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
        <CTag type="success" size="m" closable>closable</CTag>
        <CTag type="success" size="m" closable clean>closable</CTag>
        <CTag type="success" size="m" closable round>closable</CTag>
      </div>
      <br />
      <br />
      <br />
    </CMessageProvider>
  </CThemeProvider>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  CTag,
  CInput,
  CSwitch,
  CCheckbox,
  CIcon,
  CMessageProvider,
  CThemeProvider,
  useMsg,
  useTheme,
} from '../../src'
import { AmericanFootballSharp } from '@vicons/ionicons5'
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
const typetest = ref('warning')
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
</script>
