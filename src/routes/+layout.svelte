<script>
    import "@noeticlabs/nlds-svelte/styles/core.css";
    import "../app.css";

    import Topbar from "$lib/components/Topbar/Topbar.svelte";
</script>

<Topbar />

<main class="content">
    <slot />
</main>

<style>
    .content {
        /* margin-left: 3rem; /* Sidebar width */
        margin-top: 3rem; /* Topbar height */
        padding: 1.5rem;
        min-height: calc(100vh - 3rem);
    }

    @media (max-width: 767px) {
        .content {
            margin-left: 0;
        }
    }
</style>
