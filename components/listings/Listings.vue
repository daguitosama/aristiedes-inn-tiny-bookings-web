<template>
  <div class="">
    <!-- border-t border-t-gray-300  -->
    <ul
      class="
        grid
        lg:grid-cols-2
        xl:grid-cols-3
        gap-y-8
        md:gap-y-14 md:gap-x-14
        lg:gap-x-10
      "
    >
      <li v-for="listing in listings" :key="listing.id" class="">
        <Listing :listing="listing" />
      </li>
    </ul>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useListingsStore } from "~/stores/listings-storage";
import { ref } from "@nuxtjs/composition-api";
import Listing from "./Listing.vue";

export default {
  components: { Listing },
  setup() {
    const listingsStore = useListingsStore();
    const { listings } = storeToRefs(listingsStore);

    // Dev only ( this should be populated when success api res on search form)
    const { populateListings } = listingsStore;

    const Devlistings = [
      {
        id: 1,
        hotel_id: 1,
        room_name: "Imperial #001",
        night_price: 200,
        capacity: 2,
        number_of_beds: 1,
        room_type_id: 1,
        room_type_key: "Matrimonial",
        room_pictures: [
          {
            room_picture_id: 1,
            filename: "28.jpg",
          },
        ],
        room_amenities: [
          {
            amenity_id: 1,
            amenity: "TV",
          },
          {
            amenity_id: 2,
            amenity: "Aire Aconicionado",
          },
          {
            amenity_id: 3,
            amenity: "Private Bathroom",
          },

          {
            amenity_id: 3,
            amenity: "Safe Box",
          },
          
        ],
      },

      // {
      //   id: 2,
      //   hotel_id: 1,
      //   room_name: "Imperial #002",
      //   night_price: 200,
      //   capacity: 2,
      //   number_of_beds: 1,
      //   room_type_id: 1,
      //   room_type_key: "Matrimonial",
      //   room_pictures: [
      //     {
      //       room_picture_id: 2,
      //       filename: "27.jpg",
      //     },
      //   ],
      //   room_amenities: [
      //     {
      //       amenity_id: 1,
      //       amenity: "TV",
      //     },
      //     {
      //       amenity_id: 2,
      //       amenity: "Aire Aconicionado",
      //     },
      //   ],
      // },

      // {
      //   id: 3,
      //   hotel_id: 1,
      //   room_name: "Outlander #012",
      //   night_price: 160,
      //   capacity: 4,
      //   number_of_beds: 2,
      //   room_type_id: 2,
      //   room_type_key: "Cuadruple",
      //   room_pictures: [
      //     {
      //       room_picture_id: 3,
      //       filename: "13.jpg",
      //     },
      //   ],
      //   room_amenities: [
      //     {
      //       amenity_id: 1,
      //       amenity: "TV",
      //     },
      //     {
      //       amenity_id: 2,
      //       amenity: "Aire Aconicionado",
      //     },
      //   ],
      // },
    ];
    // Dev only
    // populateListings(Devlistings);

    
    return {
      listings,
    };
  },
};
</script>

<style>
</style>