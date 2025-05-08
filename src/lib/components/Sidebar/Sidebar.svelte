<script>
    import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
    import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
    import LogoHf from "$lib/icons/LogoHF.svelte";

    export let isOpen = false;
</script>

<aside class="sidebar" class:open={isOpen}>
    <nav class="sidebar-nav">
        <ul>
            <li>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <LogoGithub size={24} />
                    <span class="link-text">GitHub</span>
                </a>
            </li>
            <li>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <LogoLinkedin size={24} />
                    <span class="link-text">LinkedIn</span>
                </a>
            </li>
            <li>
                <a
                    href="https://huggingface.co/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="HuggingFace"
                >
                    <LogoHf size={24} />
                    <!-- Using Education as a substitute for HuggingFace -->
                    <span class="link-text">HuggingFace</span>
                </a>
            </li>
        </ul>
    </nav>
</aside>

<style>
    .sidebar {
        position: fixed;
        left: 0;
        top: 3rem; /* Matches topbar height */
        bottom: 0;
        width: 3rem;
        background-color: var(--nlds-bg-secondary);
        overflow: hidden;
        z-index: 900;
        transition:
            width 0.3s ease,
            transform 0.3s ease;
    }

    @media (max-width: 767px) {
        .sidebar {
            transform: translateX(-100%);
            width: 14rem;
        }

        .sidebar.open {
            transform: translateX(0);
        }
    }

    .sidebar-nav {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    li {
        width: 100%;
    }

    a {
        display: flex;
        align-items: center;
        color: var(--nlds-text-primary);
        padding: 0.75rem 1rem;
        text-decoration: none;
        transition: background-color 0.2s;
    }

    a:hover {
        background-color: var(--nlds-accent-bg-hover);
        text-decoration: none;
    }

    .link-text {
        margin-left: 1rem;
        opacity: 0;
        white-space: nowrap;
    }

    @media (max-width: 767px) {
        .link-text {
            opacity: 1;
        }
    }

    /* Show link text on hover on desktop */
    @media (min-width: 768px) {
        .sidebar:hover {
            width: 14rem;
        }

        .sidebar:hover .link-text {
            opacity: 1;
        }
    }
</style>
