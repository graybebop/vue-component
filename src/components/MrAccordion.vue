<template>
	<!-- <div class="accordion">
		<div v-for="(item, index) in items" :key="index" class="accordion-item">
			<div class="accordion-header">
				<button class="accordion-button" type="button">Accordion Item #{{ index + 1 }}</button>
			</div>
			<div class="accordion-collapse collapse">
				<div class="accordion-body">
					<strong>This is the item #{{ index + 1 }}'s accordion body.</strong> {{ item.content }}
				</div>
			</div>
		</div>
	</div>
  -->
	<div class="accordion">
		<div v-for="(item, index) in items" :key="index" class="accordion-item">
			<div class="accordion-header">
				<button class="accordion-button" type="button">Accordion Item #{{ index + 1 }}</button>
			</div>
			<div class="accordion-collapse collapse">
				<div class="accordion-body">
					<strong>This is the item #{{ index + 1 }}'s accordion body.</strong> {{ item.content }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MrAccordion",
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
/* 여기에 필요한 CSS를 추가하세요 */
</style>
