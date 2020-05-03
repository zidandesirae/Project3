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
    // Create Event
    saveEvent: function(eventData) {
        return axios.post("/api/events", eventData);
    },
    // Gets all users
    getUser: function () {
        return axios.get("/api/users")
    },
    // Get user with given id
    getUser: function(id) {
        return axios.get("/api/users/" + id)
    },
}