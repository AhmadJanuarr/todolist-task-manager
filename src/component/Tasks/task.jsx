import DesktopComponent from "./ResponsiveComponent/DesktopComponent";
import MobileComponent from "./ResponsiveComponent/MobileComponent";

export default function Task({ tasks }) {
  return (
    <div className="overflow-y-auto ">
      <div className="w-full border h-[26em]">
        {/* <DesktopComponent tasks={tasks} /> */}
        <MobileComponent tasks={tasks} />
      </div>
    </div>
  );
}
