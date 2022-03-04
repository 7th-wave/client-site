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
          name: "Fine Art",
          image:
            "/images/categories/caveman.png",
          items: 2,
        },
        {
          name: "Boots",
          image:
            "/images/sneakers/02.png",
          items: 2,
        },
        {
          name: "Sandals",
          image:
            "/images/sneakers/03.png",
          items: 2,
        },
        {
          name: "Flip Flops",
          image:
            "/images/sneakers/04.png",
          items: 2,
        },
        {
          name: "Sneakers",
          image:
            "/images/sneakers/05.png",
          items: 2,
        },
        {
          name: "Boots",
          image:
            "/images/sneakers/06.png",
          items: 2,
        },
        {
          name: "Sandals",
          image:
            "/images/sneakers/01.png",
          items: 2,
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