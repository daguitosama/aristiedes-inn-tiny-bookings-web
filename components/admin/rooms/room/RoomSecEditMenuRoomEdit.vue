<template>
  <div>
    <SubHeading text="Información de la habitación" />

    <div class="mt-[50px]">
      <!-- room name -->
      <UpdateName :room="room" />
      <!-- price -->
      <UpdatePrice :room="room" class="mt-[50px]" />

      <!-- number of beds -->
      <UpdateBeds :room="room" class="mt-[50px]" />

      <!-- capacity -->
      <UpdateCapacity :room="room" class="mt-[50px]" />
    </div>
  </div>
</template>

<script>
import SubHeading from "../../global/SubHeading.vue";
import UpdateBeds from "./update_room/UpdateBeds.vue";
import UpdateCapacity from "./update_room/UpdateCapacity.vue";
import UpdateName from "./update_room/UpdateName.vue";
import UpdatePrice from "./update_room/UpdatePrice.vue";
export default {
  components: {
    UpdateName,
    SubHeading,
    UpdatePrice,
    UpdateBeds,
    UpdateCapacity,
  },
  props: {
    room: {
      type: Object,
      default: () => ({
        id: 0,
      }),
    },
  },

  setup(props) {
    return {};
  },
};
</script>

<style>
</style>