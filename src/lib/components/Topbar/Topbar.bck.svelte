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

    // Variables to track scroll behavior
    let prevScrollY = 0;
    let topbarRef;
    let topbarHeight = 0;
    let state = "normal"; // 'normal', 'hidden', or 'visible'

    onMount(() => {
        applyInitialTheme();

        topbarHeight = topbarRef.offsetHeight;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // If we've scrolled past the height of the topbar
            if (currentScrollY <= topbarHeight) {
                state = "normal";
            } else {
                // Past the topbar height
                if (state === "normal") {
                    // When first scrolling past, immediately hide
                    state = "hidden";
                } else {
                    // Toggle based on scroll direction
                    state = currentScrollY < prevScrollY ? "visible" : "hidden";
                }
            }

            prevScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<!-- Placeholder div to prevent content jump when topbar becomes fixed -->
<!-- {#if state !== "normal"}
    <div style="height: {topbarHeight}px;"></div>
{/if} -->

<header class="topbar state-{state}" bind:this={topbarRef}>
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
        border-bottom: 1px solid var(--nlds-border-color);
        top: 0;
        left: 0;
        right: 0;
        padding: 0.75rem 1.5rem;
        z-index: 1000;
        transition: transform 0.2s ease-in-out;
    }

    /* Normal document flow */
    .topbar.state-normal {
        position: fixed;
    }

    /* Fixed but hidden state */
    .topbar.state-hidden {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        transform: translateY(-100%); /* Move it off-screen */
    }

    /* Fixed and visible state */
    .topbar.state-visible {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        transform: translateY(0); /* Bring it back on screen */
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
