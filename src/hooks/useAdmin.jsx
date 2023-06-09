// import { useQuery } from "react-query"; // Import from "react-query" instead of "@tanstack/react-query"
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//   const { user, loading } = useAuth();
//   const [axiosSecure] = useAxiosSecure();

//   // use axios secure with react query
//   const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
//     ['isAdmin', user?.email],
//     async () => {
//       const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//       return res.data.admin;
//     },
//     {
//       enabled: !loading,
//     }
//   );

//   return [isAdmin, isAdminLoading];
// };

// export default useAdmin;
