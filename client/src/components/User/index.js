import React from "react";
import UserLayout from "../hoc/UserLayout";
import MyButton from "../utils/Button";

const UserDashboard = ({user}) => {
  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User Information</h1>
          <div>
  <span>{user.userData.name}</span>
  <span>{user.userData.lastName}</span>
  <span>{user.userData.email}</span>
          </div>
          <MyButton
            type="default"
            title="Edit Account Info"
            linkTo="/user/user_profile"
          />
        </div>
        <div className='user_nfo_panel'>
          <h1>History Purchases</h1>
          <div className='user_product_block_wrapper'>
            History
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
