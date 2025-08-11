import Users from "../../components/Users"
import SideNav from "../../components/SideNav"

const SuperAdminDashboard = () => {
  return (
    <div className="h-screen grid grid-cols-6 gap-4 bg-gray-100 p-6">
        <SideNav/>
        <Users/>
    </div>
  )
}

export default SuperAdminDashboard