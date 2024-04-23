<script>
    export let y;

    export let tabs = [
        { name: "Projects", link: "#projects" },
        { name: "About me", link: "#about" },
        // { name: "Contact", link: "" },
        // { name: '', link: '' },
    ];

    const downloadLink = "../../Mohammad-Abdalrazzak.pdf";
let isDownloading = false;

    function downloadFile() {
         if (!isDownloading) {
    isDownloading = true;
        fetch(downloadLink)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Mohammad-Abdalrazzak-Resume-2024-04-23.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => console.error('Download failed:', error));}
    }

</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950 border-violet-950"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium">
        <b class="font-bold poppins">Mohammad</b> <span class="">Abdalrazzak</span>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-violet-400"
                target={index === 2 ? "_blank" : ""}
            >
                <p>{tab.name}</p>
            </a>
        {/each}

        <button
        
        on:click={downloadFile}
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full cursor-pointer bg-white text-slate-950"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <p class="relative z-9">Download CV</p>
        </button>
    </div>
</header>
