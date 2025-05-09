<script lang="ts">
    // Props for customizing the pattern
    export let width: string = "100%";
    export let height: string = "100%";
    export let lineColor: string = "var(--nlds-text-primary)";
    export let borderColor: string = "var(--nlds-text-primary)";
    export let lineSpacing: number = 12;
    export let lineThickness: number = 2;

    // Generate a unique ID for the pattern once
    const patternId = `diagonal-lines-${Math.random().toString(36).substring(7)}`;
</script>

<div
    class="decorative-pattern"
    style="width: {width}; height: {height}; border-color: {borderColor};"
>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern
                id={patternId}
                patternUnits="userSpaceOnUse"
                width={lineSpacing}
                height={lineSpacing}
                patternTransform="rotate(45)"
            >
                <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2={lineSpacing}
                    stroke={lineColor}
                    stroke-width={lineThickness}
                />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#{patternId})" />
    </svg>
</div>

<style>
    .decorative-pattern {
        border: 0px solid;
        border-radius: 2px;
        box-sizing: border-box;
    }
</style>
