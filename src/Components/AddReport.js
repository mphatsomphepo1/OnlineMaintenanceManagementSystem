import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ReportService from '../Services/ReportService'

const AddReport = () => {


  const [report, setReport] = useState({
    id: "",
    faultName: "",
    description: "",
    dateOccured: "",
    roomNo:""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setReport({...report, [e.target.name]: value});
  }

  const saveReport = (e) => {
    e.preventDefault();
    console.log(report)
    ReportService.saveReport(report)
    .then((Response)=> {
      console.log(Response)
      navigate("/list")
    })
    .catch((error)=> {
      console.log(error)
    })
  };

  const clear = (e) => {
    e.preventDefault();
    setReport({
      id: "",
      faultName: "",
      description: "",
      roomNo:"",
      dateOccured: ""
    })
  }
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
      <div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
            <h1>Add new Fault</h1>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-black text-sm font-normal'>
                Fault Name: 
            </label>
            <input 
            type='text' 
            name="faultName"
            value={report.faultName}
            onChange={(e)=> handleChange(e)}
            className='h-10 w-96 border bg-slate-400 mt-2 px-2'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-black text-sm font-normal'>
                Desc: 
            </label>
            <textarea 
            type='text'
            name="description"
            value={report.description}
            onChange={(e)=> handleChange(e)}
             className='h-10 w-96 bg-slate-400 border mt-2 px-2'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-black text-sm font-normal'>
                Room No.: 
            </label>
            <input 
             type='text'
             name="roomNo"
             value={report.roomNo}
             onChange={(e)=> handleChange(e)}
              className='h-10 w-96 bg-slate-400 border mt-2 px-2'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-black text-sm font-normal'>
                Date: 
            </label>
            <textarea 
            type='date'
            name="dateOccured"
            value={report.dateOccured}
            onChange={(e)=> handleChange(e)}
             className='h-10 w-96 bg-slate-400 border mt-2 px-2'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
           <button
           onClick={saveReport} 
           className='rounded text-white font-semibold bg-slate-900 py-2 px-8 hover:bg-indigo-500'>Save</button>
           <button
           onClick={clear}
            className='rounded text-white font-semibold bg-red-400 py-2 px-8 hover:bg-indigo-500'>
              Clear
            </button>
        </div>
      </div>
    </div>
  )
}

export default AddReport
