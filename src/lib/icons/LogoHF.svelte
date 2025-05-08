<script lang="ts">
    export let classNames = "";
    export let size = 24;
</script>

<div
    class={`logo-container ${classNames}`}
    style:width={`${size}px`}
    style:height={`${size}px`}
    style:display="inline-flex"
    style:align-items="center"
    style:justify-content="center"
>
    <img
        src="/assets/hf-logo-pirate.svg"
        alt="Hugging Face logo"
        style="max-width: 100%; max-height: 100%; width: auto; height: auto; display: block;"
    />
</div>
