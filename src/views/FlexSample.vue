<template>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</template>
<style lang="scss">
.container {
  display: flex;
}

.box {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100px;
  border: 1px solid black;
  padding: 10px;
}
</style>
