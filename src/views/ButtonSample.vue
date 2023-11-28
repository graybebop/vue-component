<template>
	<div>
		<mr-button type="submit" :label="'Test Button'" :onClick="handleClick"></mr-button>
		<mr-button type="button" :onClick="handleClick"></mr-button>
		<mr-button label="버튼" buttonClass="btn btn-primary btn-lg">
			<template #prepend>
				<span class="material-symbols-outlined"> search </span>
			</template>
			Click me!
			<!-- <template #append>
				<span class="material-symbols-outlined"> search </span>
			</template> -->
		</mr-button>
	</div>
</template>

<script setup>
import MrButton from "@/components/MrButton.vue";

const handleClick = () => {
	console.log("버튼을 클릭했습니다!");
};
</script>
