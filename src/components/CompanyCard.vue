<script>
export default {
  props: {
    projectObject: Object,
  },
};
</script>

<template>
  <v-col cols="12">
    <v-card>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5">
            {{ this.projectObject.Name }}
          </v-card-title>
          <v-card-subtitle> {{ this.projectObject.Sector }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              class="ml-2"
              variant="outlined"
              size="small"
              :to="{
                name: 'CompanyDetail',
                params: { Uuid: this.projectObject.Uuid },
              }"
            >
              Go to details
            </v-btn>
          </v-card-actions>
        </div>
        <v-avatar class="ma-3" size="125" rounded="0">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
          ></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-col>
</template>

<style scoped>
/* .btn__goTo {
  background: hsla(160, 100%, 37%, 1);
} */
</style>
