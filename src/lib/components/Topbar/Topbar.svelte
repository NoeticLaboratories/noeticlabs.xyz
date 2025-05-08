<script>
    import { onMount } from "svelte";
    import { Select } from "@noeticlabs/nlds-svelte";
    import { theme, applyInitialTheme } from "$lib/stores/themeStore.js";

    // Options for the theme selector
    const themeOptions = [
        { value: "white", label: "White" },
        { value: "b10", label: "Black 10" },
        { value: "b80", label: "Black 80" },
        { value: "b90", label: "Black 90" },
        { value: "b100", label: "Black 100" },
    ];

    onMount(() => {
        applyInitialTheme();
    });
</script>

<header class="topbar">
    <div class="topbar-content">
        <div class="topbar-left">
            <div class="logo">
                <h1>Noetic Labs</h1>
            </div>
        </div>

        <div class="topbar-right">
            <div class="theme-selector-wrapper">
                <Select
                    options={themeOptions}
                    bind:value={$theme}
                    aria-label="Select color theme"
                    id="theme-selector"
                />
            </div>
        </div>
    </div>
</header>

<style>
    .topbar {
        background-color: var(--nlds-bg-primary);
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        padding: 0.75rem 1.5rem;
        z-index: 1000;
    }

    .topbar-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }

    .topbar-left {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .topbar-right {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo h1 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--nlds-text-primary);
        margin: 0;
    }
</style>
