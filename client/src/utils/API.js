import axios from 'axios';

export default {
    // Create New User
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    // User Login
    loginUser: function (id) {
        return axios.post("/api/users/login", id);
    },


    // Create New Group
    saveGroup: function (groupData) {
        return axios.post("/api/groups", groupData);
    },
    // Existing Group
    findGroup: function (id) {
        return axios.get(`/api/groups/${id.id}/${id.name}`)
    },



    // Create Event
    saveEvent: function (eventData) {
        return axios.post("/api/events", eventData);
    },
}