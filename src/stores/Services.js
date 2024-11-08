import { defineStore } from "pinia";
import services from "@/services.json"


export const useServicesStore = defineStore('ServicesStore', {
    state: () => ({
        services: services
    }),
});
