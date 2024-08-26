import FormInput from "./taskFormInput";
export default function TaskForm() {
  return (
    <div className="absolute flex flex-col items-center justify-center w-screen h-screen">
      <div className="py-6 px-7 laptop:w-[36em] w-full z-20	">
        <FormInput />
      </div>
    </div>
  );
}
