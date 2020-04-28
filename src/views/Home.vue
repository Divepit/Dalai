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
      <v-card-text class="pt-12">
        <v-spacer/>
        If you clicked a link that brought you here before you were logged in, please go click that link again.
        <v-spacer/>
      </v-card-text>
      <v-card-text>
        <v-spacer/>
        If you'd like to securely convert a link, I'll happily do that for you! Just paste it below and hit Enter!
        <v-spacer/>
      </v-card-text>

      <v-card-text class="mb-0 pb-0">
        <v-text-field @keydown.enter="submitLink" class="pb-0 pt-0" label="Link to secure" solo
                      v-if="!securing && !link" v-model="url"></v-text-field>
        <v-progress-circular class="pb-12 pt-6" indeterminate v-if="securing && !link"></v-progress-circular>
        <v-card-text v-if="link">Your new link:
          <v-text-field color="success" solo v-model="link"></v-text-field>
        </v-card-text>
      </v-card-text>
      <v-card-actions class="pb-6">
        <v-spacer/>
        <v-btn @click="submitLink" color="success" v-if="!link">Secure my link</v-btn>
        <v-btn @click="reset" color="warning" v-else>Secure another link</v-btn>
        <v-spacer/>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import { db } from '@/fire.js'

  export default {
    name: 'Home',
    data () {
      return {
        url: 'http://',
        securing: false,
        link: null
      }
    },
    methods: {
      submitLink () {
        this.securing = true

        function makeid (length) {
          var result = ''
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
          var charactersLength = characters.length
          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
          }
          return result
        }

        var key = makeid(16)
        db.collection('links').doc(key).set({
          url: this.url,
          key: key
        })
          .then(response => {
            this.securing = false
            this.link = 'https://n.ethz.ch/~marcotr/redirector/#/link/' + key
          })
      },
      reset () {
        this.url = 'http://'
        this.link = null
      }
    }
  }
</script>
