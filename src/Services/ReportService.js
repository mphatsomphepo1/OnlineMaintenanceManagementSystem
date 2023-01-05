import axios from "axios"

const REPORT_API_BASE_URL = "https://campus-maintenance-system.herokuapp.com/api/v1/report"

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
   

    get(){
        return axios.get(REPORT_API_BASE_URL);
    }
    saveFaults(faults){
        return axios.post(REPORT_API_BASE_URL, faults);
    }
}

export default new ReportService();