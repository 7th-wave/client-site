<template>
   <div
 
    class="
      account
      sm:px-8
      py-4
      sm:py-4
      lg:py-16
      relative
      mx-auto
      bg-gray-100 2xl:max-w-8xl w-full
      font-inter 
    "
  >
    <div class="lg:hidden">
      <Navbar />
    </div>
     <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">Asset NFT Fractionalization</h1>
    </div>
    <div>
      <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg">
        <div class="lg:col-span-2 hidden lg:block">
          <Menu />
        </div>
        <div class=" sm:col-span-5 space-y-2">
            <Steps :step="step" />
            <Step1 v-if="step == 1" />
            <Step2 v-if="step == 2"/>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Step1 from '@/components/Forms/Fractionalization/Step_1.vue'
import Step2 from '@/components/Forms/Fractionalization/Step_2.vue'
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Steps from '@/components/Drawers/Steps.vue'
export default {
    components:{
        Step1,
        Step2,
        Menu,
        Navbar,
        Steps
    },
    data(){
        return {
            step:1,
        }
    },
    created(){
        
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 78 ) {
                if(this.step < 4) {
                    this.step++;
                }
               
            }
            if (e.keyCode == 66) {
                if(this.step > 1) {
                    this.step--;
                }
                
            }
        })
       
    }
}
</script>
