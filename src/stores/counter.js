import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
import { toRaw } from "vue";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      companies: [],
      company: [],
      projects: [],
      project: [],
      employees: [],
    };
  },
  actions: {
    async fetchCompanies() {
      try {
        const data = await axios.get("https://localhost:44320/api/company");
        console.log(data.data);
        this.companies = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCompany(uuid) {
      try {
        const data = await axios.get(
          `https://localhost:44320/api/company?uuid=${uuid}`
        );
        console.log(data.data);
        this.company = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProjects() {
      try {
        const data = await axios.get("https://localhost:44320/api/project");
        // console.log(data.data);
        this.projects = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProject(uuid) {
      try {
        const data = await axios.get(
          `https://localhost:44320/api/project/${uuid}`
        );
        console.log(data.data);
        this.project = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchEmployees() {
      try {
        const data = await axios.get(`https://localhost:44320/api/employee`);
        console.log(data.data);
        this.employees = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getCompanies(state) {
      return state.companies;
    },
    getCompany(state) {
      return state.company;
    },
    getProjects(state) {
      return toRaw(state.projects);
    },
    getEmployees(state) {
      return state.employees;
    },
  },
});
