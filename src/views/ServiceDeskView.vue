<template>
	<main class="flex h-full min-h-0 w-full flex-col rounded-md bg-base-100 shadow-md lg:flex-row">
		<!-- Listagem de conversas -->
		<div class="flex min-h-0 w-full flex-1 flex-col gap-5 p-4 lg:w-96 lg:flex-none lg:border-r lg:border-base-200 lg:p-5">
			<header class="flex justify-between">
				<h1 class="text-xl font-bold text-accent">Atendimento</h1>
				<button class="btn btn-outline btn-circle btn-sm btn-accent">
					<i class="pi pi-plus"></i>
				</button>
			</header>

			<input type="text" placeholder="Buscar" class="input input-accent w-full" />

			<div class="tabs tabs-lift min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)]">
				<input type="radio" name="tabs" class="tab" aria-label="Conversas" checked />
				<div class="tab-content min-h-0 overflow-y-auto border-base-300 bg-base-100 p-3">
					<ConversationListItem avatar-url="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" contact-name="Nome do contato" last-message="Última mensagem" time="10:23" />
				</div>

				<input type="radio" name="tabs" class="tab" aria-label="Fila" />
				<div class="tab-content min-h-0 overflow-y-auto border-base-300 bg-base-100 p-6">Tab content 2</div>

				<input type="radio" name="tabs" class="tab" aria-label="Contatos" />
				<div class="tab-content min-h-0 overflow-y-auto border-base-300 bg-base-100 p-6">Tab content 3</div>
			</div>
		</div>

		<!-- Chat -->
		<div class="hidden min-w-0 flex-1 lg:flex">werguh</div>
	</main>
</template>

<script setup>
import ConversationListItem from "@/components/ConversationListItem.vue";
</script>
