"use client";

import { closeSidebar, toggleSidebar } from "@/redux/slices/sidebarSlice";
import { useSelector, useDispatch } from "react-redux";

const MobileSidebar = () => {
  const isOpen = useSelector((state: any) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleSidebar())}>
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>
      {isOpen && (
        <div className="sidebar">
          <button onClick={() => dispatch(closeSidebar())}>Close</button>
          <p>Sidebar content goes here...</p>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
