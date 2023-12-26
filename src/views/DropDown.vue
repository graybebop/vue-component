<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  <div><!-- Example single danger button --></div>
  <div>
    <!-- Large button groups (default and split) -->
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Large button</button>
      <ul class="dropdown-menu">
        ...
      </ul>
    </div>
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg" type="button">Large split button</button> <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
      <ul class="dropdown-menu">
        ...
      </ul>
    </div>
  </div>
  <div><button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="This top tooltip is themed via CSS variables.">Custom tooltip</button></div>
  <div>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">Tooltip on top</button> <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">Tooltip on right</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">Tooltip on bottom</button> <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">Tooltip on left</button>
  </div>
</template>
<script setup>
import { onMounted, nextTick } from "vue";
import "bootstrap/dist/css/bootstrap.css";
//import Bootstrap from "bootstrap/dist/js/bootstrap";
import Tooltip from "bootstrap/js/dist/tooltip";

// const dropdownRef = ref(null);
// const tooltipRef = ref(null);

onMounted(async () => {
  await nextTick();

  // const dropdownButtons = document.body.querySelectorAll('button[data-bs-toggle="dropdown"]');
  // dropdownButtons.forEach((button) => {
  //   new Bootstrap.Dropdown(button);
  // });

  const tooltipButtons = document.body.querySelectorAll('button[data-bs-toggle="tooltip"]');
  tooltipButtons.forEach((button) => {
    new Tooltip(button);
  });
});
</script>
