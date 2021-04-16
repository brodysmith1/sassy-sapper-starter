<script>
	import MenuButton from '../components/MenuButton.svelte'
</script>

<MenuButton />

<main>
	<slot></slot>
</main>

<style global>
	@import "../styles/base.sass"
	@import "../styles/utils.sass"
	@import "../styles/typography.sass"
	@import "../styles/navigation.sass"
</style>
