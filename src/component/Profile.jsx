import React, { useState } from 'react';


const initialProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 8901',
  address: '123 Main Street, New York, NY',
  image: 'https://i.pravatar.cc/150?img=12',
};

function Profile() {
  const [profile] = useState(initialProfile);
  const [showOrders, setShowOrders] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleLogout = () => {
    alert('Logged out successfully!');
  };

  const handleChangePassword = () => {
    setShowChangePassword((prev) => !prev);
    setShowOrders(false); // Close orders if open
  };

  const handleViewOrders = () => {
    setShowOrders((prev) => !prev);
    setShowChangePassword(false); // Close change password if open
  };

  const handleEditProfile = () => {
    alert('Opening edit profile...');
  };

  return (
    <>
      <div className="ctsm-bg-img-about">
        <img src="assets/images/img89.jpg" className="cstm-img-banner" alt="banner" />
        <div className="overlay"></div>
      </div>

      <div className="profile-page container py-5">
        <div className="card shadow-lg p-4 profile-card">
          <div className="row g-4 align-items-center">
            <div className="col-md-4 text-center">
              <img
                src={profile.image}
                alt="Profile"
                className="profile-img rounded-circle shadow"
              />
              <h4 className="mt-3">{profile.name}</h4>
            </div>

            <div className="col-md-8">
              <h5 className="mb-3">Profile Information</h5>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">
                  <strong>Email:</strong> {profile.email}
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {profile.phone}
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> {profile.address}
                </li>
              </ul>

              <div className="btn-group-vertical w-100 gap-2">
                {/* <button className="btn btn-outline-primary" onClick={handleEditProfile}>
                  ✏️ Edit Profile
                </button> */}
                <button className="btn btn-outline-warning" onClick={handleChangePassword}>
                  🔐 Change Password
                </button>
                <button className="btn btn-outline-info" onClick={handleViewOrders}>
                  📦 Order History
                </button>
                <button className="btn btn-outline-danger" onClick={handleLogout}>
                  🚪 Logout
                </button>
              </div>
            </div>
          </div>

          {/* Conditional Sections */}
          {showChangePassword && (
            <div className="mt-5">
              <h5>Change Password</h5>
              <form className="mt-3">
                <div className="mb-3">
                  <label className="form-label">Current Password</label>
                  <input type="password" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" required />
                </div>
                <button className="btn btn-success" type="submit">Update Password</button>
              </form>
            </div>
          )}

          {showOrders && (
            <div className="mt-5">
              <h5>Your Orders</h5>
              <table className="table table-bordered mt-3">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Wireless Headphones</td>
                    <td>2025-08-10</td>
                    <td><span className="badge bg-success">Delivered</span></td>
                    <td>$99.98</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Smart Watch</td>
                    <td>2025-08-07</td>
                    <td><span className="badge bg-warning text-dark">Shipped</span></td>
                    <td>$89.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
