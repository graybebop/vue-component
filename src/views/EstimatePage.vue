<template>
  <div class="pb-2">
    <div class="row">
      <div class="col-12">인원수 : 허연우 외 총 4명</div>
      <div class="col-12">기간 : 24년1월24일(수요일)~24년1월27일(일요일)</div>
      <div class="col-12">
        <a
          href="https://www.airbnb.co.kr/rooms/773067597799295084?adults=4&check_in=2024-01-24&check_out=2024-01-28&source_impression_id=p3_1703735557_C%2BKqV8vFNyPHKr5b&previous_page_section_name=1000&federated_search_id=640d2d88-f8d7-4684-b7b3-0253e34796fa"
          class="btn btn-primary btn-lg justify-content-center"
          >숙소-1</a
        >
        <a
          href="https://www.airbnb.co.kr/rooms/994162564185621809?adults=4&check_in=2024-01-24&check_out=2024-01-28&source_impression_id=p3_1703735557_4GrptPfqsRKRAbfp&previous_page_section_name=1000&federated_search_id=640d2d88-f8d7-4684-b7b3-0253e34796fa&modal=PHOTO_TOUR_SCROLLABLE"
          class="btn btn-primary btn-lg justify-content-center"
          >숙소-2</a
        >
      </div>
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
        {{
          formatCurrency(
            day.hotelFee + day.people * day.golfFee + day.vehicleFee + day.guideFee
          )
        }}
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
    date: "24년1월24일 수요일(1일차)",
    hotelFee: 797034,
    hotelName: "체크인",
    people: 4,
    golfFee: 0,
    golfclub: "",
    vehicleFee: 60000,
    vehicleName: "차량16인승",
    guideFee: 100000,
    guide: "한국인가이드",
  },
  {
    date: "24년1월25일 목요일(2일차)",
    hotelFee: 797034,
    hotelName: "풀빌라",
    people: 4,
    golfFee: 145684,
    golfclub: "떤손녓",
    vehicleFee: 150000,
    vehicleName: "차량16인승",
    guideFee: 250000,
    guide: "한국인가이드",
  },
  {
    date: "24년1월26일 금요일(3일차)",
    hotelFee: 797034,
    hotelName: "풀빌라",
    people: 4,
    golfFee: 123461,
    golfclub: "롱탄",
    vehicleFee: 150000,
    vehicleName: "차량16인승",
    guideFee: 250000,
    guide: "한국인가이드",
  },
  {
    date: "24년1월27일 토요일(4일차)",
    hotelFee: 797034,
    hotelName: "풀빌라",
    people: 4,
    golfFee: 186628,
    golfclub: "트윈 도브 골프클럽",
    vehicleFee: 150000,
    vehicleName: "차량16인승",
    guideFee: 250000,
    guide: "한국인가이드",
  },
  {
    date: "24년1월28일 일요일(5일차)",
    hotelFee: 0,
    hotelName: "체크아웃",
    people: 4,
    golfFee: 0,
    golfclub: "",
    vehicleFee: 60000,
    vehicleName: "차량16인승",
    guideFee: 0,
    guide: "가이드없음",
  },
]);

const totalHotel = computed(() => days.value.reduce((acc, day) => acc + day.hotelFee, 0));
const totalGolf = computed(() =>
  days.value.reduce((acc, day) => acc + day.people * day.golfFee, 0)
);
const totalVehicle = computed(() =>
  days.value.reduce((acc, day) => acc + day.vehicleFee, 0)
);
const totalGuide = computed(() => days.value.reduce((acc, day) => acc + day.guideFee, 0));
const total = computed(
  () => totalHotel.value + totalGolf.value + totalVehicle.value + totalGuide.value
);

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
