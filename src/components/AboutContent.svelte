<section class="flex flex-col gap-8 cursor-default pr-8">
    <div class="flex flex-row gap-4 group">
    <img src="photos/ulfur-profile.png" alt="Ulfur profile pic" />
        <div>
            <span class="text-highlight-primary text-xl font-semibold mb-2 mr-2">Úlfur</span>
            <span class="text-neutral-300 text-lg">Developer, Workplace Medic</span>
            <p class="bio-text">Úlfur 'Nice' is considered a diety by select tribes in the rural parts of the Scottish Higherlands. A man of mystery and mythical status, the Dalai Lama is to have said of him "His hugs, so warm and full of compassion to me as a human being. He made me question my oath of celebacy".</p>
        </div>
    </div>
    <div class="flex flex-row gap-4 group">
        <div>
            <span class="name">Larus Thor</span>
            <span class="text-neutral-300 text-lg">Developer</span>
            <p class="bio-text">Larus Thor grew up returning shopping carts thinking they were wayward unicorns. The subject of numerous medical journals around the world due to his ability to count in nanoseconds.</p>
        </div>
        <img src="photos/larus-thor-silly.png" alt="Larus Thor profile pic" />
    </div>
    <div class="flex flex-row gap-4 group">
        <img src="photos/hilmar-profile.png" alt="Hilmar profile pic"/>
        <div>
            <span class="name">Hilmar Thor</span>
            <span class="text-neutral-300 text-lg">Graphic Design</span>
            <p class="bio-text">Hilmar 'Babyface' the First has expressed the desire to remove my eye balls via my birth canal if I write anything weird about him. So all I say is that he is a stand up guy! And even when sitting or laying down, he is a fantastic individual. If you see him, give him a hug!</p>
        </div>
    </div>
    <div class="flex flex-row gap-4 group">
        <div>
            <span class="name">Alechandrina</span>
            <span class="text-neutral-300 text-lg">Developer, Consultant</span>
            <p class="bio-text">Not much is confirmed of this shadowy figure. Originating from somewhere in the North of South America, she has confirmed kills all over the globe. Ruthless and unyielding and will stop at nothing until the job is completed without fault. Known victims: Maduro's pet parrot, Kevin Spacey's gerbil and Harvey Weinstein's pet rock.</p>
        </div>
        <img src="photos/alecha-profile.png" alt="Alecha profile pic" />
    </div>
</section>

<style lang="postcss">
    section img {
        @apply w-16 h-16 mt-4 rounded-full border border-white group-hover:border-highlight-primary;
    }

    section p.bio-text {
        @apply group-hover:text-highlight-light text-sm;
    }

    section .name {
        @apply text-highlight-primary text-xl font-semibold mb-2 mr-2;
    }
</style>