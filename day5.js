
const users = [
    {
        id: 1,
        name: "Ram",
        experience: 0,
        agentsId: [101, 102]
    },
    {
        id: 2,
        name: "Shyam",
        experience: 2,
        agentsId: [103]
    },
    {
        id: 3,
        name: "Hari",
        experience: 0,
        agentsId: [104, 105]
    },
     {
        id: 4,
        name: "Harryi",
        experience: 0,
        agentsId: [107, 106]
    },
     {
        id: 5,
        name: "Hari",
        experience: 0,
        agentsId: [108, 109]
    },
     {
        id: 6,
        name: "Hari",
        experience: 0,
        agentsId: [1010, 1011]
    },
     {
        id:7,
        name: "Hari",
        experience: 0,
        agentsId: [1012, 1013]
    }
];
const assignAgents = (users) => {
    let availableAgents = [];

    const updatedUsers = users.map((user) => {
        if (user.experience === 0) {
            availableAgents.push(...user.agentsId);

            return {
                ...user,
                agentsId: []
            };
        }
        else {
            if ( user.name.length === 5){
                return user.name;
            }
        }

        return user;
    });

    return {
        updatedUsers,
        availableAgents
    };
};
