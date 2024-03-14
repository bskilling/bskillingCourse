import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from 'react-icons/fa';
import { useRouter } from "next/router";;
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";


interface learningFormProps {
    onClose: () => void;
}

const LearningForm: React.FC<learningFormProps> = ({ onClose }) => {

    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Mobile: '',
        // Add more fields as needed
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Call function to send data to Zoho CRM
        sendToZohoCRM(formData);
    };

    const sendToZohoCRM = (data: any) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Zoho-oauthtoken 1000.166e67392c11e6e21c370b528b8faca8.72a957677f7fb4ed6ddd617be0141377");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "1a99390653=5e5fe628d7b2d0b8b6ba5ce4ffecdb6a; JSESSIONID=86F3D23F65F2B7AA1C34DB8352606C0D; _zcsr_tmp=f1789312-d34a-467f-91bf-f7513ae16a76; crmcsr=f1789312-d34a-467f-91bf-f7513ae16a76; group_name=usergroup1");

        var raw = JSON.stringify({
            "data": [
                {
                    "First_Name": "Ankit",
                    "Last_Name": "Sarangi",
                    "Email": "sagar@gmail.com",
                    "Mobile": "9999999999"
                }
            ]
        });

        var requestOptions: any = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://www.zohoapis.com/crm/v6/Leads", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        // const accessToken = '1000.6b745b18d0b81c76207597f48dac930b.c489ad91ae557f0cd354df165953acdb'; // Your Zoho CRM access token
        // const url = 'https://www.zohoapis.com/crm/v2/Leads'; // Zoho CRM Leads API endpoint

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Zoho-oauthtoken ${accessToken}`,
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         data: [
        //             {
        //                 "First_Name": data.FirstName,
        //                 "Last_Name": data.LastName,
        //                 "Email": data.Email,
        //                 "Mobile": data.Mobile
        //             }
        //         ]
        //     })
        // })
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    };



    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <div className="flex justify-end">
                        <button className="text-gray-500">
                            <FaTimes onClick={onClose} />
                        </button>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4 text-center">Contact Learning Advisor</h2>

                    <div className="mb-4">
                        <input
                            type="text"
                            name="FirstName"
                            placeholder="FirstName*"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            name="LastName"
                            placeholder="LastName*"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="Mobile"
                            placeholder="Phone Number*"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default LearningForm;
