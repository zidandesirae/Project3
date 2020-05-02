import axios from 'axios';

export default {

    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    },
    saveGroup: function(groupData) {
        return axios.post("/api/groups", groupData);
    },
    saveEvent: function(eventData) {
        return axios.post("/api/events", eventData);
    },
}