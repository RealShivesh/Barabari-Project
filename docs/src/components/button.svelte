<script>
    export let //
        href,
        type = "primary",
        size = "md";
</script>

{#if href}
    <a href class="button {type}" {...$$restProps}>
        <slot />
    </a>
{:else}
    <button class="button {type}" {...$$restProps}>
        <slot />
    </button>
{/if}

<style lang="scss">
    .button {
        cursor: pointer;
        min-width: 80px;
        outline: none;
        padding: 8px 15px;
        border: 1px solid transparent;
        &:hover {
            text-decoration: none;
        }
        transition: all 0.1s ease;
    }
    .primary {
        background: var(--yellow);
        color: black;
        &:hover {
            background: var(--yellow-hl);
        }
    }
    .secondary {
        background: var(--purple);
        color: #fff;
        &:hover {
            background: var(--indigo);
        }
    }
    .action {
        background: transparent;
        color: var(--purple);
        border: 1px solid var(--purple);
        &:hover {
            color: #fff;
            background: var(--purple);
        }
    }
</style>
