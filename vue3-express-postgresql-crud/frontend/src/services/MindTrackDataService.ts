import http from "@/http-common";

class MindTrackDataService {
  getAll(): Promise<any> {
    return http.get("/employees");
  }

  get(id: any): Promise<any> {
    return http.get(`/employees/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/employees", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/employees/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/employees/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/employees`);
  }

  findByEmployeeName(name: string): Promise<any> {
    return http.get(`/employees?employee_name=${name}`);
  }
}

export default new MindTrackDataService();
