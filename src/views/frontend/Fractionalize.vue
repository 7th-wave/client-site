<template>
  <interior-page>
      <template #header>
          Select Nft(s) to Fractionalize
      </template>

      <template #body>
          <p class="text-center mb-8">Choose the NFT(s) to send to a new vault, select your desired fraction type, set your vault’s details, then continue to fractionalize. Once complete, all fractions will appear in your wallet. Be aware, you cannot add to the NFTs in a vault once created. Read our guides for more information.</p>

          <div class="flex">
              <div class="w-2/3">
                <nfts :data="nfts"></nfts>
              </div>
              <div class="w-1/2">
                <fraction-form></fraction-form>
              </div>
          </div>
          
      </template>

  </interior-page>
</template>
 <style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add the lines below */
@layer utilities {
  @variants responsive {
    .masonry {
      column-count: 3;
      column-gap: 1.25em;
    }
    .break-inside {
      break-inside: avoid;
    }
  }
}
</style>


<script>
import FractionForm from '../../components/Forms/FractionForm.vue';
// @ is an alias to /src
import InteriorPage from '../../components/Layouts/InteriorPage.vue';
import Nfts from '../../components/Shared/Nfts.vue';

 /* const data = {
    artist: 'Mario Sanchez',
    title: 'Mario Sanchez Collection',
    artist_name: 'Mario Sanchez',
    bio_title: 'Mario Sanchez October 7th, 1908 - April 28th, 2005',
    bio: 'Critically acclaimed as the most important Cuban American Folk Artist of the 20th Century he received one-man exhibitions in major museums from New York’s American Folk Art & Museum of the City of New York, Bacardi Museum & Cuba’s National Museum of Fine Art. His work resides in the Smithsonian, Whitney & American Folk Art Museums. His motto was "One Race, the Human Race". He believed in the Great American Dream with a humorous twist.  Mario Sanchez passion was depicting the people of Key West & Tampa.  His unique technique of sketches & intaglios of Florida & Cuba treasured history involve the humanistic values of a rich cultural community filled with the traditions of immigrants of diverse geographic and ethnic origins. ',
    img: '/images/art-7.jpg',

 } */

 const nfts = [
        {
            name: "Nft1",
            image: "01.png"
        },
        {
            name: "Nft2",
            image: "02.png"
        },
        {
            name: "Nft3",
            image: "03.png"
        },
        {
            name: "Nft4",
            image: "04.png"
        },
        {
            name: "Nft5",
            image: "05.png"
        },
        {
            name: "Nft6",
            image: "06.png"
        }
];

 
export default {
  components: {
    InteriorPage,
    Nfts,
    FractionForm,
   

  },
  setup() {
    

    return {
      // navigation,
      // features,
     
      nfts
      // footerNavigation,
      
    }
  },
}
</script>
