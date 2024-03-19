<template>
  <div class="container">
    <div class="row gy-3">
      <div class="col-12">
        <MrCard :cardImage="'https://www.everwallpaper.co.uk/cdn/shop/products/jungle-leaves-bird-wallpaper-mural.jpg?v=1676526563'" :cardLink="'#none'" cardType="album" :cardClass="'list'">
          <template #title>cardImage, cardClass</template>
          <template #sub-title>cardImage를 사용하면 img src태그로 분기됨, cardClass 클래스명이 더 필요한 경우</template>
        </MrCard>
      </div>

      <div class="col-12">
        <MrCard :bgImage="'https://vietnam.travel/sites/default/files/inline-images/shutterstock_1506184586_resize.jpg'" :bgHeight="'500px'" :cardLink="'#none'" cardType="album">
          <template #title>bgImage를 사용한경우</template>
          <template #sub-title>배경이미지를 사용한 경우 image src를 쓰지 않고 div에 배경 스타일 태그를 사용함</template>
        </MrCard>
      </div>

      <div class="col-12">
        <MrCard :cardLink="'#none'" cardImage="dshfkhsdk">
          <template #title>이미지 에러 404인 경우(image not found)</template>
          <template #sub-title> @error="onImageError" @error 이벤트를 사용해 404 에러를 감지해 대체이미지 사용 : GET http://localhost:8080/dshfkhsdk 404 (Not Found)</template>
        </MrCard>
      </div>

      <div class="col-12">
        <MrCard :cardLink="'#none'">
          <template #title>이미지 주소 없슴</template>
          <template #sub-title>carImage를 선언하지 않는 경우 defaultImage로 보여줌</template>
        </MrCard>
      </div>

      <div class="col-12">
        <MrCard
          :bgImage="'https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/5628c7d5-Hoi-An-Half-Day-Private-Tour.jpg'"
          :bgHeight="'500px'"
          :cardLink="'#none'"
          cardType="list"
        >
          <template #title>cardType</template>
          <template #sub-title>cardType="list" 카드타입 리스트</template>
        </MrCard>
      </div>

      <div class="col-12">
        <MrCard :cardLink="'#none'" cardType="list">
          <template #title>cardType</template>
          <template #sub-title>cardType="list" 카드타입 리스트</template>
        </MrCard>
      </div>
    </div>
  </div>
</template>
<script setup>
import MrCard from "@/components/MrCard.vue";
</script>

<style lang="scss"></style>
