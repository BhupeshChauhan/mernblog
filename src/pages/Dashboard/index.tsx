import DashboardCard from "../../common/DashboardCard";

const Dashboard = () => {
  return <DashboardCard title={"comming soon"}>
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-blue-900">
          Coming Soon
        </h1>
        <p className="text-gray-700 text-lg">
          This feature is currently under development.
        </p>
    </div>
  </DashboardCard>;
};

export default Dashboard;
