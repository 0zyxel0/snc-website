<template>
	<div>
		<HomeHeroComponent />
		<HomeAboutComponent />
		<HomeWhyComponent />
		<HomeFacilitiesComponent />
		<HomeCoursesComponent />
		<HomeAskComponent />
	</div>
</template>
<script>
export default {
	setup() {
		useHead({
			titleTemplate: "%s - Official Website",
			bodyAttrs: {
				class: "snc",
			},
		});
	},
};
</script>
<style scoped>
.finedTitle {
	font-weight: 900;
	text-shadow: 2px 2px #000000;
}

.social-icon {
	font-size: 21px;
	color: white;
}
</style>
