import { useEffect, useState } from 'react';
import './Info.css'
import type { IpData } from '../types';
import { useTranslation } from 'react-i18next';
export const Info = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<IpData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        const url = `https://api.ipdata.co/?api-key=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: IpData) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <main className="info-container">
            <h2>Ip Info</h2>
            <input type="text" name="" id="" disabled={loading} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && data && (
                <section>
                    <p>{t('ipInfo.ip')}: {data.ip}</p>
                    <p>{t('ipInfo.city')}: {data.city}</p>
                    <p>{t('ipInfo.region')}: {data.region}</p>
                    <p>{t('ipInfo.country')}: {data.country_name}</p>
                    <p>{t('ipInfo.latitude')}: {data.latitude}</p>
                    <p>{t('ipInfo.longitude')}: {data.longitude}</p>
                </section>
            )}
        </main>
    );
}