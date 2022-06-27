<template>
  <div class="w-full font-inter h-full main-content">
    <!-- Hero -->
    <div class="lg:h-full py-20 px-5 w-full bg-gradient-to-r from-primary-500/40 to-secondary-500/40 mix-blend-lighten">
      <div class="h-full">
        <main class="flex flex-col items-center text-center space-y-6">
          <h1 class="text-5xl font-semibold text-white">
            first membership club of its kind
          </h1>
          <div class="sm:hidden md:flex max-w-md mx-auto sm:flex sm:justify-center  md:mt-8">
            <Button
              btn-style="outlined"
              type="full"
              size="xlarge"
              @click="goToLP"
              ><span>JOIN</span></Button
            >
          </div>
        </main>
      </div>
    </div>
    <!-- Intro -->
    <div class="w-full py-20 flex items-center bg-primary-900">
      <div class="w-full px-5">
        <div class="m-auto flex flex-col text-center max-w-5xl space-y-6">
          <span class="text-white font-extrabold text-2xl md:text-3xl">
            Hotel &amp; Club Membership
          </span>
          <p class="text-black text-2xl font-medium">
            CIRKOL blends decentralized technology with our innate desire to connect with people in the physical world. Our experienced team has prepared a proprietary pro forma
          for the purposes of acquisition and redevelopment of a hotel and beach club in Miami, Florida. Once the
          project treasury goal is achieved, we will begin to act on these development goals and ultimately offer prime
          access to utilize incredible on-property amenities to our mNFT (membership Non Fungible Token holders). mNFT
          holders will also have the opportunity to buy and resell rNFTs reservation Non Fungible Tokens that operate
          as a decentralized booking platform for the hotel and beach club.
          </p>
        </div>
      </div>
    </div>
    <!-- Vision Cascade -->
    <div class="w-full bg-black" id="vision">
      <!-- Section ONE -->
      <div id="one">
        <div class="2xl:h-screen md:px-10 py-20 flex items-center w-full" data-aos="slide-up">
          <div
            class=" flex flex-col-reverse items-start space-y-10 lg:flex-row lg:space-y-0 lg:items-center lg:space-x-10 lg:justify-end w-full max-w-7xl mx-auto">
            <div class=" w-full lg:max-w-md flex flex-col items-start px-5 py-10 lg:py-0 space-y-8 ">
              <div class="w-full flex flex-col items-start space-y-2">
                <span class="text-primary-800 font-inter font-extrabold text-3xl mb-4">Membership Benefits</span>
                <div class="flex flex-col items-start space-y-10">
                  <p class="text-white font-inter font-normal text-lg text-left">
                    Lifetime Membership
                  </p>
                  <p class="text-white font-inter font-normal text-lg text-left">
                    Multiple Hoteln Club Locations
                  </p>
                  <p class="text-white font-inter font-normal text-lg text-left">
                    VIP Curated Perks 

                  </p>
                  <p class="text-white font-inter font-normal text-lg text-left">
                    We incentivize developers with a No-Code DeFi engine that makes it easier, cheaper, and faster for them to build DeFi and NFT projects, without any code. Instead builders use templates to create contracts.
                    This will be a game-changer in how DeFi products will be launched similar to how Shopify changed
                    e-commerce.
                  </p>
                </div>
              </div>
              <!-- <div class=" w-full sm:flex-row flex-col space-y-2 sm:space-y-0 items-start flex sm:items-center sm:space-x-2 " >
                <Button btn-style="outlined" type="full" @click="goToLPA"
                  ><span>Learn More</span></Button
                >
              </div> -->
            </div>
            <div class="max-w-4xl w-full relative overflow-hidden col-span-2 px-5">
              <div class="w-full overflow-hidden right-0">
                <img src="/images/collectiverse_layer_3.png" class="w-auto lg:w-2/3 mx-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Section TWO -->
      <div id="two">
        <div class="lg:h-screen md:px-10 py-20 flex items-center bg-primary-900 w-full" data-aos="slide-up">
          <div
            class=" flex flex-col-reverse items-start space-y-10 lg:flex-row-reverse lg:space-y-0 lg:items-center lg:space-x-10 lg:justify-end w-full max-w-7xl mx-auto">
            <div class=" w-full lg:max-w-md flex flex-col items-start px-5 py-10 lg:py-0 space-y-8 ">
              <div class="w-full flex flex-col items-start space-y-2">
                <span class="text-primary-800 font-inter font-extrabold text-3xl mb-4">More Assured Returns</span>
                <div class="flex flex-col items-start space-y-10">
                  <p class="text-white font-inter font-normal text-lg text-left">
                    CollectiVerse provides investors with more assured returns by combining our secure Layer 3 platform
                    with stablecoin-backed rewards.
                  </p>
                  <p class="text-white font-inter font-normal text-lg text-left">
                    In phase 1, fractional utility NFTs for 15 decentralized projects operating on our platform will be
                    sold at $25 each on Avalanche. 67% of the NFT proceeds will be stored in a reserve, initially paying
                    up to 91% APR in USDC stablecoin-backed rewards over 9 months. NFT holders control how these funds
                    get allocated for their project through voting to ensure decentralization.
                  </p>
                  <p class="text-white font-inter font-normal text-lg text-left">
                    Thus our fractional NFTs let you vote on key decisions, plus earn consistent rewards as you wait for
                    the currently unstable markets to pass through the turbulence.
                  </p>
                </div>
              </div>
              <!-- <div class=" w-full sm:flex-row flex-col space-y-2 sm:space-y-0 items-start flex sm:items-center sm:space-x-2 " >
                  <Button btn-style="outlined" type="full" @click="goToLPB"
                    ><span>Learn More</span></Button
                  >
                </div> -->
            </div>
            <div class="max-w-4xl w-full relative overflow-hidden col-span-2 px-5">
              <div class="w-full overflow-hidden right-0">
                <img src="/images/dual_tokens.png" class="w-auto lg:w-2/3 mx-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Section THREE -->
      <div id="three">
        <div class="lg:h-screen md:px-10 py-20 flex items-center w-full" data-aos="slide-up">
          <div
            class=" flex flex-col-reverse items-start space-y-10 lg:flex-row lg:space-y-0 lg:items-center lg:space-x-10 lg:justify-end w-full max-w-7xl mx-auto">
            <div class=" w-full lg:max-w-md flex flex-col items-start px-5 py-10 lg:py-0 space-y-8 ">
              <div class="w-full flex flex-col items-start space-y-2">
                <span class="text-primary-800 font-inter font-extrabold text-3xl mb-4">Building Community</span>
                <div class="flex flex-col items-start space-y-10">
                  <p class="text-white font-inter font-normal text-lg text-left">
                    To enhance the community of each project, we wrapped our ecosystem into a space metaverse. This
                    aligns with our deep passion for space and space travel.
                  </p>
                  <p class="text-white font-inter font-normal text-lg text-left">
                    The result is a DeFi ecosystem in a Decentraland-like metaverse where each project is either a
                    planet or moon. The metaverse lets you build a virtual society with other NFT holders in your
                    project.
                  </p>
                  <p class="text-white font-inter font-normal text-lg text-left">
                    To obtain virtual land in our metaverse, NFT holders have the option to compound, or virtually
                    terraform, each fractional NFT into an additional land NFT that pays 20% APR over 6 months. We plan
                    to gamify and build exciting utility for these land NFTs in the future.
                  </p>

                </div>
              </div>
              <!-- <div class=" w-full sm:flex-row flex-col space-y-2 sm:space-y-0 items-start flex sm:items-center sm:space-x-2 " >
                <Button btn-style="outlined" type="full" @click="goToLPC"
                  ><span>Learn More</span></Button
                >
              </div> -->
            </div>
            <div class="max-w-4xl w-full relative overflow-hidden col-span-2 px-5">
              <div class="w-full overflow-hidden right-0">
                <img src="/images/collectiverse-hands-raising.jpg" class="w-auto lg:w-full mx-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- Roadmap -->
    <div id="four">
      <div class="separator m-auto" id="roadmap">
        <img src="/images/collectiverse_planet.jpg" class="w-full" />
      </div>
    </div>

    <road-map />

    

      <div id="team">

      <!-- Intro -->
      <div class="w-full py-20 flex items-center bg-white">
        <div class="w-full px-5">
          <div class="m-auto flex flex-col text-center max-w-6xl space-y-8">
            <span class="text-primary-900 font-extrabold text-2xl md:text-3xl">
              Team
            </span>
            <h3 class="text-gray-500 text-2xl font-medium">
              Our founding team is doxxed, and with our developers, KYC’d by Obsidian Council. The team has significant
              experience across numerous fields: finance, crypto, NFTs, startups, development, design, and marketing.
              Our proven ability to execute plus personal relationships with leaders in the industry make us
              well-positioned to deliver on our vision.
            </h3>
          </div>
        </div>
      </div>


      <div class="mx-auto px-4 sm:w-full lg:w-3/4 bg-white py-8">
        <div class="max-w-7xl m-auto">
          <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8">
            <team-card v-for="(team, index, key) in teams" :key="key" :info="team" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AOS from "aos";
  import {
    onMounted
  } from "@vue/runtime-core";
  // import Button from "../../components/Layouts/Button.vue";
  import RoadMap from "../../components/Layouts/RoadMap.vue";
  import TeamCard from "../../components/cards/TeamCard.vue";
  const teams = [{
      name: "Allen Meizlish",
      title: "Real Estate & Developments",
      discription: "Allen is a time-tested Commercial Real Estate (CRE) entrepreneur who has been involved with 200+ multifamily, restaurant, retail, and hospitality projects in all stages of development planning, site selection, design, and construction.  Throughout his career, Allen’s projects have ranged from single retail location build-outs up to $800MM multi-phase, multi-year development projects. In addition to working on the acquisition and re-development planning for CIRKOL, Allen is the founder and partner in a number of real estate related ventures.  He is a the co-founder of the Washington, DC based real estate and concept development firm HELM Ventures which is currently working on millions of dollars of expansion and development projects in the region.  He also co-founded prop/tech company Jet micro-mobility which services some of the most coveted rental apartment buildings D.C. and is expanding into the Northeast and Southeast United States this year.   Allen has also grown and run the marketing firm conceptLAB for 7 years, which primarily services financial firms, funds commercial real estate firms, law firms and other mid sized businesses.",
      image: "/images/team/allen.jpg",
      linkedin: "https://www.linkedin.com/in/allenmeizlish/",
      twitter: "https://twitter.com/AllenMeizlish",
      instagram: "https://www.instagram.com/allen.meizlish/",
      
    },
    {
      name: "Hami Gendron",
      title: "Web3 Design & Development",
      discription: "Hami Gendron has been a premier innovator in the NFT and crypto space since 2017. Hami launched one of the first NFT marketplaces in existence and co-founded the first NFT the very first NFT charity on the blockchain and in the world: CryptOtitties in January of 2018.  Revolutionary, CryptoTitties entered as the 19th NFT project on the blockchain.  CryptoTitties charity fund for Breasties.org, donated 100 Eth, as well as a now retired prize fund for winners of their Motorboat Race. Hami's proprietary blockchain technology has laid the foundation for many successful projects in the Web 3 space.  Gendron has been involved in Augmented reality blockchain projects and space projects including Cosmic Paws’ Muttnick NFTs Project.",
      image: "/images/team/hami.jpg",
      linkedin: "https://www.linkedin.com/in/hamigendron/",
    },
    {
      name: "Manfred Delgado",
      title: "Graphic Design",
      discription: "Manfred Delgado is a multidisciplinary contemporary artist. Primarily self taught, Manfred moved from Costa Rica to Miami at a young age and has been producing artworks ever since. Delgado s work spans a variety of mediums and scales. He has worked on human scale works such as sculpture and canvas pieces, as well as Wynwood Murals in excess of 100 feet wide. His avant-garde murals throughout the United States have helped to distinguish himself as one of the preeminent artists of his generation. Manfred’s work takes inspiration from both urban environments and nature alike. He is known for his vibrant color choices and bold, yet perfectly balanced compositions. 'I find inspiration from everything around me, from conversations with friends and family, a visual incentive from nature, or simply a past moment or feeling I want to re-live thru my art' Manfred Delgado",
      image: "/images/team/manfred.jpg",
      instagram: "https://www.linkedin.com/in/mann_createz/",
      twitter: "https://twitter.com/mann_createz/",
      website: "https://manncreatez.com/",
    },

    {
      name: "Shreyas Naik",
      title: "Commercial Developer",
      discription: "Shreyas began his professional career building and developing hotels in the Northeast. He later transitioned into the Plastics Recycling business and for many years ran a medium sized plastic recycling company out of Alabama, Indiana, and Illinois. He is still a part of the plastics world as Vice President and board member of Niche Polymers, a company that manufacturers recycled based plastic resins. Currently Shreyas resides in Miami Florida and is the owner of Dorado Development Group LLC. Dorado Development focuses on residential and commercial construction in Florida, Alabama, Maryland and West Virginia.",
      image: "/images/team/shreyas.jpg",
      linkedin: "https://www.linkedin.com/in/ssnaik/",
    },
    {
      name: "Stephen Gamson",
      title: "Marketing & PR",
      discription: "Stephen Gamson is a renowned multimedia American Pop Artist. He has a unique style easily recognized for bold colors, iconic symbols and mass appeal. His art has been featured at Art Basel Miami Beach, the Scope Art Fair, the Red Dot Art Show, Art Miami, and in many solo and group exhibitions internationally. He is collected by 'A' list celebrities and corporations. The Gamson mark has enhanced brands such as Bacardi, Cafe Bustelo, Lamborghini, Brera Orologi, Fisker Automotive and UGG Australia. Stephen Gamson has been honored as an official Artist for the Monaco Grand Prix, the Sony Open, Miami Beach Polo, ING Miami Marathon, the Necker Cup, Sarasota Polo, the Bacardi Cup, and the City of Miami's 114th & 115th Birthday celebrations. He was also awarded a key to Miami-Dade County and has a day in his name in Miami Beach. In addition his artwork has made a positive impact through charitable causes. Gamson works from his Wynwood-Miami Studio and gets much of his influence from its multi cultural and vibrant surroundings.",
      image: "/images/team/stephen.jpg",
      instagram:"https://www.instagram.com/gamsonart/",
      linkedin: "https://www.linkedin.com/in/stephen-gamson-21113682/",
      website:"https://www.gamsonart.com/"
    },
  ];
  export default {
    components: {
      // Button,
      RoadMap,
      TeamCard
    },
    setup() {
      onMounted(() => {
        AOS.init();
      });
      // const goToLP = () => {

      //   window.location = "#one";
      // };
      // const goToLPA = () => {

      //   window.location = "#two";
      // };
      // const goToLPB = () => {

      //   window.location = "#three";
      // };
      // const goToLPC = () => {

      //   window.location = "#four";
      // };
      return {
        // goToLP,
        // goToLPA,
        // goToLPB,
        // goToLPC,
        teams,
      };
    },
  };
</script>
<style>
  .main-content {
    scroll-behavior: smooth;
  }
</style>