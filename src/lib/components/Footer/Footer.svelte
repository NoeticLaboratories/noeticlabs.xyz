<script>
    import { onMount } from "svelte";

    let footerVideo;

    onMount(() => {
        if (!footerVideo) return;

        // Set your webp video path
        footerVideo.src = "/assets/irises-video.mp4";

        // Handle the fade in/out transition
        const handleVideoTransition = () => {
            // Fade in after video starts
            setTimeout(() => {
                footerVideo.style.opacity = "1";
            }, 500);

            // Start fade out before video ends
            footerVideo.addEventListener("timeupdate", () => {
                if (footerVideo.duration - footerVideo.currentTime < 1.5) {
                    footerVideo.style.opacity = "0";
                }
            });

            // When video ends, reset and play again after delay
            footerVideo.addEventListener("ended", () => {
                setTimeout(() => {
                    footerVideo.currentTime = 0;
                    footerVideo
                        .play()
                        .then(() => {
                            setTimeout(() => {
                                footerVideo.style.opacity = "1";
                            }, 500);
                        })
                        .catch((err) =>
                            console.error("Error playing video:", err),
                        );
                }, 1500); // 1.5s black screen between loops
            });
        };

        // Start the video and transitions
        footerVideo.addEventListener("loadedmetadata", () => {
            footerVideo
                .play()
                .then(handleVideoTransition)
                .catch((err) => console.error("Error playing video:", err));
        });
    });
</script>

<footer>
    <div class="footer-video-container">
        <!-- Video element -->
        <video
            bind:this={footerVideo}
            class="footer-background-video"
            playsinline
            muted
        ></video>

        <!-- Black overlay for readability -->
        <div class="footer-overlay"></div>
    </div>

    <div class="footer-content">
        <p>© 2025 Noetic Labs. All rights reserved.</p>
    </div>
</footer>

<style>
    footer {
        position: absolute;
        margin: 0;
        left: 0;
        min-height: 300px;
        width: 100%;
        text-align: center;
        padding: 2rem 0;
        color: var(--nlds-text-secondary);
        font-size: 0.9rem;
        overflow: hidden;
    }

    .footer-video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .footer-background-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0; /* Start invisible for fade-in */
        transition: opacity 1.5s ease-in-out;
    }

    .footer-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.7; /* Adjust for desired text readability */
        z-index: 1;
    }

    .footer-content {
        position: relative;
        z-index: 2; /* Position above the video and overlay */
    }
</style>
