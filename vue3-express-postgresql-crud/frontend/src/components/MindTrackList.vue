<template>

  <div class="list row">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            placeholder="Search by employee name"
            v-model="employee_name"
        />
        <div class="input-group-append">
          <button
              class="btn btn-light"
              type="button"
              @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <h4>The personal data of employees</h4>
      <table class="MindTrack-table">
        <th>Employee Name</th>
        <th>Department of Employee</th>
        <th>Age of Employee</th>
        <th>Gender of Employee</th>
        <th>Mental Health Test Result</th>
        <th>Psychological Treatments</th>
        <th>Performance Evaluation</th>
        <th>Medical History</th>
        <th>Current mental Health Status</th>
        <th>Personal Development Program</th>
        <th>Mental Health Measures Evaluation</th>
        <th>Delete or Edit details</th>
        <tr
            :class="{ active: index == currentIndex }"
            v-for="(mindTrack, index) in employees"
            :key="index"
            @click="setActiveEmployee(mindTrack, index)">
          <td>
            {{ mindTrack.employee_name }}
          </td>
          <td>
            {{ mindTrack.department }}
          </td>
          <td>
            {{ mindTrack.age}}
          </td>
          <td>
            {{ mindTrack.gender}}
          </td>
          <td>
            {{ mindTrack.mental_health_test_results}}
          </td>
          <td>
            {{ mindTrack.psychological_treatments}}

          </td>
          <td>
            {{ mindTrack.performance_evaluation}}
          </td>
          <td>
            {{ mindTrack.medical_history}}
          </td>
          <td>
            {{ mindTrack.current_mental_health_status}}
          </td>
          <td>
            {{ mindTrack.mental_health_measures_evaluation}}
          </td>
          <td>
            {{ mindTrack.personal_development_program}}
          </td>
          <td>
            <button class="deleteButton" @click="deleteMindTrack(mindTrack.id)">Delete</button>


            <router-link
                :to="'/tutorials/' + currentEmployee.id"
                class="editButton"
            >Edit</router-link
            >
          </td>

        </tr>

      </table>

      <button class="removeButton" @click="removeAllEmployees">
        Remove All
      </button>

    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import EmployeeDataService from "@/services/MindTrackDataService";
import Employee from "@/types/MindTrack";
import ResponseData from "@/types/ResponseData";
import MindTrackDataService from "@/services/MindTrackDataService";

export default defineComponent({
  name: "employees-list",
  data() {
    return {
      employees: [] as Employee[],
      currentEmployee: {} as Employee,
      currentIndex: -1,
      employee_name: "",
    };
  },
  methods: {
    retrieveEmployees() {
      EmployeeDataService.getAll()
          .then((response: ResponseData) => {
            this.employees = response.data;
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveEmployees();
      this.currentEmployee = {} as Employee;
      this.currentIndex = -1;
    },

    setActiveEmployee(employee: Employee, index = -1) {
      this.currentEmployee = employee;
      this.currentIndex = index;
    },

    deleteMindTrack(id: any) {
      MindTrackDataService.delete(id)
          .then((response: ResponseData) => {
            console.log(response);
            this.refreshList();
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },

    removeAllEmployees() {
      EmployeeDataService.deleteAll()
          .then((response: ResponseData) => {
            console.log(response.data);
            this.refreshList();
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },



    searchName() {
      EmployeeDataService.findByEmployeeName(this.employee_name)
          .then((response: ResponseData) => {
            this.employees = response.data;
            this.setActiveEmployee({} as Employee);
            console.log(response.data);

          })
          .catch((e: Error) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.retrieveEmployees();
  },
});
</script>

<style>

.list {
  text-align: center;
  max-width: 2000px;
 margin: 0 auto;
}
.MindTrack-table{
  border-collapse: collapse;

}

.MindTrack-table td{
  padding: 1px;

}


table, td,th{
  border: 1px solid black;

  margin-left: auto;
  text-align: center;
}
 th{

  color: rgba(10, 0, 42, 0.87);

}
h4 {
  color: rgba(10, 0, 42, 0.87);
  font-family: "Monotype Corsiva";
  font-size: 40px;

}
.deleteButton {
  background-color: rgba(197, 96, 96, 0.87);
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

}
.deleteButton:hover{
  background-color: #ce3a4e;
  color: white;
}
.editButton {
  background-color: #20b28b;
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

}
.editButton:hover{
  background-color: #73d9ac;
  color: white;
}
.removeButton {
  background-color: rgba(197, 96, 96, 0.87);
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  margin-top: 10px;


}
.removeButton:hover{
  background-color: #ce3a4e;
  color: white;
}
.form-control{
  border: 2px solid rgba(239,207,207,0.87);
 font-size: 20px;

  border-bottom-left-radius: 8px;
}
.input-group-append{
  border: 2px solid rgba(239,207,207,0.87);
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: 0px


}
body {
  background-image: url("7.png");
  background-color: rgba(204, 204, 204, 0.1);
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;

}


</style>

