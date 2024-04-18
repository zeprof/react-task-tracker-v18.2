import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function PageLayout ({showAddTask, setShowAddTask}) {
  return (
    <div>
      <Header onAdd={() => setShowAddTask(!showAddTask)}
              showAdd={showAddTask}/>
      <Outlet />
      <Footer/>
    </div>
  );

}
export default PageLayout;