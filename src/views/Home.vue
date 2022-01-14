<template>
    <div class="home-page text-center">
        <HelloWorld msg="Welcome to Vite + Vue3 + TypeScript Template" />
        <a-button type="danger" shape="round" @click="$router.replace({ path: '/test' })">Test Page</a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
    name: "HomePage",

    components: { HelloWorld },

    setup() { }
});
</script>