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
          @click="GoToCategory"
          v-for="(category, index, key) in categories"
          :key="key"
          :category="category"
        />
      </div>
    </template>
  </InteriorPage>
</template>


<script>
import InteriorPage from '../../components/Layouts/InteriorPage.vue';
import CategoryCard from '../../components/cards/CategoryCard.vue';
export default {
    components:{
        InteriorPage,
        CategoryCard
    },
    data(){
        return {
            categories: [
            {
                name: 'Sneakers',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
            {
                name: 'Boots',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
            {
                name: 'Sandals',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
            {
                name: 'Flip Flops',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
            {
                name: 'Sneakers',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
            {
                name: 'Boots',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
            {
                name: 'Sandals',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
            {
                name: 'Flip Flops',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
            {
                name: 'Sneakers',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
            {
                name: 'Boots',
                image: 'https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg',
                items: 2
            },
        ]
        }
    },
    methods:{
      GoToCategory(){
        this.$router.push('/vault/1');
      }
    }
}
</script>