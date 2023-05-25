<template>
  <div v-if="currentMindTrack.id" class="edit-form">
    <h4>Mind Track</h4>
    <form>
      <div class="form-group">
        <label for="employee_name">Employee Name</label>
        <input
            type="text"
            class="form-control"
            id="employee_name"
            v-model="currentMindTrack.employee_name"
        />
      </div>
      <div class="form-group">
        <label for="department">Department</label>
        <input
            type="text"
            class="form-control"
            id="department"
            v-model="currentMindTrack.department"
        />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input
            type="number"
            class="form-control"
            id="age"
            v-model="currentMindTrack.age"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <select
            class="form-control"
            id="gender"
            v-model="currentMindTrack.gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="mental_health_test_results">Mental Health Test Results</label>
        <textarea
            class="form-control"
            id="mental_health_test_results"
            v-model="currentMindTrack.mental_health_test_results"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="psychological_treatments">Psychological Treatments</label>
        <textarea
            class="form-control"
            id="psychological_treatments"
            v-model="currentMindTrack.psychological_treatments"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="performance_evaluation">Performance Evaluation</label>
        <textarea
            class="form-control"
            id="performance_evaluation"
            v-model="currentMindTrack.performance_evaluation"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="medical_history">Medical History</label>
        <textarea
            class="form-control"
            id="medical_history"
            v-model="currentMindTrack.medical_history"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="current_mental_health_status">Current Mental Health Status</label>
        <textarea
            class="form-control"
            id="current_mental_health_status"
            v-model="currentMindTrack.current_mental_health_status"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="mental_health_measures_evaluation">Mental Health Measures Evaluation</label>
        <textarea
            class="form-control"
            id="mental_health_measures_evaluation"
            v-model="currentMindTrack.mental_health_measures_evaluation"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="personal_development_program">Personal Development Program</label>
        <textarea
            class="form-control"
            id="personal_development_program"
            v-model="currentMindTrack.personal_development_program"
        ></textarea>
      </div>
    </form>





    <button type="submit" class="updateBtn" @click="updateMindTrack">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MindTrackDataService from "@/services/MindTrackDataService";
import MindTrack from "@/types/MindTrack";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "mindtrack",
  data() {
    return {
      currentMindTrack: {} as MindTrack,
      message: "",
    };
  },
  methods: {
    getMindTrack(id: any) {
      MindTrackDataService.get(id)
          .then((response: ResponseData) => {
            this.currentMindTrack = response.data;
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },



    updateMindTrack() {
      MindTrackDataService.update(this.currentMindTrack.id, this.currentMindTrack)
          .then((response: ResponseData) => {
            console.log(response.data);
            this.message = "The mindtrack was updated successfully!";
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },

    deleteMindTrack() {
      MindTrackDataService.delete(this.currentMindTrack.id)
          .then((response: ResponseData) => {
            console.log(response.data);
            this.$router.push({ name: "mindtracks" });
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.message = "";
    this.getMindTrack(this.$route.params.id);
  },
});
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;

}
h4{
  text-align: center;
}

.updateBtn {
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
.updateBtn:hover{
  background-color: #56d971;
  color: white;
}
</style>
