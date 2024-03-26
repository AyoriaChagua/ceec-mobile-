import { useEffect, useState } from 'react';
import { GetUserAdmin } from '../../../../../services/clients.service';
import {UserAdmin } from '../../../../../interfaces/ClientsInterface';
import { useAuth } from '../../../../../context/AuthContext';


export const useUserAdmin = () => {
  const [ useradmin, setUserAdmin] = useState<UserAdmin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userInfo, userToken } = useAuth();

  useEffect(() => {
    const fetchUserAdminData = async () => {
      if (userToken) {
        try {
          const data = await GetUserAdmin(userToken);
          if (data=== null) {
            setUserAdmin([]); //establece el estado a un array vacío
          } else if (Array.isArray(data)) {
            setUserAdmin(data); //establece el estado a ese array
          } else {
            setUserAdmin([data]); //campaigndata es un solo objeto Campaign, conviértelo en un array
          }
          console.log(data)
        } catch (error) {
          console.error('Error fetching ranking data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserAdminData();
  }, [userToken]); 

  return { useradmin, loading };
};