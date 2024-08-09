import DesktopComponent from "./ResponsiveComponent/DesktopComponent";
import MobileComponent from "./ResponsiveComponent/MobileComponent";

export default function Task({
  tasks,

  selectedTasksById,
  setSelectedTasksById,
}) {
  return (
    <div className="overflow-y-auto ">
      <div className="w-full  h-[26em]">
        {/* <DesktopComponent tasks={tasks} /> */}
        <MobileComponent
          tasks={tasks}
          setSelectedTasksById={setSelectedTasksById}
          selectedTasksById={selectedTasksById}
        />
      </div>
    </div>
  );
}
