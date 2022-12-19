<script>
import CompanyCard from "../components/CompanyCard.vue";
import Navbar from "../components/Navbar.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter";

export default {
  components: { CompanyCard, Navbar },
  computed: {
    ...mapState(useCounterStore, ["getCompanies"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchCompanies"]),
  },
  mounted() {
    this.fetchCompanies();
  },
};
</script>

<template>
  <main>
    <Navbar />
    <v-container>
      <v-row dense>
        <CompanyCard
          v-for="project in getCompanies"
          :key="project.Uuid"
          v-bind:projectObject="project"
        />
      </v-row>
    </v-container>
  </main>
</template>
