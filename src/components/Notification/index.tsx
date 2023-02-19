import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import errorIcon from '@/icons/error.svg';
import successIcon from '@/icons/success.svg';
import deleteIcon from '@/icons/delete.svg';

import * as S from './style';
import { INotification, IBaseNotification } from './types';

interface IOwnProps {
    id: INotification['id'];
    onClose: (id: INotification['id']) => void;
    message?: INotification['message'];
    messageKey?: INotification['messageKey'];
    className?: string;
    type?: INotification['type'];
}

type TProps = IOwnProps & WithTranslation;

const Notification: React.FC<TProps> = ({ t, id, message, className, messageKey, onClose, type = 'success' }) => {
    const getIcon = (): React.ReactNode => {
        switch (type) {
            case 'error': {
                return <S.ErrorIcon src={errorIcon} alt="Error" />;
            }
            case 'success': {
                return <S.SuccessIcon src={successIcon} alt="Success" />;
            }
            default: {
                return null;
            }
        }
    };

    return (
        <S.Root type={type} className={className}>
            {getIcon()}
            <S.Message>{messageKey ? t(messageKey) : message}</S.Message>
            <S.DeleteIcon src={deleteIcon} alt="Delete" onClick={() => onClose(id)} />
        </S.Root>
    );
};

export default withTranslation()(Notification);

export type { INotification, IBaseNotification };
