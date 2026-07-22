import { createRouter, createWebHistory } from "vue-router";
import ContactsView from "@/views/ContactsView.vue";
import HomeView from "@/views/HomeView.vue";
import ServiceDeskView from "@/views/ServiceDeskView.vue";
import SettingsView from "@/views/SettingsView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/service-desk",
			name: "service-desk",
			component: ServiceDeskView,
		},
		{
			path: "/contacts",
			name: "contacts",
			component: ContactsView,
		},
		{
			path: "/settings",
			name: "settings",
			component: SettingsView,
		},
	],
});

export default router;
