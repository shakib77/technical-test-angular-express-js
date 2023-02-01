module.exports = (sequelize, Sequelize) => {
    return sequelize.define("test", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
};