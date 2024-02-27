import React, { useState } from "react";
import axios from "axios";
const AppointmentsChart = () => {
  const [patientHealthDetails, setPatientHealthDetails] = useState([]);
  const getPatientDetails = async () => {
    const res = await axios(
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
    );
    const patientData = await res;
    setPatientHealthDetails(patientData.data.appointments);
    // console.log(patientHealthDetails)
  };
  getPatientDetails();
  return (
    <div className="container-xl w-screen h-auto flex justify-center items-center  ">
      <div className="w-3/4 h-auto m-6 rounded-lg border border-black-200 p-8 shadow-lg flex  flex-col">
        <div className="w-100 relative m-5  flex flex-row  justify-items-start">
          <h1 className="h1 text-2xl text-gray-700 text-left">
            Today's Appointments Lists
          </h1>
        </div>
        <div className="w-full h-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-600 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-center">
                  <th className="px-4 py-2">Patient</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Doctor</th>
                  <th className="px-4 py-2">Injury</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {patientHealthDetails.map((patient, index) => {
                  return (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <div className="flex flex-row justify-space-between items-center p-4 m-2" style={{width:"200px"}}>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                            width={30}
                            height={30}
                          />
                          <div className="flex flex-col w-150">
                            <div className="m-1">
                              <th
                                scope="row"
                                key={index}
                                className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {patient.patient_name}
                              </th>
                            </div>
                            <span className="text-center">
                              {"+" + patient.mobile_number}
                            </span>
                          </div>
                        </div>
                        <td className="">
                          <div className="flex flex-row justify-center" style={{width:"200px"}}>
                            <div className="m-1">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div className="m-1">
                              {patient.appointment_date}
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex flex-row justify-center" style={{width:"300px"}}>
                            <div className="m-1">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/66/66163.png"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span className="m-1">
                              {patient.appointment_time}
                            </span>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex flex-row" style={{width:"200px"}}>
                            <div className="m-1">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span className="m-1">{patient.doctor}</span>
                          </div>
                        </td>
                        <td className="">
                          <div class="bg-gray-400 text-gray-900 text-xs font-medium me-2 p-2 rounded dark:bg-gray-700 dark:text-gray-300" style={{width:"100px"}}>
                            {patient.injury}
                          </div>
                        </td>
                        <td className="px-6 py-4 ">
                        <div className="flex">
                            <div className="m-1">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/13680/13680757.png"
                                width={20}
                                height={20}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsChart;
