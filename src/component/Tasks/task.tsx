import DesktopComponent from "./ResponsiveComponent/DesktopComponent";
import MobileComponent from "./ResponsiveComponent/MobileComponent";

export default function Task() {
  return (
    <div className="scrollbar-hide overflow-y-auto">
      <div className={`w-full h-[27em] desktop:h-[30em] laptop:h-[22em]`}>
        <DesktopComponent />
        <MobileComponent />
      </div>
    </div>
  );
}
