import React from 'react';

interface IOwnProps {
    className?: string;
    label?: React.ReactNode;
    content?: React.ReactNode;
}

export type TProps = React.InputHTMLAttributes<HTMLInputElement> & IOwnProps;
