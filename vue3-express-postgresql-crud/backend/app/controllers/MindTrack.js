const db = require("../models");
const MindTrack = db.MindTracks;
const Op = db.Sequelize.Op;

// Create and Save a new MindTrack
exports.create = (req, res) => {
  // Validate request



  if (!req.body.employee_name ||!req.body.department||!req.body.age||!req.body.gender||!req.body.mental_health_test_results
  ||!req.body.psychological_treatments ||!req.body.performance_evaluation || !req.body.medical_history ||!req.body.current_mental_health_status
  || !req.body.mental_health_measures_evaluation|| !req.body.personal_development_program) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a MindTrack
  const somethingElse = {
    employee_name: req.body.employee_name,
    department: req.body.department,
    age: req.body.age,
    gender: req.body.gender,
    mental_health_test_results: req.body.mental_health_test_results,
    psychological_treatments: req.body.psychological_treatments,
    performance_evaluation: req.body.performance_evaluation,
    medical_history: req.body.medical_history,
    current_mental_health_status: req.body.current_mental_health_status,
    mental_health_measures_evaluation: req.body.mental_health_measures_evaluation,
    personal_development_program: req.body.personal_development_program
  };

  // Save MindTrack in the database
  MindTrack.create(somethingElse)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the MindTrack."
      });
    });
};

// Retrieve all MindTracks from the database.
exports.findAll = (req, res) => {
  const name = req.query.employee_name;
  let condition = name ? { employee_name: { [Op.iLike]: `%${name}%` } } : null;

  MindTrack.findAll({ where: condition })
    .then(data => {
      console.log("SALUUUUUUT")
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving MindTracks."
      });
    });
};

// Find a single MindTrack with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  MindTrack.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find MindTrack with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving MindTrack with id=" + id
      });
    });
};

// Update a MindTrack by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  MindTrack.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MindTrack was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update MindTrack with id=${id}. Maybe MindTrack was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating MindTrack with id=" + id
      });
    });
};

// Delete a MindTrack with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  MindTrack.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MindTrack was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete MindTrack with id=${id}. Maybe MindTrack was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete MindTrack with id=" + id
      });
    });
};

// Delete all MindTracks from the database.
exports.deleteAll = (req, res) => {
  MindTrack.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} MindTracks were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all MindTracks."
      });
    });
};

// find all published MindTrack
// exports.findAllPublished = (req, res) => {
//   MindTrack.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving MindTracks."
//       });
//     });
// };
