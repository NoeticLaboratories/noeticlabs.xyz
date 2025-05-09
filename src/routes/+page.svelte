<script lang="ts">
    // Component imports
    import { Card } from "@noeticlabs/nlds-svelte";
    import { Button } from "@noeticlabs/nlds-svelte";
    import ImageCard from "$lib/components/ImageCard/ImageCard.svelte";

    // Import carbon icons
    import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
    import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
    import LogoHf from "$lib/icons/LogoHF.svelte";
    import Rocket from "carbon-icons-svelte/lib/Rocket.svelte";
    import SearchAdvanced from "carbon-icons-svelte/lib/SearchAdvanced.svelte";
    import Model from "carbon-icons-svelte/lib/Model.svelte";

    // Social media links with icons
    const socialLinks = [
        {
            icon: LogoHf,
            label: "Hugging Face",
            url: "https://huggingface.co/NoeticLabs",
        },
        {
            icon: LogoGithub,
            label: "GitHub",
            url: "https://github.com/NoeticLaboratories",
        },
        // {
        //     icon: LogoLinkedin,
        //     label: "LinkedIn",
        //     url: "https://linkedin.com/company/noeticlabs",
        // },
    ];

    // Content for the main sections
    const latestNews = [
        {
            id: "Lumen-8b-05-2025",
            title: "Lumen-8b-05-2025 Launch",
            date: "May 8, 2025",
            summary:
                "Introducing Lumen, our first LLM specialized in assisting with research",
            url: "/news/ai-model-launch",
        },
        {
            id: "NLDS",
            title: "Noetic Labs Design System",
            date: "April 1, 2025",
            summary:
                "Noetic Labs begins its journey to research and build better AI tools for the future...",
            url: "https://design.noeticlabs.xyz",
        },
    ];

    // Projects section content
    const projects = [
        {
            id: "lumen-8b-05-2025",
            title: "Lumen-8b-05-2025",
            description:
                "Our first fine-tuned AI language model, specifically optimized for academic research and complex reasoning tasks. Built on Qwen3-8B with specialized datasets for enhanced performance.",
            status: "Available Now",
            icon: Model,
            url: "https://huggingface.co/NoeticLabs/Lumen-8b-05-2025",
        },
        {
            id: "NLDS",
            title: "Noetic Labs Design System",
            description: "Our take on the Carbon Design System",
            status: "Alpha Release",
            icon: Rocket,
            url: "https://design.noeticlabs.xyz",
        },
    ];
</script>

<div class="page-container">
    <div class="construction-banner">
        <p>
            🚧 This website is currently under construction. Some links may not
            work! 🚧
        </p>
    </div>

    <header>
        <!-- <div class="header-background"></div> -->
        <div class="logo-container">
            <!-- <h1 class="company-name">Noetic Labs</h1> -->
            <p class="tagline">Researching a better future</p>
        </div>
        <div class="social-links">
            {#each socialLinks as link (link.url)}
                <a
                    href={link.url}
                    class="social-link"
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svelte:component this={link.icon} size={24} />
                </a>
            {/each}
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <div class="hero-container">
            <section class="hero-content">
                <h2 class="hero-title">AI Research for Human Progress</h2>
                <div>
                    <p class="hero-description">
                        At Noetic Labs, we're advancing AI with purpose. Our
                        specialized language models, thoughtful datasets, and
                        intuitive interfaces are designed to enhance human
                        potential and solve practical challenges. From research
                        assistants to design systems, we're laying the
                        foundation for more accessible and effective AI
                        experiences.
                    </p>
                    <div class="hero-actions">
                        <Button kind="primary" href="/about"
                            >Explore Our Vision</Button
                        >
                        <Button kind="secondary" href="#projects"
                            >See Our Work</Button
                        >
                    </div>
                </div>
            </section>

            <div class="hero-image">
                <ImageCard
                    link="/some-page"
                    imageUrl="/assets/irises.png"
                    title="Our Vision"
                />
            </div>
        </div>

        <!-- Latest News Section -->
        <section class="content-section">
            {#each latestNews as item, i (item.id)}
                {#if i === 0}
                    <a href={item.url} class="news-item">
                        <span class="news-label">latest</span>
                        <span class="news-summary">{item.summary}</span>
                    </a>
                {/if}
            {/each}
        </section>

        <!-- Who We Are Section -->
        <section class="content-section">
            <h2>Who We Are</h2>
            <p>
                Noetic Labs is a student-led innovation lab exploring the
                frontiers of AI, technology, and human connection. We're
                passionate about making AI more accessible and impactful through
                innovative research and thoughtful implementation.
            </p>
            <p>
                Founded in early 2025, our team combines expertise in machine
                learning, design thinking, and software development to create
                solutions that bridge the gap between cutting-edge AI
                capabilities and real-world human needs.
            </p>
            <Button kind="primary" href="/about">Learn More About Us</Button>
        </section>

        <!-- Projects Section -->
        <section class="content-section" id="projects">
            <h2>Our Projects</h2>
            <div class="projects-grid">
                {#each projects as project (project.id)}
                    <Card>
                        <div class="project-card">
                            <div class="project-icon">
                                <svelte:component
                                    this={project.icon}
                                    size={32}
                                />
                            </div>
                            <h3 class="project-title">{project.title}</h3>
                            <span class="project-status">{project.status}</span>
                            <p class="project-description">
                                {project.description}
                            </p>
                            <Button kind="ghost" href={project.url}
                                >Learn more</Button
                            >
                        </div>
                    </Card>
                {/each}
            </div>
        </section>

        <!-- Research Focus Section -->
        <section class="content-section">
            <h2>Our Research Focus</h2>
            <div class="research-areas">
                <div class="research-area">
                    <h3>Natural Language Processing</h3>
                    <p>
                        Advancing contextual understanding and semantic analysis
                        in AI language models.
                    </p>
                </div>
                <div class="research-area">
                    <h3>Human-AI Interaction</h3>
                    <p>
                        Creating intuitive interfaces that bridge the gap
                        between complex AI systems and users.
                    </p>
                </div>
                <div class="research-area">
                    <h3>Responsible AI Development</h3>
                    <p>
                        Ensuring our technology is developed with ethics,
                        fairness, and transparency at its core.
                    </p>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="content-section contact-section">
            <h2>Connect With Us</h2>
            <p class="contact-text">
                Interested in our research or want to collaborate? We'd love to
                hear from you.
            </p>
            <Button kind="primary" href="mailto:info@noeticlabs.xyz"
                >Get in Touch</Button
            >
        </section>
    </main>

    <footer>
        <p>© 2025 Noetic Labs. All rights reserved.</p>
    </footer>
</div>

<style>
    .page-container {
        background-color: var(--nlds-bg-primary);
        width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
    }

    .construction-banner {
        background-color: var(--nlds-accent-primary);
        border: 2px solid;
        border-left: 12px solid;
        border-radius: 2px;
        border-color: var(--nlds-accent-primary-active);
        text-align: center;
        padding: 0.5rem;
        font-weight: 500;
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .construction-banner p {
        color: white;
    }

    /* Header styles */
    header {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: auto;
        justify-content: center;
        /* background-color: var(--nlds-accent-primary); */
        /* margin: 1rem 0; */
        padding: 3rem 0;
        margin: 2rem 0;

        border-left: 12px solid;
        border-bottom: 2px solid;
        border-color: var(--nlds-text-primary);
        border-radius: 2px;
    }

    .header-background {
        position: absolute;
        top: 0;
        width: 100vw; /* More elongated horizontally */
        height: 500px; /* Lower height for a flatter look */
        background-color: var(--nlds-accent-primary);
        z-index: 0;
        opacity: 0.6;
    }

    .logo-container,
    .social-links {
        position: relative;
        z-index: 1;
    }

    .logo-container {
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .company-name {
        font-size: 3.5rem;
        margin: 0;
        color: var(--nlds-text-primary);
    }

    .tagline {
        font-family: "Alegreya", serif;
        font-style: normal;
        font-size: 3.5rem;
        margin: 0.5rem 0 0;
        color: var(--nlds-text-primary);
    }

    .social-links {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid;
        border-color: var(--nlds-text-primary);
        color: var(--nlds-text-primary);
        transition:
            background-color 0.2s,
            transform 0.2s;
    }

    .social-link:hover {
        background-color: var(--nlds-bg-secondary);
        transform: scale(1.1);
    }

    /* Main content styles */
    main {
        max-width: auto;
        margin: 0 auto;
    }

    /* Hero section */
    .hero-container {
        display: flex;
        gap: 2rem;
        align-items: stretch;
        margin-bottom: 4rem;
    }

    .hero-content {
        flex: 2;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .hero-image {
        flex: 1;
        max-width: 600px; /* Optional: adjusts card width */
    }

    .hero-title {
        font-size: 3rem;
        font-weight: lighter;
        margin-bottom: 1rem;
        color: var(--nlds-text-primary);
        border-bottom: none;
    }

    .hero-description {
        font-size: 1.2rem;
        font-weight: lighter;
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .hero-actions {
        display: flex;
        gap: 1rem;
    }

    /* Content sections */
    .content-section {
        margin-bottom: 4rem;
    }

    /* News styles */
    .news-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 1rem;
        background-color: var(--nlds-bg-primary);
        text-decoration: none;
        color: var(--nlds-text-primary);

        border-bottom: 2px solid;
        border-left: 12px solid;
        border-radius: 2px;
        border-color: var(--nlds-text-primary);
    }

    .news-item:hover {
        background-color: var(--nlds-bg-secondary);
    }

    .news-label {
        font-weight: normal;
        color: white; /* Better contrast on purple */
        background-color: var(--nlds-accent-primary);
        padding: 2px 6px;
        border-radius: 2px;
    }

    .news-summary {
        color: var(--nlds-text-primary);
    }

    /* Section headings */
    h2 {
        margin-top: 0;
        border-bottom: 1px solid var(--nlds-border-color);
        padding-bottom: 15px;
        font-size: 1.8rem;
        color: var(--nlds-text-primary);
    }

    h3 {
        margin-top: 0;
        color: var(--nlds-text-primary);
        font-size: 1.3rem;
    }

    p {
        color: var(--nlds-text-secondary);
        line-height: 1.6;
    }

    /* Projects section */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .project-card {
        padding: 1.5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .project-icon {
        margin-bottom: 1rem;
        color: var(--nlds-text-primary);
    }

    .project-title {
        margin: 0 0 0.5rem;
    }

    .project-status {
        display: inline-block;
        font-family: "IBM Plex Mono", monospace;
        font-size: 0.8rem;
        color: var(--nlds-text-secondary);
        background-color: var(--nlds-layer-accent-01);
        padding: 4px 8px;
        margin-bottom: 1rem;
        border-radius: 2px;
    }

    .project-description {
        flex-grow: 1;
        margin-bottom: 1.5rem;
    }

    /* Research areas */
    .research-areas {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }

    .research-area {
        padding: 1.5rem;
        background-color: var(--nlds-bg-secondary);
    }

    .research-area h3 {
        margin-top: 0;
    }

    /* Contact section */
    .contact-section {
        text-align: center;
        padding: 3rem;
        background-color: var(--nlds-bg-secondary);
    }

    .contact-text {
        max-width: 600px;
        margin: 0 auto 2rem;
    }

    /* Footer */
    footer {
        text-align: center;
        padding: 2rem 0;
        color: var(--nlds-text-secondary);
        font-size: 0.9rem;
    }

    /* Media queries for responsiveness */
    @media (max-width: 768px) {
        .hero-container {
            flex-direction: column;
        }

        .hero-image {
            width: 100%;
            max-width: 100%;
            order: -1; /* Optional: this puts the image above the text on mobile */
        }

        .hero-content {
            width: 100%;
        }

        .hero-actions {
            justify-content: flex-start;
        }

        .projects-grid {
            grid-template-columns: 1fr;
        }

        .research-areas {
            grid-template-columns: 1fr;
        }
    }
</style>
