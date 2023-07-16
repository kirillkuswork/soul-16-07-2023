import React, { FC, useState } from 'react';
import styles from './SharedFlat.module.scss';

interface IShareFlat {
    top?: boolean;
    active: boolean;
}

const SharedFlat: FC<IShareFlat> = ({ top, active }) => {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    const handleCopied = () => {
        copy();
    };

    return (
        <>
            {active && (
                <div className={top ? styles.shared__top : styles.shared}>
                    <a
                        href={`https://telegram.me/share/url?url=${window.location.href}&text=${document.title}`}
                        target='_blank'
                        rel='noreferrer'
                        className={styles.shared__link}
                    >
                        <div className={styles.shared__icon}>
                            <svg width='15' height='13' viewBox='0 0 15 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M1.43578 5.23924C5.33135 3.54239 7.92839 2.42362 9.22692 1.88312C12.9388 0.339716 13.7091 0.0716604 14.2122 0.0625791C14.3229 0.0608046 14.5692 0.0881527 14.73 0.218109C14.8636 0.327712 14.9012 0.475936 14.92 0.580005C14.9367 0.683971 14.9596 0.92092 14.9408 1.10589C14.7404 3.2186 13.8699 8.34547 13.4273 10.7118C13.2415 11.7131 12.872 12.0488 12.515 12.0815C11.7384 12.1529 11.1497 11.5688 10.3981 11.0763C9.22274 10.3054 8.55887 9.82562 7.41692 9.07343C6.09752 8.20413 6.95346 7.72627 7.70501 6.94548C7.90125 6.7411 11.3208 3.63154 11.3856 3.34949C11.3939 3.31421 11.4023 3.18269 11.3229 3.11338C11.2457 3.04386 11.1309 3.06766 11.0474 3.08645C10.9284 3.11317 9.05155 4.35491 5.41068 6.81146C4.87832 7.17763 4.39608 7.35613 3.96184 7.34673C3.48586 7.3365 2.56729 7.07701 1.88462 6.8553C1.04956 6.58328 0.383597 6.43944 0.442051 5.97744C0.471279 5.73694 0.803216 5.4908 1.43578 5.23924Z'
                                    fill='#24292E'
                                />
                            </svg>
                        </div>
                        <p className={styles.shared__name}>Telegram</p>
                    </a>
                    <a
                        href={`https://vk.com/share.php?url=${window.location.href}`}
                        target='_blank'
                        rel='noreferrer'
                        className={styles.shared__link}
                    >
                        <div className={styles.shared__icon}>
                            <svg width='17' height='11' viewBox='0 0 17 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M16.4559 1.17303C16.5724 0.789898 16.4559 0.507812 15.8981 0.507812H14.0561C13.5874 0.507812 13.3713 0.751304 13.2541 1.02006C13.2541 1.02006 12.3173 3.26271 10.9904 4.71944C10.5609 5.14187 10.3659 5.2759 10.1315 5.2759C10.0143 5.2759 9.83817 5.14187 9.83817 4.75804V1.17303C9.83817 0.71271 9.70906 0.507812 9.31891 0.507812H6.42228C6.12966 0.507812 5.95354 0.721131 5.95354 0.923923C5.95354 1.35968 6.61735 1.46073 6.68541 2.68731V5.35238C6.68541 5.9369 6.57805 6.04286 6.34368 6.04286C5.71917 6.04286 4.19998 3.78969 3.29829 1.21162C3.12356 0.709903 2.94673 0.507812 2.47589 0.507812H0.632511C0.106232 0.507812 0.000976562 0.751304 0.000976562 1.02006C0.000976562 1.49862 0.625494 3.876 2.90954 7.02033C4.43224 9.16755 6.57595 10.3317 8.52879 10.3317C9.69994 10.3317 9.84449 10.0735 9.84449 9.62787V8.00483C9.84449 7.48767 9.95536 7.38452 10.3266 7.38452C10.6002 7.38452 11.0683 7.51925 12.1615 8.55426C13.4106 9.78154 13.6162 10.3317 14.3193 10.3317H16.1612C16.6875 10.3317 16.9514 10.0735 16.7998 9.56261C16.6328 9.05457 16.0363 8.31708 15.2455 7.44206C14.8161 6.94385 14.1719 6.40704 13.9761 6.13829C13.7032 5.79375 13.7811 5.64008 13.9761 5.33344C13.9761 5.33344 16.2216 2.22769 16.4552 1.17303H16.4559Z'
                                    fill='#24292E'
                                />
                            </svg>
                        </div>
                        <p className={styles.shared__name}>Вконтакте</p>
                    </a>
                    <div onClick={() => handleCopied()} className={styles.shared__link}>
                        <div className={styles.shared__icon}>
                            <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M10.1052 5.41992H2.50776C1.66977 5.41992 0.988281 6.10141 0.988281 6.9394V14.5368C0.988281 15.3748 1.66977 16.0563 2.50776 16.0563H10.1052C10.9432 16.0563 11.6246 15.3748 11.6246 14.5368V6.9394C11.6246 6.10141 10.9432 5.41992 10.1052 5.41992Z'
                                    fill='#24292E'
                                />
                                <path
                                    d='M14.5378 0.988281H6.94038C6.53739 0.988281 6.1509 1.14837 5.86594 1.43333C5.58099 1.71828 5.4209 2.10477 5.4209 2.50776V4.02724H11.4988C11.9018 4.02724 12.2883 4.18733 12.5733 4.47229C12.8582 4.75725 13.0183 5.14373 13.0183 5.54672V11.6246H14.5378C14.9408 11.6246 15.3273 11.4646 15.6122 11.1796C15.8972 10.8946 16.0573 10.5082 16.0573 10.1052V2.50776C16.0573 2.10477 15.8972 1.71828 15.6122 1.43333C15.3273 1.14837 14.9408 0.988281 14.5378 0.988281Z'
                                    fill='#24292E'
                                />
                            </svg>
                        </div>
                        <p className={styles.shared__name}>Скопировать ссылку</p>
                    </div>
                </div>
            )}
            {copied && <div className={styles.shared__notification}>Ссылка скопирована</div>}
        </>
    );
};

export default SharedFlat;