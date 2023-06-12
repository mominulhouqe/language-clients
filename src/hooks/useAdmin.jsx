
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/admin/${user?.email}`);
      return res.data.admin;
    },
  });

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/instructor/${user?.email}`);
      return res.data.instructor;
    },
  });


  const isAdminOrInstructor = isAdmin ? 'admin' : isInstructor ? 'instructor' : 'student';
  const isLoading = isAdminLoading || isInstructorLoading;

  return [isAdminOrInstructor, isLoading, isAdmin, isInstructor];
};

export default useAdmin;
