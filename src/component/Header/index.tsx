import img from "../../../public/image/img1.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useDarkModeStore } from "../../stores/darkModeStore";
export default function Header() {
  const [isDarkMode, toggleTheme] = useDarkModeStore((state) => [state.isDarkMode, state.toggleTheme]);
  return (
    <>
      <div className="container w-full h-30 flex py-3 justify-between">
        <div className="flex">
          <img src={img} alt="svg" className="w-[100px] h-[100px] self-center" />
          <div className="flex flex-col justify-center pl-5">
            <h1 className="text-2xl font-bold">My Tasks</h1>
            <p className="text-md text-zinc-400 font-reguler">
              Manage and Prioritize Your Todolist Tasks Effectively
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <a href="https://github.com/AhmadJanuarr" target="_blank"><GitHubIcon /></a>
          <button onClick={() => toggleTheme()}>{isDarkMode ? <DarkModeIcon /> : <WbSunnyIcon />}</button>
        </div>
      </div>
    </>
  );
}
