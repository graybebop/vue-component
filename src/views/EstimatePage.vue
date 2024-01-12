<template>
  <div class="pb-2">
    <div class="row">
      <div class="col-12">인원수 : 허연우 외 총 4명</div>
      <div class="col-12">기간 : 24년1월25일(목요일)~24년1월28일(일요일)</div>
    </div>
  </div>
  <table>
    <tr>
      <th>일정</th>
      <th>인원</th>
      <th>호텔</th>
      <th>호텔비용</th>

      <th>골프클럽</th>
      <th>골프비용</th>
      <th>차량</th>
      <th>차량비용</th>
      <th>가이드</th>
      <th>가이드비용</th>
      <th>총합</th>
    </tr>
    <tr v-for="day in days" :key="day.date">
      <td class="date">{{ day.date }}</td>
      <td>{{ day.people }}</td>
      <td>{{ day.hotelName }}</td>
      <td>{{ formatCurrency(day.hotelFee) }}</td>

      <td>{{ day.golfclub }}</td>
      <td>{{ formatCurrency(day.golfFee) }}</td>
      <td>{{ day.vehicleName }}</td>
      <td>{{ formatCurrency(day.vehicleFee) }}</td>
      <td>{{ day.guide }}</td>
      <td>{{ formatCurrency(day.guideFee) }}</td>
      <td>
        {{ formatCurrency(day.hotelFee + day.people * day.golfFee + day.vehicleFee + day.guideFee) }}
      </td>
    </tr>
    <tr>
      <td>총합</td>
      <td></td>

      <td></td>
      <td>{{ formatCurrency(totalHotel) }}</td>
      <td></td>
      <td>{{ formatCurrency(totalGolf) }}</td>
      <td></td>
      <td>{{ formatCurrency(totalVehicle) }}</td>
      <td></td>
      <td>{{ formatCurrency(totalGuide) }}</td>
      <td>{{ formatCurrency(total) }}</td>
    </tr>
  </table>
</template>
<script setup>
import { ref, computed } from "vue";

const days = ref([
  {
    date: "24년1월25일 목요일(1일차)",
    hotelFee: 205984,
    hotelName: "호텔",
    people: 3,
    golfFee: 0,
    golfclub: "",
    vehicleFee: 150000,
    vehicleName: "차량16인승",
    guideFee: 0,
    guide: "한국인가이드",
  },
  {
    date: "24년1월26일 금요일(2일차)",
    hotelFee: 205984,
    hotelName: "호텔",
    people: 3,
    golfFee: 145684,
    golfclub: "떤손녓",
    vehicleFee: 150000,
    vehicleName: "차량16인승",
    guideFee: 0,
    guide: "한국인가이드",
  },
  {
    date: "24년1월27일 토요일(3일차)",
    hotelFee: 205984,
    hotelName: "호텔",
    people: 3,
    golfFee: 186628,
    golfclub: "트윈 도브 골프클럽",
    vehicleFee: 150000,
    vehicleName: "차량16인승",
    guideFee: 0,
    guide: "한국인가이드",
  },
  {
    date: "24년1월28일 일요일(4일차)",
    hotelFee: 0,
    hotelName: "체크아웃",
    people: 3,
    golfFee: 0,
    golfclub: "",
    vehicleFee: 60000,
    vehicleName: "차량16인승",
    guideFee: 0,
    guide: "가이드없음",
  },
]);

const totalHotel = computed(() => days.value.reduce((acc, day) => acc + day.hotelFee, 0));
const totalGolf = computed(() => days.value.reduce((acc, day) => acc + day.people * day.golfFee, 0));
const totalVehicle = computed(() => days.value.reduce((acc, day) => acc + day.vehicleFee, 0));
const totalGuide = computed(() => days.value.reduce((acc, day) => acc + day.guideFee, 0));
const total = computed(() => totalHotel.value + totalGolf.value + totalVehicle.value + totalGuide.value);

function formatCurrency(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<style lang="scss">
table {
  width: 100%;
  td,
  th {
    border: 1px solid #ddd;
    padding: 10px 15px;
  }

  th {
    text-align: center;
    background-color: #000;
    padding: 20px 15px;
    color: #fff;
  }

  td {
    &.date {
      background-color: #f7f7f7;
    }
  }
}
</style>
