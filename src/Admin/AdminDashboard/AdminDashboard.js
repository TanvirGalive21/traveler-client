import React, { useState } from 'react';

const AdminDashboard = () => {
    const [control, setControl] = useState("allUsers");
    console.log(control);
    return (
        <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("allVolunteers")}
                    className="admin-menu p-2"
                  >
                    All Volunteers
                  </li>
                  <li
                    onClick={() => setControl("addEvents")}
                    className="admin-menu p-2"
                  >
                    Add Events
                  </li>
                  <li
                    onClick={() => setControl("allEvents")}
                    className="admin-menu p-2"
                  >
                    Manage Events
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {/* {control === "allVolunteers" && <AllUers></AllUers>}
              {control === "allEvents" && <Events></Events>}
              {control === "addEvents" && <AddEvents></AddEvents>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AdminDashboard;