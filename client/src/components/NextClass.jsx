import { useEffect, useState } from "react";
import axios from "axios";

const NextClass = () => {

    const [nextClass, setNextClass] = useState(null);

    useEffect(() => {

        const fetchNextClass = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axios.get(
                    "http://localhost:5000/api/schedules/next",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setNextClass(response.data.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchNextClass();

    }, []);

    if (!nextClass) {

        return <h3>No more classes today.</h3>;

    }

    return (

        <div
            style={{
                background: "#ffffff",
                padding: "20px",
                marginBottom: "20px"
            }}
        >

            <h2>Next Class</h2>

            <p><strong>Subject:</strong> {nextClass.subject}</p>

            <p><strong>Faculty:</strong> {nextClass.faculty}</p>

            <p><strong>Room:</strong> {nextClass.classroom}</p>

            <p><strong>Time:</strong> {nextClass.startTime} - {nextClass.endTime}</p>

        </div>

    );

};

export default NextClass;