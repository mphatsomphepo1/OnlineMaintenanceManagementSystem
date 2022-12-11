import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import ReportService from '../Services/ReportService'

const ListReports = () => {

    // call the api to display/fetch the data
    const [reports, setreport] = useState([])
    // const [remove, setRemove] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/report")
        .then(res => {
            console.log('Faults',res.data)
            setreport(res.data)
        }).catch(err => console.log(err))
    }, [])

    const deleteReport = (id, e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/api/v1/report/${id}`)
        .then(res => console.log('Deleted...', res)).catch(error => console.log(error));
        // setRemove(true);
    }
    // const deleteReport = (e, id) => {
    //     e.preventDefault();
    //     ReportService.deleteReport(id).then((res) => {
    //         if(reports) {
    //             setreport((prevElement) => {
    //                 return prevElement.filter((report) => report.id !== id);
    //             });
    //         }
    //     })
    // }

    const arry = reports.map((data, index) => {
        return (
            <tbody className='bg-gray-300'>
            <tr key={data.id}>
                <td className='text-left px-1 py-2 whitespace-normal'>
                    <div className='text-sm text-gray-600'>{data.faultName}</div>
                </td>
                <td className='text-left px-1 py-2 whitespace-normal'>
                    <div className='text-sm text-gray-600'>{data.description}</div>
                </td>
                <td className='text-left px-1 py-2 whitespace-normal'>
                    <div className='text-sm text-gray-600'>{data.roomNo}</div>
                </td>
                <td className='text-right px-1 py-2 whitespace-normal'>
                    <div className='items-center justify-center h-16 w-full my-1 space-x-4 pt-4'>
                        <button
                        className='rounded text-white font-semibold bg-indigo-500 py-2 px-2 hover:bg-green-900'>
                            Pending
                        </button>
                        <button
                        onClick={(e) => deleteReport(data.id,e)}
                        className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-green-700'>
                            Fixed/Remove
                        </button>
                        {/* <button
                        onClick={(e, id) => deleteReport(data.id,e)}
                        className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-green-700'>
                            Remove
                        </button> */}
                    </div>
                </td>
            </tr>
        </tbody>
        )
    })
    
    const navigate = useNavigate();
  return (
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button 
            onClick={()=> navigate("/addreport")}
             className='rounded bg-slate-700 text-white px-6 py-2 font-semibold'>
                Add Fault
            </button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-400'>
                    <tr>
                        <td className='text-left font-medium text-gray-700 uppercase tracking-wider py-2 px-6'>
                            Fault Name
                        </td>
                        <td className='text-left font-medium text-gray-700 uppercase tracking-wider py-2 px-6'>
                            Fault Desc.
                        </td>
                        <td className='text-left font-medium text-gray-700 uppercase tracking-wider py-2 px-6'>
                            Room Name
                        </td>
                        <td className='text-right font-medium text-gray-700 uppercase tracking-wider py-2 px-6'>
                            State
                        </td>
                    </tr>
                </thead>
                {arry}
            </table>
        </div>
    </div>
  )
}

export default ListReports