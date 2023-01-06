import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const ListReports = () => {

    // call the api to display/fetch the data
    const [reports, setreport] = useState([])
    useEffect(() => {
        axios.get("https://campus-maintenance-system.herokuapp.com/api/v1/report")
        .then(res => {
            console.log('Faults',res.data)
            setreport(res.data)
        }).catch(err => console.log(err))
    }, [])

    const deleteReport = (id, e) => {
        e.preventDefault();
        axios.delete(`https://campus-maintenance-system.herokuapp.com/api/v1/report/${id}`)
        .then(res => console.log('Deleted...', res))
        .catch(error => console.log(error));
    }

    const logOut=()=>{

        localStorage.clear();
        swal("Good job!", "Logout Successfully!", "success");
        navigate("/")

    }

    const arry = reports.map((data, index) => {
        return (
            <tbody className=' bg-slate-50 divide-y divide-gray-100'>
            <tr key={data.id}>
                <td className='text-left px-1 py-2 whitespace-normal'>
                    <div className='text-sm text-black font=bold'>{data.faultName}</div>
                </td>
                <td className='text-left px-1 py-2 whitespace-normal'>
                    <div className='text-sm text-black font=bold'>{data.description}</div>
                </td>
                <td className='text-left px-1 py-2 whitespace-normal'>
                    <div className='text-sm text-black font=bold'>{data.roomNo}</div>
                </td>
                <td className='text-left px-1 py-2 whitespace-normal'>
                    <div className='text-sm text-black font=bold'>{data.dateOccured}</div>
                </td>
                <td className='text-right px-1 py-2 whitespace-normal'>
                    <div className='items-center justify-center h-16 w-full my-1 space-x-4 pt-4'>
                        <button
                        onClick={(e) => deleteReport(data.id,e)}
                        className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-green-700'>
                            Remove
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>

        )
    })
    
    const navigate = useNavigate();
  return (
    <div className='p-5 h-screen bg-gray-100'>
        <h1 className='text-xl mb-2'></h1>

        <div className='overflow-auto rounded-lg shadow '>
            <div className='container mx-auto my-4'>
       
            <div className='flex shadow border-b'>
                <table className='min-w-full'>
                    <thead className=' bg-slate-50'>
                        <tr>
                            <td className='text-left font-medium text-black uppercase tracking-wider py-2 px-6'>
                                Fault Name
                            </td>
                            <td className='text-left font-medium text-black uppercase tracking-wider py-2 px-6'>
                                Fault Desc.
                            </td>
                            <td className='text-left font-medium text-black uppercase tracking-wider py-2 px-6'>
                                Room Name
                            </td>
                            <td className='text-right font-medium text-black uppercase tracking-wider py-2 px-6'>
                                Date Occured
                            </td>
                            <td className='text-right font-medium text-black uppercase tracking-wider py-2 px-6'>
                                State
                            </td>
                        </tr>
                    </thead>
                    {arry}
                </table>
            </div>
       <br></br>
       <div className='h-12'>
           <button 
           onClick={() =>logOut()}
            className='rounded bg-gray-700 text-white px-6 py-2 font-semibold'>
               Logout
           </button>
       </div>
   </div>
        </div>
    </div>
  )
}

export default ListReports