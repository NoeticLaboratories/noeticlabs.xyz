<script>
    import ArrowRight from "carbon-icons-svelte/lib/ArrowRight.svelte";

    // Props
    export let link = "";
    export let imageUrl = "";
    export let title = "";
    export let description = "";
    export let isDarkImage = true; // Determines text/arrow color based on background

    // Compute text color based on image darkness
    $: textColor = isDarkImage
        ? "var(--nlds-inverse-01)"
        : "var(--nlds-text-primary)";

    // Handle click if link is provided
    function handleClick() {
        if (link) {
            window.location.href = link;
        }
    }
</script>

<div
    class="nlds-image-card"
    class:clickable={link}
    on:click={handleClick}
    on:keypress={(e) => e.key === "Enter" && handleClick()}
    tabindex={link ? 0 : undefined}
    role={link ? "link" : "region"}
    aria-label={title}
>
    <div class="aspect-ratio-box">
        <div class="card-background" style="background-image: url({imageUrl});">
            <div class="card-content">
                <div class="text-container">
                    {#if title}
                        <h3 style="color: {textColor};">{title}</h3>
                    {/if}
                    {#if description}
                        <p style="color: {textColor};">{description}</p>
                    {/if}
                </div>

                <div class="arrow-container" style="color: {textColor};">
                    <ArrowRight size={20} />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .nlds-image-card {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 12.5rem; /* 200px */
        border: 1px solid var(--nlds-border-color);
        background-color: var(--nlds-layer-02);
        transition: 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
        overflow: hidden;
        /* No rounded corners as requested */
        border-radius: 0;
    }

    /* Aspect ratio box to maintain 1:1 ratio */
    .aspect-ratio-box {
        position: relative;
        width: 100%;
        /* padding-top: 100%; /* 1:1 aspect ratio */
        padding-top: 80%;
    }

    .clickable {
        cursor: pointer;
    }

    .card-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .card-background:hover {
        box-shadow: 10;
    }

    .card-content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }

    .text-container {
        margin-bottom: auto;
        max-width: 75%;
    }

    .arrow-container {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }

    h3 {
        font-family: var(--nlds-font-sans);
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.375;
        letter-spacing: 0;
        margin: 0 0 0.5rem 0;
    }

    p {
        font-family: var(--nlds-font-sans);
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.29;
        letter-spacing: 0.16px;
        margin: 0;
    }

    .clickable:hover {
        transform: translateY(-2px);
    }

    .clickable:focus {
        outline: 2px solid var(--nlds-accent-primary);
        outline-offset: -2px;
    }
</style>
