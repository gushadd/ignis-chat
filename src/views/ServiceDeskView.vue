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
				<!-- Conversas ativas -->
				<input type="radio" name="tabs" class="tab" aria-label="Conversas" checked />
				<div class="tab-content min-h-0 overflow-y-auto border-base-300 bg-base-100 p-3">
					<ConversationListItem avatar-url="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" contact-name="Nome do contato" last-message="Última mensagem" time="10:23" />
				</div>

				<!-- Fila -->
				<input type="radio" name="tabs" class="tab" aria-label="Fila" />
				<div class="tab-content min-h-0 overflow-y-auto border-base-300 bg-base-100 p-6">Tab content 2</div>

				<!-- Contatos -->
				<input type="radio" name="tabs" class="tab" aria-label="Contatos" />
				<div class="tab-content min-h-0 overflow-y-auto border-base-300 bg-base-100 p-6">Tab content 3</div>
			</div>
		</div>

		<!-- Chat -->
		<div class="hidden min-h-0 min-w-0 flex-1 lg:flex lg:flex-col">
			<!-- Cabeçalho contato -->
			<div class="navbar shrink-0 bg-base-100 shadow-sm">
				<div class="flex-1 flex items-center gap-3">
					<div class="avatar">
						<div class="w-12 rounded-full">
							<img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
						</div>
					</div>
					<p class="font-bold">Nome do contato</p>
				</div>
				<div class="flex-none space-x-2">
					<button class="btn btn-accent">Finalizar</button>
					<button class="btn btn-square btn-ghost">
						<i class="pi pi-arrow-right-arrow-left text-lg"></i>
					</button>
					<button class="btn btn-square btn-ghost">
						<i class="pi pi-ellipsis-v text-lg"></i>
					</button>
				</div>
			</div>

			<!-- Conversa -->
			<div class="chat-background flex min-h-0 flex-1 flex-col">
				<!-- Mensagens -->
				<div class="flex min-h-0 flex-1 flex-col overflow-y-auto p-5">
					<div class="chat chat-start">
						<div class="chat-header">
							Contato
							<time class="text-xs opacity-50">12:45</time>
						</div>
						<div class="chat-bubble bg-emerald-100">Bom dia!</div>
					</div>
					<div class="chat chat-end">
						<div class="chat-header">
							Atendente
							<time class="text-xs opacity-50">12:46</time>
						</div>
						<div class="chat-bubble bg-yellow-50">Bom dia, como posso ajudar?</div>
						<!-- <div class="chat-footer opacity-50">Visto em 12:46</div> -->
					</div>
				</div>

				<!-- Campo de texto -->
				<div class="m-5 flex min-h-16 shrink-0 items-center gap-2 rounded-md bg-base-100 px-2 shadow-md">
					<button class="btn btn-ghost btn-square">
						<i class="pi pi-face-smile text-2xl"></i>
					</button>
					<button class="btn btn-ghost btn-square">
						<i class="pi pi-paperclip text-2xl"></i>
					</button>

					<input type="text" placeholder="Digite uma mensagem" class="input input-accent flex-1" />

					<button class="btn btn-accent btn-square">
						<i class="pi pi-send text-xl"></i>
					</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import ConversationListItem from "@/components/ConversationListItem.vue";
</script>

<style scoped>
.chat-background {
	background-color: #f7f7f7;
	background-image: linear-gradient(rgb(247 247 247 / 47%), rgb(247 247 247 / 47%)), url("@/assets/images/chat-pattern.svg");
}
</style>
