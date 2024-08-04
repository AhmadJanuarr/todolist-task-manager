import img from "../../../public/image/img1.png";
export function Header() {
  return (
    <>
      <div className="container w-full h-56 flex">
        <img src={img} alt="svg" className="w-[138px] h-[128px] self-center" />
        <div className="flex flex-col justify-center pl-5">
          <h1 className="text-4xl">My Tasks</h1>
          <p className="text-xl text-green ">
            Manage and Prioritize Your Todolist Tasks Effectively
          </p>
        </div>
      </div>
    </>
  );
}
