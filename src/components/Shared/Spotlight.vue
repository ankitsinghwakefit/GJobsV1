<template>
    <ul>
        <li v-for="spotlight in spotlights" :key="spotlight.id">
            <slot :spotlight="spotlight"></slot>
        </li>
    </ul>
</template>

<script>
import axios from "axios"
export default {
    name: "Spotlight",
    data(){
        return {
            spotlights: []
        }
    },
    async mounted(){
        let response = await axios.get("http://localhost:3000/spotlights")
        this.spotlights = response.data
        console.log("sportlights", this.spotlights)
    }
}
</script>