<template>
	<div class="container">
		<div class="row">
			<CommonInput type="text" id="username" v-model="username" label="로그인" placeholder="Enter your username" />
			<CommonInput type="text" id="userid" v-model="userid" label="아이디" placeholder="Enter your username" />
			<CommonInput type="text" id="numberType" v-model="typeVal" label="타입체크" placeholder="숫자를 적어주세요." />
		</div>
	</div>
</template>

<script>
import CommonInput from "@/components/CommonInput.vue";

export default {
	components: {
		CommonInput,
	},
	data() {
		return {
			username: "",
			testNewVal: "", // 실제 데이터
			typeVal: null,
			userid: null,
		};
	},

	methods: {
		updateUser() {
			console.log("username : ", this.username);
		},
	},
	computed: {
		testVal: {
			get() {
				console.log(this.testNewVal);
				return this.testNewVal; // getter: 현재 값을 반환
			},
			set(value) {
				console.log(value);
				this.testNewVal = value; // setter: 값을 변경
			},
		},
	},
};
</script>
