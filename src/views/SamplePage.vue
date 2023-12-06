<!-- <template>
  <post-card content="Post Card 1" />
  <post-card content="Post Card 2" />

  <MrCard :cardImage="'https://example.com/image.jpg'" cardTitle="Example Title" cardText="This is an example card." :cardLink="'https://example.com'" />
  <MrCard :cardImage="'https://example.com/image2.jpg'" cardTitle="Another Title" cardText="This is another example card." :cardLink="'https://example.com'" />
</template>

<script setup>
import PostCard from "@/components/PostCard.vue";
import MrCard from "@/components/MrCard.vue";
</script> -->
<template>
	<div class="container">
		<div class="row">
			<div class="col]-12">
				<MrCard
					:cardImage="'https://www.everwallpaper.co.uk/cdn/shop/products/jungle-leaves-bird-wallpaper-mural.jpg?v=1676526563'"
					cardTitle="Example Title"
					cardText="This is an example card."
					:cardLink="'https://example.com'"
				/>
				<MrCard
					:cardImage="'https://www.everwallpaper.co.uk/cdn/shop/products/jungle-leaves-bird-wallpaper-mural.jpg?v=1676526563'"
					cardTitle="Another Title"
					cardText="This is another example card."
					:cardLink="'https://example.com'"
				/>
				<MrAccordion :items="items" />
				<div>
					<!-- accordion item  -->
					<div class="accordion-box">
						<!-- accordion-btn 클릭시 활성화 되면 on <div class="accordion-items on">-->
						<div class="accordion-items on">
							<div class="accordion-hdr">
								<button class="accordion-btn" type="button">Accordion Item</button>
							</div>
							<div class="accordion-cont">
								<strong>This is the item accordion body.</strong>
							</div>
						</div>
					</div>
					<!--// accordion item  -->
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import MrCard from "@/components/MrCard.vue";
import MrAccordion from "@/components/MrAccordion.vue";

const items = [];
</script>

<style lang="scss">
.accordion-box {
	border-radius: 16px;
	border: 1px solid #eceef0;
	background: #fff;
	overflow: hidden;
	box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.02);

	.accordion-items {
		.accordion-hdr {
			position: relative;

			.accordion-btn {
				width: 100%;
				display: block;
				padding: 20px;
				color: #2e3033;

				font-size: 16px;
				font-style: normal;
				font-weight: 700;
				line-height: 100%; /* 16px */
				text-align: left;
				border: 0;
				margin: 0;
				display: flex;
				flex-direction: row;
				align-items: center;
				flex-wrap: nowrap;
				justify-content: space-between;
				&:after {
					content: "";
					display: block;
					width: 18px;
					height: 18px;
					background-repeat: no-repeat;
					background-position: center;
					background-size: 18px;
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M14.8228 12L8.91133 5.9999L2.9999 12' stroke='%232E3033' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
					transform: rotate(180deg);
				}
			}
		}

		.accordion-cont {
			padding: 0 20px 20px;
			display: none;
		}

		&.on {
			.accordion-btn {
				&:after {
					transform: rotate(0);
				}
			}

			.accordion-cont {
				display: block;
			}
		}
	}
}
</style>
