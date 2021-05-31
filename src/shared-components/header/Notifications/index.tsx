import React from 'react';
import { Avatar } from 'antd';
import { BellFilled } from '@ant-design/icons';
import styles from './Notification.module.scss';

const Notifications: React.FC = (props) => {
    return (
        <div className={styles['notifications-container']}>
            <div className={styles['head']}>
                <h3>YOUR NOTIFICATIONS</h3>
            </div>
            <div className={styles['notification-items-container']}>
                <div className={styles['notification-item']}>
                    <Avatar icon={<BellFilled />} /><span className={styles['text']}>You have 3 new Orders</span>
                </div>
                <div className={styles['notification-item']}>
                    <Avatar icon={<BellFilled />} /><span className={styles['text']}>You have 3 new Orders</span>
                </div>
                <div className={styles['notification-item']}>
                    <Avatar icon={<BellFilled />} /><span className={styles['text']}>You have 3 new Orders</span>
                </div>
                <div className={styles['notification-item']}>
                    <Avatar icon={<BellFilled />} /><span className={styles['text']}>You have 3 new Orders</span>
                </div>
                <div className={styles['notification-item']}>
                    <Avatar icon={<BellFilled />} /><span className={styles['text']}>You have 3 new Orders</span>
                </div>
                <div className={styles['notification-item']}>
                    <Avatar icon={<BellFilled />} /><span className={styles['text']}>You have 3 new Orders</span>
                </div>
                <div className={styles['notification-item']}>
                    <Avatar icon={<BellFilled />} /><span className={styles['text']}>You have 3 new Orders</span>
                </div>
            </div>
        </div>
    )
} 

export default Notifications;