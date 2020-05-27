import axios from 'axios';

export default {
    postUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    postUserLogin: function (id) {
        return axios.post("/api/users/login", id);
    },
    getAllUsersByGroupId: function(groupId) {
        return axios.get(`/api/users/${groupId.groupId}`)
    },
    // updateUserById: function(id) {
    //     return axios.put(`api/users/${id}`);
    // },

    postGroup: function (groupData) {
        return axios.post("/api/groups", groupData);
    },
    getGroupById: function (id) {
        return axios.get(`/api/groups/${id.id}`)
    },
    getGroupByIdName: function (id) {
        return axios.get(`/api/groups/${id.id}/${id.name}`)
    },

    
    postMessage: function (messageData) {
        return axios.post("/api/messages", messageData);
    },
    getAllMessagesByGroupId: function(groupId) {
        return axios.get(`/api/messages/${groupId.groupId}`)
    },


    postEvent: function (eventData) {
        return axios.post("/api/events", eventData);
    }
}