<template>
    <div class="Test text-center my-20">
        <div>
            <span
                class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ..."
            >
                Hello
                <br />World
            </span>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <div
                class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
            >
                <div class="flex-shrink-0">
                    <img class="h-12 w-12" alt="ChitChat Logo" />
                </div>
                <div>
                    <div class="text-xl font-medium text-black">ChitChat</div>
                    <p class="text-gray-500">You have a new message!</p>
                </div>
            </div>
        </div>
        <a-button type="danger" shape="round" @click="$router.replace({ path: '/' })">Home Page</a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    setup() {
        return {

        }
    },
    methods: {

    }
})
</script>

