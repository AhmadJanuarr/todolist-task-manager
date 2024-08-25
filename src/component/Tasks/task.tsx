import DesktopComponent from "./ResponsiveComponent/DesktopComponent";
import MobileComponent from "./ResponsiveComponent/MobileComponent";

export default function Task({
  tasks,
  selectedTasksById,
  setSelectedTasksById,
}) {
  return (
    <div className="overflow-y-scroll ">
      <div className="w-full h-[26em] laptop:h-[20em]">
        <DesktopComponent
          tasks={tasks}
          setSelectedTasksById={setSelectedTasksById}
          selectedTasksById={selectedTasksById}
        />
        <MobileComponent
          tasks={tasks}
          setSelectedTasksById={setSelectedTasksById}
          selectedTasksById={selectedTasksById}
        />
      </div>
    </div>
  );
}
