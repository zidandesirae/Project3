import axios from 'axios';

export default {
    // Create User
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    },
    // Create Group
    saveGroup: function(groupData) {
        return axios.post("/api/groups", groupData);
    },
    getGroup: function(id) {
        return axios.get("/api/groups/" + id);
    },
    // Create Event
    saveEvent: function(eventData) {
        return axios.post("/api/events", eventData);
    }
}