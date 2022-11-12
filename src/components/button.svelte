<script>
    export let //
        href,
        type = "primary",
        size = "md";
</script>

{#if href}
    <a href class="button rx5 m10 {type + ' ' + size}" {...$$restProps}>
        <slot />
    </a>
{:else}
    <button class="button rx5 m10 {type + ' ' + size}" {...$$restProps}>
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
    .md {
        font-size: 1em;
    }
    .lg {
        font-size: 2em;
        min-width: 120px;
    }
    @media (max-width: 600px) {
        .lg {
            font-size: 1em;
            min-width: 90px;
        }
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
