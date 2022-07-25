import App from './App.svelte';
import { getRandomName } from './utils';
const app = new App({
	target: document.body,
	props: {
		name: getRandomName()
	}
});

export default app;
