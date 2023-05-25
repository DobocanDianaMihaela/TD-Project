<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="employee_name">Employee Name</label>
        <input
            type="text"
            class="form-control"
            id="employee_name"
            required
            v-model="mindTrack.employee_name"
            name="employee_name"
        />
      </div>

      <div class="form-group">
        <label for="department">Department of Employment</label>
        <input
            class="form-control"
            id="department"
            required
            v-model="mindTrack.department"
            name="department"
        />
      </div>

      <div class="form-group">
        <label for="age">Age of Employee</label>
        <input
            class="form-control"
            id="age"
            required
            v-model="mindTrack.age"
            name="age"
        />
      </div>

      <div class="form-group">
        <label for="gender">Gender of Employee</label>
        <select class="form-control" id="gender" v-model="mindTrack.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="mental_health_test_results"
        >Results of Mental Health Tests</label
        >
        <textarea
            class="form-control"
            id="mental_health_test_results"
            required
            v-model="mindTrack.mental_health_test_results"
            name="mental_health_test_results"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="psychological_treatments"
        >Prescribed Psychological or Psychotherapeutic Treatments</label
        >
        <textarea
            class="form-control"
            id="psychological_treatments"
            required
            v-model="mindTrack.psychological_treatments"
            name="psychological_treatments"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="performance_evaluation">Performance Evaluation</label>
        <textarea
            class="form-control"
            id="performance_evaluation"
            required
            v-model="mindTrack.performance_evaluation"
            name="performance_evaluation"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="medical_history">Medical History of Employee</label>
        <textarea
            class="form-control"
            id="medical_history"
            required
            v-model="mindTrack.medical_history"
            name="medical_history"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="current_mental_health_status"
        >Current Mental Health Status of Employee</label
        >
        <textarea
            class="form-control"
            id="current_mental_health_status"
            required
            v-model="mindTrack.current_mental_health_status"
            name="current_mental_health_status"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="mental_health_measures_evaluation"
        >Evaluation of Mental Health Measures Implemented by the Company</label
        >
        <textarea
            class="form-control"
            id="mental_health_measures_evaluation"
            required
            v-model="mindTrack.mental_health_measures_evaluation"
            name="mental_health_measures_evaluation"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="personal_development_program"
        >Personal Development Program Evaluation</label>
        <textarea
            class="form-control"
            id="personal_development_program"
            required
            v-model="mindTrack.personal_development_program"
            name="personal_development_program"
        ></textarea>
      </div>

      <button @click="saveMindTrack" class="succesBtn">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="addMore" @click="newMindTrack">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MindTrackDataService from "@/services/MindTrackDataService";
import MindTrack from "@/types/MindTrack";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-mindtrack",
  data() {
    return {
      mindTrack: {
        id:null,
        employee_name: "",
        department: "",
        age: 0,
        gender: "",
        mental_health_test_results: "",
        psychological_treatments: "",
        performance_evaluation: "",
        medical_history: "",
        current_mental_health_status: "",
        mental_health_measures_evaluation: "",
        personal_development_program: "",
      } as MindTrack,
      submitted: false,
    };
  },
  methods: {
    saveMindTrack() {
      let data = {
        employee_name: this.mindTrack.employee_name,
        department: this.mindTrack.department,
        age: this.mindTrack.age,
        gender: this.mindTrack.gender,
        mental_health_test_results: this.mindTrack.mental_health_test_results,
        psychological_treatments: this.mindTrack.psychological_treatments,
        performance_evaluation: this.mindTrack.performance_evaluation,
        medical_history: this.mindTrack.medical_history,
        current_mental_health_status: this.mindTrack.current_mental_health_status,
        mental_health_measures_evaluation: this.mindTrack.mental_health_measures_evaluation,
        personal_development_program: this.mindTrack.personal_development_program,
      };

      MindTrackDataService.create(data)
          .then((response: ResponseData) => {
            this.mindTrack.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },

    newMindTrack() {
      this.submitted = false;
      this.mindTrack = {} as MindTrack;
    },
  },
});
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;

}
h4{
  text-align: center;
}
.succesBtn {
  background-color: rgb(5, 175, 26);
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  margin-bottom: 10px;
  width: 100%;

}
.succesBtn:hover{
  background-color: #56d971;
  color: white;
}
.addMore {
  background-color: rgb(5, 175, 26);
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  margin-bottom: 10px;
  width: 100%;

}
.addMore:hover{
  background-color: #56d971;
  color: white;
}

</style>

