import React, { useState, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../../components/Button';
import ToggleBar, { IToggleBarData } from '../../../../components/ToggleBar';

import styles from './ActiveProducts.module.scss';

const ActiveProductsPage: React.FC = (props) => {
    const history = useHistory();
    const [activeTogglebarKey, setActiveToggleKey] = useState<string>('1');

    const toggleBarData = useMemo<IToggleBarData[]>(() => [
        { key: '1', title: 'Exclusive' },
        { key: '2', title: 'Combo' },
        { key: '3', title: 'Voucher' },
    ], []);

    const handleToggleSelect = useCallback((val: IToggleBarData) => {
        setActiveToggleKey(val.key);
    }, []);

    const handleAddItemBtnClick = useCallback(() => {
        history.push('/dashboard/add-new');
    }, [history]);

    return (
        <div className={styles['content']}>
        <div className={styles['tools-container']}>
            <div className={styles['togglebar-container']}>
                <ToggleBar onSelect={handleToggleSelect} activeKey={activeTogglebarKey} items={toggleBarData}  />
            </div>
            <Button onClick={handleAddItemBtnClick} className={styles['add-item-btn']} variant="primary" label={"Add New +"} />
        </div>
    </div>
    )
}

export default ActiveProductsPage;