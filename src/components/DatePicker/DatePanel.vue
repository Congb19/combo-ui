<script setup lang="ts">
import { computed, reactive, ref } from 'vue-demi'
import './index.css'

const emit = defineEmits(['c_choose'])
const today = ref(new Date())
let data: any[] = reactive([])
let dataGrouped: any[] = reactive([])

const getDates = (year: number, month: number) => {
  const isRunYear =
    year % 100 == 0
      ? year % 400 == 0
        ? true
        : false
      : year % 4 == 0
      ? true
      : false
  switch (month) {
    case 1:
      return 31
    case 2:
      return isRunYear ? 29 : 28
    case 3:
      return 31
    case 4:
      return 30
    case 5:
      return 31
    case 6:
      return 30
    case 7:
      return 31
    case 8:
      return 31
    case 9:
      return 30
    case 10:
      return 31
    case 11:
      return 30
    case 12:
      return 31
  }
  return 30
}
const initData = () => {
  data.splice(0, data.length)
  data.push({
    value: today.value,
    choose: true,
    inMonth: true,
  })
  let datetmp = today.value.getDate()
  for (let i = datetmp - 1; i > 0; i--) {
    data.unshift({
      value: new Date(
        today.value.valueOf() - 24 * 60 * 60 * 1000 * (datetmp - i)
      ),
      choose: false,
      inMonth: true,
    })
  }
  for (
    let i = datetmp + 1;
    i <= getDates(today.value.getFullYear(), today.value.getMonth() + 1);
    i++
  ) {
    data.push({
      value: new Date(
        today.value.valueOf() + 24 * 60 * 60 * 1000 * (i - datetmp)
      ),
      choose: false,
      inMonth: true,
    })
  }
}
const groupByWeek = () => {
  dataGrouped.splice(0, dataGrouped.length)
  let t = []
  for (let i = 0; i < data.length; i++) {
    t.push(data[i])
    if (data[i].value.getDay() == 6 || i == data.length - 1) {
      dataGrouped.push([...t])
      t = []
    }
  }
  if (dataGrouped[0].length < 7) {
    let n = dataGrouped[0].length
    let first = dataGrouped[0][0].value.valueOf()
    for (let i = 1; i <= 7 - n; i++) {
      dataGrouped[0].unshift({
        value: new Date(first - i * 24 * 60 * 60 * 1000),
        inMonth: false,
      })
    }
  }
  if (dataGrouped[dataGrouped.length - 1].length < 7) {
    let n = dataGrouped[dataGrouped.length - 1].length
    let last = dataGrouped[dataGrouped.length - 1][n - 1].value.valueOf()
    for (let i = 1; i <= 7 - n; i++) {
      dataGrouped[dataGrouped.length - 1].push({
        value: new Date(last + i * 24 * 60 * 60 * 1000),
        inMonth: false,
      })
    }
  }
}
initData()
groupByWeek()

const choose = (date: any) => {
  if (!date.choose) {
    if (date.value.getMonth() !== today.value.getMonth()) {
      today.value = new Date(date.value)
      initData()
      groupByWeek()
    } else {
      dataGrouped.forEach((week) => {
        week.forEach((date: any) => {
          date.choose = false
        })
      })
      date.choose = true
    }
    emit('c_choose', date.value)
  }
}

const classNameDate = (date: any) => {
  return `
    c-date-btn
    ${date.choose ? 'c-date-btn__choose' : ''}
    ${date.inMonth ? '' : 'c-date-btn__outmonth'}
  `
}
</script>
<template>
  <div class="c-datepanel">
    <div>{{ today.getFullYear() }} {{ today.getMonth() + 1 }}</div>
    <div
      v-for="day in ['日', '一', '二', '三', '四', '五', '六']"
      class="c-weekpanel"
    >
      {{ day }}
    </div>
    <div v-for="week in dataGrouped">
      <div
        v-for="date in week"
        :class="classNameDate(date)"
        @click="() => choose(date)"
      >
        {{ date.value.getDate() }}
      </div>
    </div>
  </div>
</template>
