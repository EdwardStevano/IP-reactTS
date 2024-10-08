import React, { useState, useEffect, FC } from 'react';
import './connectionStatus.scss';

// Importation des ressources
import NoInternet from '../../assets/image/gif/404.gif';
import Internet from '../../assets/image/gif/connextion.gif';

const ConnectionStatus: FC = () => {
    const [isOnline, setIsOnline] = useState<boolean | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleOnlineStatus = (): void => {
            setIsOnline(true);
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 3000);
        };

        const handleOfflineStatus = (): void => {
            setIsOnline(false);
            setIsVisible(true);
        };

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOfflineStatus);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOfflineStatus);
        };
    }, []);

    const handleClose = (): void => {
        setIsVisible(false);
    };

    return isVisible ? (
        <>
            <div
                className={`ConnectionStatus ${isOnline ? 'online' : 'offline'} outline outline-offset-2 outline-slate-200 font-syne z-50`}
            >
                <div className="close-button" onClick={handleClose}></div>

                {isOnline ? (
                    <div>
                        <img
                            src={Internet}
                            alt="No Internet"
                            loading="lazy"
                            width={'240px'}
                            className="img-connection"
                        />
                        <a
                            className="rounded-md"
                            href="https://icons8.com/illustrations/author/kP9rc8JiBCcz"
                        >
                            Illustration by Irene M. Ray
                        </a>
                        <h1>Connexion rétablie</h1>
                        <p>Votre connexion internet est rétablie.</p>
                    </div>
                ) : (
                    <div>
                        <img
                            src={NoInternet}
                            alt="Internet"
                            loading="lazy"
                            width={'300px'}
                            className="img-no-connection"
                        />
                        <a
                            className="rounded-xl"
                            href="https://icons8.com/illustrations/author/7WmtYU90j36d"
                        >
                            Illustration by Fruzka
                        </a>
                        <h1>Pas d&apos;accès Internet</h1>
                        <p>
                            Il semble que vous n&apos;ayez actuellement pas
                            accès à Internet. Nous vous recommandons de vérifier
                            votre connexion Internet.
                        </p>
                    </div>
                )}
            </div>

            <div className="fixed w-screen h-screen backdrop-blur-sm bg-[#00000010]"></div>
        </>
    ) : null;
};

export default ConnectionStatus;
