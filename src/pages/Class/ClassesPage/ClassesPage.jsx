import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
// import { AuthContext } from "../../../provider/AuthProvider";
// import "aos/dist/aos.css";
// import AOS from "aos";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/img4.jpg'
// import Swal from "sweetalert2";
// import { log } from "react-modal/lib/helpers/ariaAppHider";
import ClassesPagesData from "./ClassesPagesData";
import useInstructor from "../../../hooks/useInstructor";
const ClassesPage = () => {
 
const [instructor] =useInstructor();

  return (
    <div>
      <Cover img={img} title="Approved Classes"></Cover>
      <div className="container mx-auto my-6">
        <div className="">

          <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructor.map(classItem =>
              <ClassesPagesData
                key={classItem._id}
                classItem={classItem}
              ></ClassesPagesData>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
