import Penrose from "./penrose";

const Sidebar = () => {
  return (
    <div className="absolute border-r border-purple hover:bg-purple left-0 h-screen w-24 hover:w-64 transition-all ease-in-out duration-300 flex flex-col p-5 items-center">
      <Penrose fill="white" />
    </div>
  );
};

export default Sidebar;
