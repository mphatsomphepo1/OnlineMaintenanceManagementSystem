import axios from "axios"

const REPORT_API_BASE_URL = "http://localhost:8080/api/v1/report"

class ReportService{
    
    saveReport(report){
        return axios.post(REPORT_API_BASE_URL, report)
    }
    getReports(){
        return axios.get(REPORT_API_BASE_URL);
    }
    deleteReport(id){
        return axios.delete(REPORT_API_BASE_URL + "/" + id);
    }
    updateReport(report, id){
        return axios.put(REPORT_API_BASE_URL + "/" + id, report);
    }

    get(){
        return axios.get(REPORT_API_BASE_URL);
    }
    saveFaults(faults){
        return axios.post(REPORT_API_BASE_URL, faults);
    }
}

export default new ReportService();