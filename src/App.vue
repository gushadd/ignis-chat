<template>
	<div class="flex">
		<aside class="h-screen w-30 bg-primary">
			<ul class="flex flex-col gap-2 p-2">
				<li v-for="item in menuItems" :key="item.to">
					<MenuItem :to="item.to" :icon="item.icon" :title="item.title" />
				</li>
			</ul>
		</aside>
		<main class="flex-1">
			<RouterView />
		</main>
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
