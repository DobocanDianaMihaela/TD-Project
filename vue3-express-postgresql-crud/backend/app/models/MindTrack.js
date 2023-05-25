module.exports = (sequelize, Sequelize) => {
  const MindTrack = sequelize.define("MindTrack", {
    employee_name: {
      type: Sequelize.STRING
    },
    department: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    gender: {
      type: Sequelize.STRING
    },
    mental_health_test_results: {
      type: Sequelize.STRING
    },
    psychological_treatments: {
      type: Sequelize.STRING
    },
    performance_evaluation: {
      type: Sequelize.STRING
    },
    medical_history: {
      type: Sequelize.STRING
    },
    current_mental_health_status: {
      type: Sequelize.STRING
    },
    mental_health_measures_evaluation: {
      type: Sequelize.STRING
    },
    personal_development_program: {
      type: Sequelize.STRING
    }
  });

  return MindTrack;
};
