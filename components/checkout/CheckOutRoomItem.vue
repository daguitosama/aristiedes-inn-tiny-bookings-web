<template>
  <div class="py-[8px] flex items-center justify-between">
    <!-- data -->
    <div class="flex items-center justify-between">
      <!-- pic -->
      <div
        class="
          h-[80px]
          w-[80px]
          bg-gray-200
          dark:bg-black
          rounded-[16px]
          overflow-hidden
          relative
        "
      >
        <img
          :src="mapedPictureSrc(firstPicSrc)"
          alt=""
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <!-- info -->
      <div class="pl-[12px] sm:pl-[32px]">
        <h3 class="text-lg font-medium">
          {{ room_item.room_name }}
        </h3>
        <p class="text-sm font-medium">
          {{ nightPrice }}
        </p>
      </div>
    </div>

    <!-- rigth unit -->
    <div>
      <ul class="text-sm list-disc">
        <li>
          {{ beds }}
        </li>
        <li>
          {{ capacity }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, useContext } from "@nuxtjs/composition-api";
export default {
  components: {},
  props: {
    room_item: {
      type: Object,
      default: () => ({
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
        ],
      }),
    },
  },

  setup(props, rawCtx) {
    const ctx = useContext();
    const API_CONTENT_PATH = ctx.env.API_CONTENT_PATH;

    const { root } = rawCtx;

    // guest & capacity
    const guestStr = computed(() =>
      root.$i18n.t("home.listings.listing_unit.guest")
    );

    const capacity = computed(() => formatCapacity(props.room_item.capacity));
    function formatCapacity(capacity) {
      var baseStr = guestStr.value;
      if (capacity > 1) {
        baseStr = baseStr.concat("s");
      }

      return `${capacity} ${baseStr}`;
    }
    //
    // beds
    const bedStr = computed(() =>
      root.$i18n.t("home.listings.listing_unit.bed")
    );
    const beds = computed(() => formatBeds(props.room_item.number_of_beds));
    function formatBeds(beds) {
      var baseStr = bedStr.value;
      if (beds > 1) {
        baseStr = baseStr.concat("s");
      }

      return `${beds} ${baseStr}`;
    }

    //

    // pictures
    function mapedPictureSrc(filename) {
      return `/${API_CONTENT_PATH}/img/${filename}`;
    }
    const firstPicSrc = computed(
      () => props?.room_item?.room_pictures[0].filename
    );
    //

    // night price
    const nightStr = computed(() =>
      root.$i18n.t("home.listings.listing_unit.night")
    );
    const nightPrice = computed(() =>
      formatNightPrice(props.room_item.night_price)
    );

    function formatNightPrice(price) {
      return `$ ${price} / ${nightStr.value}`;
    }
    //

    return {
      firstPicSrc,
      nightPrice,
      beds,
      capacity,
      mapedPictureSrc,
    };
  },
};
</script>

<style>
</style>