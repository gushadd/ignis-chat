<template>
	<article class="my-4 flex h-20 min-w-0 cursor-pointer items-center gap-3 rounded-sm border-b border-base-300 px-2 transition-colors duration-200 hover:bg-base-200">
		<div class="avatar">
			<div class="w-15 rounded-full">
				<img :src="avatarUrl" :alt="`Foto de ${contactName}`" />
			</div>
		</div>
		<div class="flex h-full min-w-0 flex-1 flex-col items-start py-3">
			<div class="flex w-full items-center justify-between">
				<p class="truncate font-bold">{{ contactName }}</p>
				<p class="ml-2 shrink-0 text-xs text-base-content/60">{{ time }}</p>
			</div>
			<p class="w-full truncate text-sm text-base-content/60">{{ lastMessage }}</p>
		</div>
	</article>
</template>

<script setup>
defineProps({
	avatarUrl: {
		type: String,
		required: true,
	},
	contactName: {
		type: String,
		required: true,
	},
	lastMessage: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
});
</script>
