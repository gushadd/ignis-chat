<template>
	<RouterLink
		:to="to"
		exact-active-class="bg-primary-content/20 ring-1 ring-primary-content/20"
		class="flex w-full flex-col items-center rounded-md p-2 text-sm text-primary-content transition-colors duration-200 hover:bg-primary-content/20"
	>
		<i :class="['text-xl', icon]"></i>
		{{ title }}
	</RouterLink>
</template>

<script setup>
defineProps({
	icon: String,
	title: String,
	to: String,
});
</script>
