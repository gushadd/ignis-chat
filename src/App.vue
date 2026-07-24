<template>
	<div class="flex h-dvh flex-col md:flex-row">
		<div class="navbar relative z-10 w-full border-b border-primary-content/10 bg-primary shadow-[0_4px_12px_rgba(0,0,0,0.05)] md:hidden">
			<div class="flex-1">
				<i class="pi pi-telegram mt-2 self-center text-4xl text-primary-content"></i>
			</div>
			<div class="flex-none">
				<button class="btn btn-primary">
					<i class="pi pi-sign-out"></i>
				</button>
			</div>
		</div>

		<aside class="relative z-10 hidden h-screen w-30 flex-col justify-between border-r border-primary-content/10 bg-primary p-2 shadow-[4px_0_12px_rgba(0,0,0,0.05)] md:flex md:h-full">
			<div class="flex flex-col gap-6">
				<i class="pi pi-telegram mt-2 self-center text-4xl text-primary-content"></i>
				<ul class="flex flex-col gap-2">
					<li v-for="item in menuItems" :key="item.to">
						<MenuItem :to="item.to" :icon="item.icon" :title="item.title" />
					</li>
				</ul>
			</div>

			<button class="btn btn-accent">
				<i class="pi pi-sign-out"></i>
				Sair
			</button>
		</aside>

		<main class="min-w-0 w-full flex-1 overflow-y-auto bg-base-200 pb-16 md:h-full md:min-h-0 md:p-6 md:pb-6">
			<RouterView />
		</main>

		<ul class="dock z-10 flex border-t border-primary-content/10 bg-primary shadow-[0_-4px_12px_rgba(0,0,0,0.05)] md:hidden">
			<li v-for="item in menuItems" :key="item.to" class="flex-1">
				<MenuItem :to="item.to" :icon="item.icon" :title="item.title" />
			</li>
		</ul>
	</div>
</template>

<script setup>
import MenuItem from "./components/MenuItem.vue";

const menuItems = [
	{ to: "/", icon: "pi pi-home", title: "Início" },
	{ to: "/service-desk", icon: "pi pi-comments", title: "Atendimento" },
	{ to: "/contacts", icon: "pi pi-users", title: "Contatos" },
	{ to: "/settings", icon: "pi pi-cog", title: "Configurações" },
];
</script>
