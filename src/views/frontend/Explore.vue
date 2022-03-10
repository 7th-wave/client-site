<template>
  <InteriorPage>
    <template #body>
      <div class="flex pb-10">
        <span
          class="m-auto text-4xl text-center font-normal font-inter text-black"
          >Vault Categories</span
        >
      </div>

      <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10">
        <CategoryCard
          @click="GoToCategory(category.name)"
          v-for="(category, index, key) in categories"
          :key="key"
          :category="category"
        >
          <template #image>
            <img
              class="w-full h-full object-cover"
              :src="category.image"
              alt=""
            />
          </template>

          <template #subtitle>
            <span
              class="
                text-sm
                font-inter font-medium
                text-primary-500
                cursor-pointer
              "
              >{{ category.items }} items</span
            >
          </template>
          <template #title>
            <span class="text-gray-900 text-xl font-semibold font-inter">{{
              category.name
            }}</span>
          </template>
        </CategoryCard>
      </div>
    </template>
  </InteriorPage>
</template>


<script>
import InteriorPage from "../../components/Layouts/InteriorPage.vue";
import CategoryCard from "../../components/cards/CategoryCard.vue";
export default {
  components: {
    InteriorPage,
    CategoryCard,
  },
  data() {
    return {
      categories: [
      
        {
          name: "Sneakers",
          image:
            "/images/categories/sneakers.png",
          items: 9,
        },
        {
          name: "Rare Gems & Jewellery",
          image:
           "/images/categories/gems.png",
          items: 1,
        },
          {
          name: "Fine Art",
          image:
            "/images/categories/caveman.png",
          items: 3,
        },
        {
          name: "Automotive",
          image:
            "/images/categories/car.png",
          items: 2,
        },
        {
          name: "Domains",
          image:
            "/images/categories/keys.jpg",
          items: 2,
        },
        {
          name: "Collectibles",
          image:
            "/images/categories/pball.jpg",
          items: 100,
        },
        {
          name: "Memorabillia",
          image:
            "/images/categories/memorabill.jpg",
          items: 2,
        },
         {
          name: "Real Estate",
          image:
            "/images/categories/Estate.jpg",
          items: 1,
        },
         {
          name: "Watches",
          image:
            "/images/categories/Watches.jpg",
          items: 100,
        },
       
      ],
    };
  },
   methods:{
      GoToCategory(cat){
        this.$router.push({name: "vault_category",params:{category:cat}});
      }
    }
};
  

</script>