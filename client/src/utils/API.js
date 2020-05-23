import axios from 'axios';

export default {
    // Save(POST) new User to table
    postUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    // Save(POST) new Group to table
    postGroup: function (groupData) {
        return axios.post("/api/groups", groupData);
    },
    
    // Looks up User in table and then matches to account to login 
    loginUser: function (id) {
        return axios.post("/api/users/login", id);
    },
    // Find(GET) group by on name and id
    getExistingGroup: function (id) {
        return axios.get(`/api/groups/${id.id}/${id.name}`)
    },
    //Find(GET) group by ID
    findGroup: function (id) {
        return axios.get(`/api/groups/${id.id}`)
    },

    // //Find members by groupId
    // findAllMembers: function(groupId) {
    //     return axios.get(`/api/groups/${groupId.groupId}`)
    // },


    // Create Event
    saveEvent: function (eventData) {
        return axios.post("/api/events", eventData);
    }
}