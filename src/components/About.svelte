<script>
    import { getContext } from 'svelte';
    import { fade } from 'svelte/transition';
    import AboutContent from './AboutContent.svelte';

    const { open } = getContext('simple-modal');

    const showAboutPopup = () => {
        open(
            AboutContent,
            {
                message: "About"
            },
            {
                styleBg: {
                    background: 'radial-gradient(transparent, black)',
		            'background-blend-mode': 'color'
                },
                styleWindowWrap: {
                    margin: '4rem'
                },
                styleWindow: {
                    border: '2px solid #4538D4',
                    boxShadow: 'inset 0 0 0 2px white, 0 0 0 2px white',
                    background: '#3D529A'
                },
                styleContent: {
                    color: 'white'
                },
                styleCloseButton: {
                    borderRadius: 10,
                    boxShadow: '0 0 0 2px white',
                    color: 'white',
                    background: '#4538D4'
                },
                transitionWindow: fade,
                transitionWindowProps: {
                    y: 100,
                    duration: 1000
                },
            }
        );
    };
</script>
  
<section>
    <span class="text-white cursor-pointer" on:click={showAboutPopup}>About</span>
</section>

<style>
    section {
        padding-top: 0.5em;
    }
</style>