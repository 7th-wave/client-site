<template>
    <router-link :to="nftData.href" class="" v-if="nftData">
        <div><img :src="nftData.imageUrl" class="mx-auto" alt="" /></div>
        <div class="bg-white shadow-lg rounded-b-lg">
            <div class="h-12 text-center flex items-center justify-center border border-gray-200 border-t-0"><span class="font-semibold text-xl leading-7 text-gray-900">{{ nftData.title }}</span></div>
            
        </div>
    </router-link>
</template>
<script>
//import {storage} from '../../firebase/firebase';
import { onMounted, ref, toRefs } from '@vue/runtime-core';
export default {
    props: ['nft'],
    setup(props) {

        const { nft } = toRefs(props);
        const nftData = ref(null);
        const lastOffer = ref(null);
        const toBid = ref(null);
        const lastAuction = ref(null);
        const lastSale = ref(null);

        const getData = async() => {
            nftData.value = {
                id: nft.value.id,
                title: nft.value.title,
                href: nft.value.href,
                size: nft.value.size,
                category: nft.value.category,
                imageUrl: nft.value.imageUrl,
            };
            /* const nftDoc = await db.collection("nfts").doc(nft.value.id).get();

            console.log(nft.value);

             nftData.value = {
                id: nft.value.id,
                title: nftDoc.data().title,
                href: "/artwork/" + nftDoc.data().collection + "/" + nft.value.id,
                size: nftDoc.data().size,
                category: nftDoc.data().category
                ? nftDoc.data().category.join(", ")
                : "",
                imageUrl: await getFullImageURL(nftDoc.data().imageUrl),
            };
            
            if (nft.value.auctions) {
                const lastAuctionRef = nft.value.auctions[nft.value.auctions.length - 1];

                if (lastAuctionRef) {
                    const auctionData = await db.collection("auctions").doc(lastAuctionRef).get();
                    lastAuction.value = auctionData.data();

                }
            
            }
            
            const lastOfferRef = nft.value.offers[nft.value.offers.length - 1];
            const lastSaleRef = nft.value.sales[nft.value.sales.length - 1];

            if (lastOfferRef) {
                const offerData = await db.collection("offers").doc(lastOfferRef).get();
                lastOffer.value = offerData.data();

            }

            if (lastSaleRef) {
                const saleData = await db.collection("sales").doc(lastSaleRef).get();
                lastSale.value = saleData.data();

            } */
            

        }

       /*  const getFullImageURL = async (item) => {
            console.log(item);
            if (item) {
                var storageRef = storage.ref();
                const imageUrl = await storageRef.child(item).getDownloadURL();

                return imageUrl;
            }
        }; */

        onMounted(async () => {
            await getData();
        });
        return {
            nftData,
            lastOffer,
            lastAuction,
            lastSale,
            toBid
        }
    },
}
</script>