import { defineStore } from "pinia";
import teamData from "@/teamData.json"

export const useTeamStore = defineStore('TeamStore', {
    state: () => ({
        team: teamData
    }),

    getters: {
        getMember: (state) => {
            return (userId) => state.team.find((m) => m.id === userId);
        },
    },
});
