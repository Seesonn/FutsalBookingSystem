const AdminDashboard = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white fixed h-full">
          <div className="text-xl font-bold p-4">Admin Dashboard</div>
          <ul className="mt-4">
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Overview</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Clients</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Freelancers</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Jobs</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Payments</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Feedback</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="ml-64 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 shadow-lg rounded-md">
              <h2 className="text-gray-700 text-xl font-bold">Total Clients</h2>
              <p className="text-gray-500 text-3xl mt-4">1,234</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 shadow-lg rounded-md">
              <h2 className="text-gray-700 text-xl font-bold">Total Freelancers</h2>
              <p className="text-gray-500 text-3xl mt-4">567</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 shadow-lg rounded-md">
              <h2 className="text-gray-700 text-xl font-bold">Revenue</h2>
              <p className="text-gray-500 text-3xl mt-4">$10,456</p>
            </div>
          </div>
  
          {/* Detailed List */}
          <div className="bg-white mt-6 p-6 rounded-md shadow-lg">
            <h2 className="text-gray-700 text-2xl font-bold mb-4">Recent Jobs</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200 text-gray-600">
                  <th className="p-4">Job ID</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">#001</td>
                  <td className="p-4">Website Development</td>
                  <td className="p-4 text-green-500">Completed</td>
                  <td className="p-4">John Doe</td>
                  <td className="p-4">Jane Smith</td>
                </tr>
                <tr>
                  <td className="p-4">#002</td>
                  <td className="p-4">Mobile App Design</td>
                  <td className="p-4 text-yellow-500">In Progress</td>
                  <td className="p-4">Sarah Lee</td>
                  <td className="p-4">Michael Brown</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;