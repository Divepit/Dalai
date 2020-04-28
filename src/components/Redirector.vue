<template>
  <v-container class="fill-height justify-center" fluid>
    <v-card>
      <v-card-title>
        <v-spacer/>
        Hello, I'm Dalai!
        <v-spacer/>
      </v-card-title>
      <v-avatar size="200" tile>
        <v-img src="https://www.svgrepo.com/show/162/llama.svg"/>
      </v-avatar>
      <v-card-title>
        <v-spacer/>
        I will redirect you right away!
        <v-spacer/>
      </v-card-title>
      <v-card-text class="mb-0 pb-0">
        <v-progress-circular class="pb-12 pt-6" indeterminate></v-progress-circular>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import { db } from '@/fire.js'

  export default {
    name: 'Redirector',
    created () {
      this.redirect()
    },
    methods: {
      redirect () {
        db.collection('links').doc(this.$route.params.key).get()
          .then(result => {
            window.location.href = result.data().url
          })
      }
    }
  }
</script>
