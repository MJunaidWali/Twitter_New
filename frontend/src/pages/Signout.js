import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signout = () => {
  useEffect(() => {
    (async () => {
      try {
        await axios.post(
          'http://localhost:8000/logout/',
          {
            refresh_token: localStorage.getItem('refresh_token')
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        localStorage.clear();
        delete axios.defaults.headers.common['Authorization'];
        window.location.href = '/login';
      } catch (error) {
        console.log('Logout failed', error);
      }
    })();
  }, []);

  return (
    <div>
      <b>You are Logged Out!</b>
      <button>
        <Link to ='/'>Login Again</Link>
      </button>
    </div>
  );
};

export default Signout;
