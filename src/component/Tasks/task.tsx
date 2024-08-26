import DesktopComponent from "./ResponsiveComponent/DesktopComponent";
import MobileComponent from "./ResponsiveComponent/MobileComponent";

export default function Task({

}) {
  return (
    <div className="overflow-y-scroll ">
      <div className="w-full h-[26em] laptop:h-[20em]">
        <DesktopComponent />
        <MobileComponent />
      </div>
    </div>
  );
}
