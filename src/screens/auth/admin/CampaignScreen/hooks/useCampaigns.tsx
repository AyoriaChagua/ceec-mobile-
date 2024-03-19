import { useEffect, useState } from 'react';
import { GetAllCampaign } from '../../../../../services/campaign.service';
import { Campaign } from '../../../../../interfaces/CampaignInterface';
import { useAuth } from '../../../../../context/AuthContext';


export const useCampaigns = () => {
  const [ campaigns, setCampaign] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userInfo, userToken } = useAuth();

  useEffect(() => {
    const fetchCampaignData = async () => {
      if (userToken) {
        try {
          const campaigndata = await GetAllCampaign(userToken);
          if (campaigndata === null) {
            setCampaign([]); //establece el estado a un array vacío
          } else if (Array.isArray(campaigndata)) {
            setCampaign(campaigndata); //establece el estado a ese array
          } else {
            setCampaign([campaigndata]); //campaigndata es un solo objeto Campaign, conviértelo en un array
          }
          console.log(campaigndata)
        } catch (error) {
          console.error('Error fetching ranking data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCampaignData();
  }, [userToken]); 

  return { campaigns, loading };
};