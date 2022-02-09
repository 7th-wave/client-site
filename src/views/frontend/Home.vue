<template>
  <div class="home bg-white font-inter">
    <div class="relative  ">
        <div class="relative">
          <div class="max-w-7xl m-auto bg-white grid grid-cols-4 gap-4 py-12">
            <div class="col-span-2">
              <h1 class="text-6xl leading-none font-extrabold mb-12">Currating art into the new world of NFT  </h1>
              <h2 class="text-5xl leading-none font-extrabold text-teal-400">Collect and Sell</h2>

              <div class="flex mt-16">
                <div class="mr-4">
                  <Button :btn-style="'black'"  @click="goCollections" :name="'EXPLORE COLLECTIONS'" />
                </div>
                <div>
                  <Button :btn-style="'primary'" @click="goToLiveAuctions" :name="'LIVE AUCTIONS'" />
                </div>
              </div>
            </div>
            <div class="col-span-2">
                
            </div>
          </div>
          <div class="bg-gray-100 py-32">
            <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <p class="mt-2 text-4xl font-medium leading-10 text-black tracking-tight sm:text-4xl">
                Artists Collections
              </p>
            </div>
            
            <ArtistCollection :src="'home'" />
            </div>
        </div>
        <div class="max-w-7xl mx-auto text-center bg-white py-12">

            <h3 class="text-4xl leading-10 font-medium mb-16">About GOG</h3>
            <p class="text-2xl leading-8 font-medium my-8">The Gallery on Greene has consistently fomented curatorial and artistic practice through ambitious exhibitions programs, created in close collaboration with its artists with museums from New York, MCNY, AFAM, SSSM to Havana's National Museum of Fine Art.</p>

            <p class="text-2xl leading-8 font-medium  my-8">Our philosophy: The style pendulum swung away from overly furnished and cluttered interiors some time ago. The immediate reaction was one of clinical simplicity. We are now experiencing a hugely exciting period where key pieces of fine art or antiques are used to a stunning effect within contemporary interiors. This juxtaposition makes for an emerging sophisticated style, next to no other.</p>

            <p class="text-2xl leading-8 font-bold  my-8"><b>Now we can appreciate the best of both worlds.</b></p>

        </div>
      </div>
  </div>
</template>

<script>
import ArtistCollection from '@/components/ArtistCollection.vue'
import Button from '../../components/Layouts/Button.vue'
import { ref } from '@vue/reactivity';


export default {
  components: {
    ArtistCollection,
    Button,
  },
  setup() {
    const images = ref([
                    {image: "https://wallpapershome.com/images/pages/pic_v/5111.jpg"},
                    {image: "https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fannabel%2Ffiles%2F2018%2F02%2FLouisville_Skyline-1200x801.jpg"},
                    {image: "https://t-ec.bstatic.com/images/hotel/max1024x768/683/68345284.jpg"},
                    {image: "https://i.pinimg.com/originals/08/ec/94/08ec94ecf38048a2102ec4783dc88fa8.jpg"},
                    {image: "https://t-ec.bstatic.com/images/hotel/max1024x768/873/87316855.jpg"},
                    {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eiffel_Tower_Vertical.JPG/802px-Eiffel_Tower_Vertical.JPG"},
                    {image: "http://nexusandme.com/wp-content/uploads/2014/06/Ferris-Wheel.jpg"},
                    {image: "http://unmaskmycity.org/wp-content/uploads/2017/01/cityneighborhood.jpg"},
                    {image: "https://wallpapershome.com/images/pages/pic_v/660.jpg"},
                    {image: "http://www.manager.bg/sites/default/files/mainimages/20aa_29.jpg"},
                    {image: "https://www.squaremeal.co.uk/~/media/hero/area/city.jpg?useCustomFunctions=1&centerCrop=1"},
                    {image: "https://images.wallpaperscraft.com/image/road_marking_bridge_123398_1920x1080.jpg"},
                    {image: "https://stmed.net/sites/default/files/cities-wallpapers-28512-590093.jpg"},
                    {image: "https://img4.goodfon.com/wallpaper/nbig/b/d1/skyscrapers-building-architecture-vertical-night-lights-city.jpg"},
                    {image: "https://images.wallpaperscraft.com/image/architecture_city_view_from_above_buildings_river_118446_1920x1080.jpg"},
                    {image: "https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.wallpaperscraft.com/image/architecture_city_beautiful_building_sky_59431_1920x1080.jpg"},
                    {image: "https://images.unsplash.com/photo-1541780815498-ffd0f2d0d0af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.unsplash.com/photo-1536235799634-c6c21fdc2b9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://data.whicdn.com/images/126024359/large.jpg"},
                    {image: "https://images.wallpaperscraft.com/image/bridge_night_city_lighting_125945_1280x720.jpg"},
                    {image: "https://images.unsplash.com/photo-1501464915526-070295e4768d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.wallpaperscraft.com/image/architecture_building_sky_114682_1920x1080.jpg"},
                    {image: "https://images.wallpaperscraft.com/image/bridge_night_city_tokyo_120902_1280x720.jpg"},
                    {image: "https://images.wallpaperscraft.com/image/trolley_urban_landscape_san_diego_california_usa_50544_1280x720.jpg"},
                    {image: "https://images.unsplash.com/photo-1541780050666-f64773a3d779?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.wallpaperscraft.com/image/bridge_night_city_bay_124832_1280x720.jpg"},
                    {image: "https://images.unsplash.com/photo-1519359810479-37e924ddd0b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.unsplash.com/photo-1531149209156-122dcea6fdd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.unsplash.com/photo-1531496397966-75128d275fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.wallpaperscraft.com/image/bridge_night_city_city_lights_132392_1280x720.jpg"},
                    {image: "https://images.unsplash.com/photo-1519895663930-861efd5fd07f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.wallpaperscraft.com/image/trolley_stop_city_evening_lighting_119292_1280x720.jpg"},
                    {image: "https://images.wallpaperscraft.com/image/urban_landscape_night_lights_san_francisco_california_usa_hdr_54872_1280x720.jpg"},
                    {image: "https://images.unsplash.com/photo-1529668359626-876c212a4ba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.unsplash.com/photo-1533579494325-7a7ad78b6645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.unsplash.com/photo-1531932594968-e5e5e9dee95a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
                    {image: "https://images.wallpaperscraft.com/image/san_francisco_night_bridge_lights_hdr_58444_1280x720.jpg"},
                    {image: "https://images.unsplash.com/photo-1467217440414-bf182fc492d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},

                ]);
    return {
      images
    }
  },
}
</script>
