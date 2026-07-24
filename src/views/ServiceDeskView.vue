<template>
	<main class="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-md bg-base-100 shadow-md lg:flex-row">
		<!-- Listagem de conversas -->
		<div :class="[selectedConversation ? 'hidden lg:flex' : 'flex', 'min-h-0 w-full flex-1 flex-col gap-5 p-4 lg:w-96 lg:flex-none lg:border-r lg:border-base-200 lg:p-5']">
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
				<div class="tab-content min-h-0 overflow-y-auto border-base-300 bg-base-100 p-3" @click="selectedConversation = true">
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
		<div :class="[selectedConversation ? 'flex' : 'hidden lg:flex', 'min-h-0 min-w-0 flex-1 flex-col']">
			<!-- Cabeçalho contato -->
			<div class="navbar relative shrink-0 bg-base-100 px-2 shadow-sm sm:px-4">
				<div class="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
					<button class="btn btn-ghost btn-square btn-sm lg:hidden" @click="selectedConversation = false">
						<i class="pi pi-arrow-left text-lg"></i>
					</button>
					<div class="avatar">
						<div class="w-10 rounded-full sm:w-12">
							<img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
						</div>
					</div>
					<p class="truncate font-bold">Nome do contato</p>
				</div>
				<div class="flex flex-none items-center gap-1 sm:gap-2">
					<button class="btn btn-accent btn-sm sm:btn-md">Finalizar</button>
					<button class="btn btn-square btn-ghost hidden sm:inline-flex">
						<i class="pi pi-arrow-right-arrow-left text-lg"></i>
					</button>
					<button class="btn btn-square btn-ghost hidden sm:inline-flex">
						<i class="pi pi-search"></i>
					</button>
					<button class="btn btn-square btn-ghost" @click="showOptionsMenu = !showOptionsMenu">
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
				<div class="m-2 flex min-h-16 shrink-0 items-center gap-1 rounded-md bg-base-100 px-1 shadow-md sm:m-5 sm:gap-2 sm:px-2">
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

		<aside
			:class="[
				'absolute inset-y-0 right-0 z-20 w-full min-w-0 shrink-0 overflow-hidden border-l border-base-300 bg-base-100 transition-[width,transform] duration-300 ease-in-out lg:static',
				showOptionsMenu ? 'translate-x-0 lg:w-80' : 'translate-x-full lg:w-0 lg:border-l-0',
			]"
		>
			<div class="flex h-full w-full flex-col p-5 lg:w-80">
				<header class="flex items-center justify-between">
					<h2 class="font-semibold">Informações do cliente</h2>
					<button class="btn btn-ghost btn-square btn-sm" @click="showOptionsMenu = false">
						<i class="pi pi-times"></i>
					</button>
				</header>
			</div>
		</aside>
	</main>
</template>

<script setup>
import { ref } from "vue";
import ConversationListItem from "@/components/ConversationListItem.vue";

const selectedConversation = ref(false);
const showOptionsMenu = ref(false);
</script>

<style scoped>
.chat-background {
	background-color: #f7f7f7;
	background-image: linear-gradient(rgb(247 247 247 / 47%), rgb(247 247 247 / 47%)), url("@/assets/images/chat-pattern.svg");
}
</style>
