<script setup lang="ts">
import { computed, reactive, ref } from 'vue-demi'
import './index.css'

const emit = defineEmits(['c_choose'])
const today = ref(new Date())
const year = ref(today.value.getFullYear())
const month = ref(today.value.getMonth() + 1)
const date = ref(today.value.getDate())
const day = ref(today.value.getDay())
let data: any[] = reactive([])
let dataGrouped: any[] = reactive([])
console.log('init 1,', year.value, month.value, date.value, day.value)
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
    // value: today.value,
    year: year.value,
    month: month.value,
    date: date.value,
    day: day.value,
    choose: true,
  })
  let daytmp = day.value - 1
  for (let i = date.value - 1; i > 0; i--) {
    data.unshift({
      // value: new Date(),
      year: year.value,
      month: month.value,
      date: i,
      day: daytmp < 0 ? (daytmp = 6) : daytmp--,
      choose: false,
    })
  }
  daytmp = day.value + 1
  for (let i = date.value + 1; i <= getDates(year.value, month.value); i++) {
    data.push({
      // value: new Date(),
      year: year.value,
      month: month.value,
      date: i,
      day: daytmp > 6 ? (daytmp = 0) : daytmp,
      choose: false,
    })
    daytmp++
  }
}
const groupByWeek = () => {
  dataGrouped.splice(0, dataGrouped.length)
  let t = []
  for (let i = 0; i < data.length; i++) {
    t.push(data[i])
    if (data[i].day == 6 || i == data.length - 1) {
      dataGrouped.push([...t])
      t = []
    }
  }
}
initData()
groupByWeek()
data.forEach((date) => {
  console.log(date)
})
dataGrouped.forEach((week) => {
  week.forEach((date: any) => {
    console.log(date)
  })
  console.log('----')
})
// console.log(data[0])
const classNameDate = (date: any) => {
  return `
    c-date-btn
    ${date.choose ? 'c-date-btn__choose' : ''}
  `
}
</script>
<template>
  <div>
    <div>year-month panel</div>
    <div v-for="week in dataGrouped">
      <div v-for="date in week" :class="classNameDate(date)">
        {{ date.date }}
      </div>
    </div>
  </div>
</template>
