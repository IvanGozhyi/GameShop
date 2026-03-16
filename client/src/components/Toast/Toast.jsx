import React, { useState, useEffect } from 'react';
import { shopObserver } from '../../utils/Observer.js';
import './Toast.css';

const Toast = () => {
    const [notification, setNotification] = useState(null);

    useEffect(() => {

        const unsubscribe = shopObserver.subscribe('ITEM_ADDED', (data) => {
            setNotification(`Game ${data.name} added to cart!`);


            setTimeout(() => {
                setNotification(null);
            }, 3000);
        });

        return unsubscribe;
    }, []);

    if (!notification) return null;

    return (
        <div className="toast-notification">
            {notification}
        </div>
    );
};

export default Toast;