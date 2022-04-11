<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-blue-800 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <PxIcon class="mr-3" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
          >
            Exchange your Cryptos
          </router-link>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon.vue";

export default {
  name: "PxHeader",
  components: { PxIcon },
};
</script>
