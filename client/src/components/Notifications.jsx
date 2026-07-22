import { useEffect, useState } from "react";
import axios from "axios";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5000/api/notifications",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setNotifications(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div style={{ padding: "20px", background: "#fff", marginBottom: "20px" }}>
      <h2>Notifications</h2>

      {notifications.map((notification) => (
        <div key={notification._id}>
          <h4>{notification.title}</h4>
          <p>{notification.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Notifications;