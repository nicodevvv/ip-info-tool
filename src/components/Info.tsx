import { useEffect, useState } from 'react';
import './Info.css'
import type { IpData } from '../types';
import { useTranslation } from 'react-i18next';
import { apiInfoMock } from '../mocks/api-info-mock'
import { getApiData } from '../services/ip-info';
import { CopyButton } from './CopyButton';
import { ToastContainer, toast } from 'react-toastify';

export const Info = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<IpData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [ip, setIp] = useState<string>('');
    const [searchIp, setSearchIp] = useState<string>('');

    const handleSearch = () => {
        setSearchIp(ip);
    };

    useEffect(() => {
        setLoading(true);
        getApiData(searchIp)
            .then((data) => {
                setData(data);
                setError(null);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                toast.error('Error fetching data, using mock data instead. ONLY FOR DEBUGGING PURPOSES');
                //ONLY FOR DEBUGGING PURPOSES
                setData(apiInfoMock);
                console.log("Error fetching IP data:", error);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [searchIp]);
    return (
        <>
            <header>
                <section className='terminal-header'>
                    <p className='fake-button exit'></p>
                    <p className='fake-button resize'></p>
                    <p className='fake-button minimize'></p>
                </section>
            </header>
            <main className="info-container">
                <h2>IP Info</h2>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        value={ip}
                        onChange={(e) => setIp(e.target.value)}
                        disabled={loading}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button onClick={handleSearch} disabled={loading || !ip}>
                        {t('searchButton')}
                    </button>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && data && (
                    <section className='basic-info'>
                        <div className='content-data'>
                            <p className='title'>
                                {t('ipInfo.ipv4')}</p>
                            <div className='value'>
                                {data.ip}
                                <CopyButton text={data.ip} />
                            </div>
                        </div>
                        <div className='content-data'>
                            <p className='title'>{t('ipInfo.country')}</p>
                            <div className='value'>
                                {data.country_name} {data.emoji_flag}
                            </div>
                        </div>
                        <div className="content-data">
                            <p className='title'>{t('ipInfo.city')}</p>
                            <div className='value'>
                                {data.city}
                            </div>
                        </div>
                        <div className="content-data">
                            <p className='title'>{t('ipInfo.region')}</p>
                            <div className='value'>{data.region}</div>
                        </div>
                        <div className="content-data">
                            <p className='title'>{t('ipInfo.asn')}</p>
                            <div className='value'>{data.asn.asn} - {data.asn.name}</div>
                        </div>
                        <div className="content-data">
                            <p className='title'>{t('ipInfo.location')}</p>
                            <div className='value'>{data.latitude}, {data.longitude}
                                <CopyButton text={`${data.latitude}, ${data.longitude}`} />
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <ToastContainer limit={1} />
        </>
    );
}