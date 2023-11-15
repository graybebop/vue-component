<template>
	<div>
		<!-- label !== null 아닌 label != null -->
		<label :for="id" class="form-label" v-if="label != null && label != ''">{{ label }}</label>
		<input :id="id" :value="modelValue" @input="updateValue" :type="type" :placeholder="placeholder" class="form-control" />
		<div :class="{ 'valid-feedback': isValidInput, 'invalid-feedback': isInvalidInput }" v-if="msg">{{ msg }}</div>
		<div>글자 길이 체크 : {{ stringLength }}</div>
	</div>
</template>

<script>
export default {
	props: {
		id: String,
		modelValue: String,
		label: String,
		type: {
			type: String,
			default: "text",
		},
		placeholder: String,
	},
	data() {
		return {
			isInvalidInput: false,
			msg: "",
			stringLength: null,
		};
	},
	emits: ["update:modelValue"],
	methods: {
		updateValue(event) {
			const inputValue = event.target.value;
			//const length = inputValue.length;
			const containsSpecialChar = inputValue.includes("*!*");

			if (containsSpecialChar) {
				this.isInvalidInput = false;
				this.isValidInput = true;
				this.msg = "입력이 유효합니다.";
			}

			// if (this.type === "text" && (isNaN(Number(inputValue)) || length < 5 || length > 12 || !containsSpecialChar)) {
			// 	this.isInvalidInput = true;
			// 	this.isValidInput = false;
			// 	this.msg = '숫자만 입력 가능하며, 길이는 5자 이상 12자 이하이어야 하고, "*!*"를 최소 1개 이상 포함해야 합니다.';
			// } else {
			// 	this.isInvalidInput = false;
			// 	this.isValidInput = true;
			// 	this.msg = "입력이 유효합니다.";
			// }
			this.$emit("update:modelValue", event.target.value);
			this.stringLength = event.target.value.length;
		},
	},
};
</script>

<style>
.valid-feedback,
.invalid-feedback {
	display: block !important;
}
</style>
