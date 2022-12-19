<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "@/stores/counter";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  setup() {
    const store = useCounterStore();

    store.fetchProjects();
    store.fetchEmployees();
  },
  computed: {
    ...mapState(useCounterStore, {
      getProjects: "getProjects",
      getEmployees: "getEmployees",
    }),
  },
  data() {},
};
</script>
<template>
  <Navbar />
  <v-container>
    <v-list>
      <template v-for="project in getProjects" :key="project.Uuid">
        <v-list-group
          v-if="project.CompanyAssigned === $route.params.Uuid"
          v-model:opened="open"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              style="background-color: rgb(115 189 199 / 56%)"
              v-bind="props"
            >
              <v-list-item-title>{{ project.Name }}</v-list-item-title>
            </v-list-item>
          </template>
          <template v-for="employee in getEmployees" :key="employee.Uuid">
            <v-list-item v-if="employee.ProjectAssigned === project.Uuid">
              <v-list-item-title>{{ employee.Name }}</v-list-item-title>
              <v-list-item-subtitle>{{
                employee.ChapterArea
              }}</v-list-item-subtitle>
            </v-list-item>
          </template>
        </v-list-group></template
      >
    </v-list>
  </v-container>
</template>
