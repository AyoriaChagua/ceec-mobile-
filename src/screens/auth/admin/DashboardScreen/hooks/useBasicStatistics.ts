import { useEffect, useState } from "react";
import { GetBasicStatistics } from "../../../../../services/statistics.service";
import { io } from "socket.io-client";
import { API_SOCKET_URL } from "../../../../../utils/Endpoints";
import { BasicStatistics } from "../../../../../interfaces/StatisticsInterface";

const socket = io(API_SOCKET_URL);

export const useActiveUsers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [basicStatistics, setBasicStatistics] = useState<BasicStatistics | null>(null);
    const [activeUsers, setActiveUsers] = useState<{
        total?: number;
        actives?: number;
    }>({
        total: 0,
        actives: 0,
    });

    useEffect(() => {
        setIsLoading(true);

        GetBasicStatistics()
            .then((data) => {
                setBasicStatistics(data);
                console.log(data);
                setActiveUsers((prevState) => ({
                    ...prevState,
                    total: data.totalStudents,
                }));
            })
            .finally(() => {
                setIsLoading(false);
            });

        socket.on("active-users", (data: []) => {
            setActiveUsers((prevState) => ({
                ...prevState,
                actives: data.length,
            }));
        });

        return () => {
            socket.off("active-users");
        };
    }, []);

    return { activeUsers, isLoading, basicStatistics };
};
