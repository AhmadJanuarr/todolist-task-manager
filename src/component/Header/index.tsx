import img from "../../../public/image/img1.png";
export function Header() {
  return (
    <>
      <div className="container w-full h-30 flex py-3">
        <img src={img} alt="svg" className="w-[100px] h-[100px] self-center" />
        <div className="flex flex-col justify-center pl-5">
          <h1 className="text-2xl">My Tasks</h1>
          <p className="text-md text-green ">
            Manage and Prioritize Your Todolist Tasks Effectively
          </p>
        </div>
      </div>
    </>
  );
}
