import { useEffect, useState } from 'react';
import { GetDocumentTypes } from '../../../../../services/profile.service';
import { DocumentType } from '../../../../../interfaces/UserInterfaces';

export const useProfile = () => {
    const [documentTypes, setDocumentTypes] = useState<DocumentType[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const types = await GetDocumentTypes();
                setDocumentTypes(types);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching document types:', error);
                setError(`${error}`);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { documentTypes, loading, error };
};

