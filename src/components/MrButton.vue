<template>
	<button :type="type" @click="handleClick" :class="[buttonClass]">
		<slot name="prepend"></slot>

		<span class="btn-label-txt">{{ label || "empty" }}</span>
		<slot name="append"></slot>
	</button>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
	type: {
		type: String,
		default: "button",
		validator: (value) => ["button", "submit"].includes(value),
	},
	buttonClass: {
		type: String,
		default: "",
	},
	label: {
		type: String,
		default: "",
	},
	onClick: {
		type: Function,
		default: () => {},
	},
});

const { type, label, onClick, buttonClass } = toRefs(props);

const handleClick = () => {
	onClick.value();
};
</script>
