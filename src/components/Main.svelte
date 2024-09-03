<script>
    import Step from "./Step.svelte";
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();
    inject({mode:  'production'});

 let steps = [
  {
    name: "Turkish University Platform (Backend Engineer)",
    icon: "fa-solid fa-university", // Consider an icon representing education
    description:
      "Built a platform for students in Turkey to search for universities and educational opportunities. Utilized Node.js, MySQL, and Express.js for a dynamic platform with a control panel. (currently offline)",
      link:"https://180degreesacademy.net/"
  },
  {
    name: "Former Software Engineer at Unifi Solutions",
    icon: "fa-solid fa-list-check",
    description:
      "Led backend development for hotel management ensuring real-time notifications with Firebase, optimized system performance improving response times and user experience, maintained high server availability and seamless operations, collaborated with teams to design and launch new features, and enhanced security with robust authentication mechanisms.",
      link:"https://www.unifi.solutions"
  },
  {
    name: "QBite eMenu System (CEO & Backend Engineer)",
    icon: "fa-solid fa-recycle",
    description:
      "Led the development of an eco-friendly e-menu system replacing paper menus at restaurants. Built with Node.js, NestJS, MySQL, and Prisma. Ensured scalability, multi-language support, and seamless integration with the frontend (q-bite.net) (currently offline).",link:"https://github.com/mohrazzak/qbite"
  },
];
function scrollToTouchSection() {

  const touchSection = document.getElementById("touch"); // Get the element with ID "touch"
  if (touchSection) { // Check if the element exists
    touchSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the element smoothly
  } else {
    console.error("Element with ID 'touch' not found!"); // Error message if element doesn't exist
  }
}
    let benefits = [
        {
            metric: "10x",
            name: "Driven by Passion",
            description:
                "My journey into coding wasn't sparked by a textbook, but by a burning passion for creation. From the moment I delved into the world of web development, I was hooked. Witnessing the ability to translate ideas into interactive experiences ignited a fire within me. This passion fuels my constant learning, pushing me to master new technologies and tackle complex challenges.",
        },
        {
            name: "Problem-Solving Prodigy",
            description:
                "Unraveling intricate problems is like a game to me! The thrill of dissecting an issue, identifying its core, and crafting an elegant solution brings immense satisfaction. Whether it's optimizing code performance or designing a user-friendly interface, I relish the challenge of finding creative and effective solutions.",
        },
        {
            name: "Learning Like a Lightning Bolt",
            description:
                "The ever-evolving world of technology excites me! I possess a natural curiosity and an insatiable hunger to learn new things. My self-taught journey is a testament to this; I devour online resources, actively seek out learning opportunities, and possess the ability to grasp new concepts quickly. This rapid learning allows me to stay at the forefront of the industry, constantly adapting and growing as a developer.",
        },
    ];

    
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
              <h2 class="font-semibold text-4xl sm:text-3xl md:text-5xl">
                Hi! I'm<br /> <span class="poppins text-violet-400">Mohammad</span> Abdalrazzak
                <br />Full Stack
                <h1><span class="poppins text-violet-400 m-0 p-0">Mohammad</span> Abdalrazzak</h1>
                <br />Full Stack
                <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400"> favorite tech</span> includes TypeScript
                (Nest.js or Express.js), Node.js & (React or SvelteKit) & MySQL & Prisma!
            </p>
 <button
  id="contact-button"  class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
  on:click={scrollToTouchSection}  >
  <div
    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
  />
  <h4 class="relative z-9">Get in touch &rarr;</h4>
</button>
        </div>
        <div class="relative shadow-2xl place-items-center hidden md:grid">
            <img
                src={"images/profile2.png"}
                alt="Portrait of Mohammad Abdalrazzak smiling"
    class="object-cover z-[2] max-h-[65vh] "
    srcset={"images/profile2.png 1280w"}
    loading="lazy"
    decoding="async"

            />
        </div>
    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>

                <p>
                    
            Built a platform for students in Turkey to search for universities and educational opportunities. Utilized <strong
                        class="text-violet-400"
                        > Node.js , MySQL, and Express.js</strong
                    > for a dynamic platform with a control panel (180degreesacademy.net).
                </p>
            </Step>
            <Step step={steps[1]} >
                <p>
                       Led backend development for hotel management, ensuring real-time notifications with Firebase.
Optimized system performance, improving response times by 30% and enhancing user experience.
Maintained high server availability, achieving 99.9% uptime and seamless operations.
Collaborated with cross-functional teams to design and launch new features.
Enhanced security with robust authentication mechanisms, increasing data protection by 40%.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                   Led the development of an eco-friendly e-menu system replacing paper menus at restaurants. Built with <strong
                        class="text-violet-400">Node.js, NestJS, MySQL, and Prisma. </strong>Ensured scalability, multi-language support, and seamless integration with the frontend
                </p>
            </Step>
        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >

        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <!-- <div class="flex flex-col gap-2 mx-auto">
                    <div class="flex items-end gap-4">
                        <p
                            class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                        >
                            {benefit.metric}
                        </p>
                        <p
                            class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                        >
                            {benefit.name}
                        </p>
                    </div>
                    <p class="text-center italic">- {benefit.description}</p>
                </div> -->
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
            The <span class="text-violet-400">Complete</span> Package
        </h5>
        <div
            class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
        >
            <table class="bg-white text-slate-700 rounded text-center">
                <thead class={"border-b border-solid border-slate-200  "}>
                    <tr class="">
                        <th />
                        <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                        <th
                            class="bg-violet-700 text-white whitespace-nowrap p-4 px-8"
                            >Me</th
                        >
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Dedication</td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Critical Thought</td
                        >
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr>
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Interpersonal Skills</td
                        >
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-t border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Progamming Ability</td
                        >
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-slate-500" /></td>
                        <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div>
        <p class="mx-auto">So why not invest?</p>
    </section>
</main>
