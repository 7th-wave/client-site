<template>
  <div class="w-full font-inter h-full main-content">
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
  // import Button from "../../components/Layouts/Button.vue";
  // import RoadMap from "../../components/Layouts/RoadMap.vue";
  import TeamCard from "@/components/cards/TeamCard.vue";
  const teams = [{
      name: "Allen Meizlish",
      title: "Real Estate & Development",
      discription: "Allen is a time-tested Commercial Real Estate (CRE) entrepreneur who has been involved with 200+ multifamily, restaurant, retail, and hospitality projects in all stages of development planning, site selection, design, and construction.  Throughout his career, Allen’s projects have ranged from single retail location build-outs up to $800MM multi-phase, multi-year development projects. In addition to working on the acquisition and re-development planning for CIRKOL, Allen is the founder and partner in a number of real estate related ventures.  He is a the co-founder of the Washington, DC based real estate and concept development firm HELM Ventures which is currently working on millions of dollars of expansion and development projects in the region.  He also co-founded prop/tech company Jet micro-mobility which services some of the most coveted rental apartment buildings D.C. and is expanding into the Northeast and Southeast United States this year.   Allen has also grown and run the marketing firm conceptLAB for 7 years, which primarily services financial firms, funds commercial real estate firms, law firms and other mid sized businesses.",
      image: "/images/team/allen.jpg",
      linkedin: "https://www.linkedin.com/in/kulsingh/",
      twitter: "",
    },
    {
      name: "Hami Gendron",
      title: "Web3 Design & Development",
      discription: "Hami Gendron has been a premier innovator in the NFT and crypto space since 2017. Hami launched one of the first NFT marketplaces in existence and co-founded the first NFT the very first NFT charity on the blockchain and in the world: CryptOtitties in January of 2018.  Revolutionary, CryptoTitties entered as the 19th NFT project on the blockchain.  CryptoTitties charity fund for Breasties.org, donated 100 Eth, as well as a now retired prize fund for winners of their Motorboat Race. Hami's proprietary blockchain technology has laid the foundation for many successful projects in the Web 3 space.  Gendron has been involved in Augmented reality blockchain projects and space projects including Cosmic Paws’ Muttnick NFTs Project.",
      image: "/images/team/hami.jpg",
      linkedin: "https://www.linkedin.com/in/hamigendron/",
      twitter: "",
    },
    {
      name: "Manfred Delgado",
      title: "Graphic Design",
      discription: "Manfred Delgado is a multidisciplinary contemporary artist. Primarily self taught, Manfred moved from Costa Rica to Miami at a young age and has been producing artworks ever since. Delgado s work spans a variety of mediums and scales. He has worked on human scale works such as sculpture and canvas pieces, as well as Wynwood Murals in excess of 100 feet wide. His avant-garde murals throughout the United States have helped to distinguish himself as one of the preeminent artists of his generation. Manfred’s work takes inspiration from both urban environments and nature alike. He is known for his vibrant color choices and bold, yet perfectly balanced compositions. 'I find inspiration from everything around me, from conversations with friends and family, a visual incentive from nature, or simply a past moment or feeling I want to re-live thru my art' Manfred Delgado",
      image: "/images/team/manfred.jpg",
      linkedin: "https://www.linkedin.com/in/natalie-labuda-34111224/",
      twitter: "",
    },

    {
      name: "Shreyas Naik",
      title: "Commercial Developer",
      discription: "Shreyas began his professional career building and developing hotels in the Northeast. He later transitioned into the Plastics Recycling business and for many years ran a medium sized plastic recycling company out of Alabama, Indiana, and Illinois. He is still a part of the plastics world as Vice President and board member of Niche Polymers, a company that manufacturers recycled based plastic resins. Currently Shreyas resides in Miami Florida and is the owner of Dorado Development Group LLC. Dorado Development focuses on residential and commercial construction in Florida, Alabama, Maryland and West Virginia.",
      image: "/images/team/shreyas.jpg",
      linkedin: "https://www.linkedin.com/in/rogerssampaio/",
      twitter: "",
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
      TeamCard
    },
    setup() {


      return {
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