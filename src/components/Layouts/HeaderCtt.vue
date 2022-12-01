<template>
    <!-- Start Navbar -->
<nav id="topnav" class="defaultscroll is-sticky">
    <div class="container">
        <!-- Logo container-->
        <a class="logo pl-0 h-[74px]" href="index.html">
            <logo class="sm:hidden" :color="logoColor" />
            <div class="sm:block hidden h-full">
                <logo :color="logoColor" />
            </div>
        </a>
        <!-- End Logo container-->
        
        <div class="menu-extras">
            <div class="menu-item">
                <!-- Mobile menu toggle-->
                <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <!-- End mobile menu toggle-->
            </div>
        </div>

        <!--Login button Start-->
        <ul class="buy-button list-none mb-0">
            <!-- <li class="sm:inline-block hidden mb-0"> -->
            <li class="inline-block pl-1 mb-0">
                <a id="connectWallet" class="btn btn-icon rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="uil uil-wallet"></i></a>
            </li>

            <li class="inline-block pl-1 mb-0">
                <a href="" class="btn btn-icon rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><img src="@/assets/images/client/05.jpg" class="rounded-full" alt=""></a>
            </li>

            <li class="inline-block pl-1 mb-0">
                <div class="menu-extras p-0">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle block" id="isToggle" onclick="toggleMenu()">
                        <div class="lines m-0">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
                </div>
            </li>
        </ul>
        <!--Login button End-->

        
    </div><!--end container-->
</nav><!--end header-->
<!-- End Navbar -->
</template>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import Logo from './Logo.vue';
export default {
  components: { Logo },
    setup() {
        const logoColor = ref('white')
        const windowScroll = () => {
            const navbar = document.getElementById("topnav");
            if (navbar != null) {
                if (
                    document.body.scrollTop >= 50 ||
                    document.documentElement.scrollTop >= 50
                ) {
                    navbar.classList.add("nav-sticky");
                    logoColor.value = 'white'
                } else {
                    navbar.classList.remove("nav-sticky");
                    logoColor.value = 'white'
                }
            }
        }

        onMounted(() => {
            window.addEventListener('scroll', (ev) => {
                ev.preventDefault();
                windowScroll();
            })
        })

        return {
            logoColor
        }
    },
}
</script>