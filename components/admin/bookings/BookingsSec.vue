<template>
  <div>
    <MainHeading text="Reservaciones" class="mt-10" />

    <div v-if="hotels">
      <!-- hotel selector -->
      <HotelSelector class="mt-[50px] max-w-md" />
      <!-- create -->
      <CreateBooking class="mt-[150px]" :selectedHotel="selectedHotel" />
      <!-- list -->
      <BookingsList
        :selectedHotel="selectedHotel"
        class="mt-[150px]"
        v-if="selectedHotel.hotel_name"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@nuxtjs/composition-api";
import MainHeading from "../global/MainHeading.vue";
import CreateBooking from "./CreateBooking.vue";
import HotelSelector from "../global/HotelSelector.vue";
import { useHotelListStore } from "~/stores/hotel-list-storage";
import { storeToRefs } from "pinia";
import BookingsList from "./BookingsList.vue";
export default {
  components: {
    MainHeading,
    CreateBooking,
    HotelSelector,
    BookingsList,
  },

  setup() {
    const hotelStore = useHotelListStore();
    const { hotels, selectedHotel } = storeToRefs(hotelStore);
    const selectedHotelId = computed(() =>
      selectedHotel.value ? selectedHotel.id : null
    );

    return {
      selectedHotelId,
      selectedHotel,
      hotels,
    };
  },
};
</script>

<style>
</style>