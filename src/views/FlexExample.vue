<template>
  <div class="text-wrap">
    <div class="title">타이틀</div>
    <div class="div"></div>
    <div class="desc">
      타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀
    </div>
  </div>
</template>

<style lang="scss">
.text-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  .title {
    font-size: 16px;
    width: 120px;
  }
  .div {
    align-self: stretch;
    flex: 1 1 1;
    border: 1px solid #ddd;
    width: 1px;
  }
  .desc {
    font-size: 16px;
    width: 300px;
  }
}
</style>
