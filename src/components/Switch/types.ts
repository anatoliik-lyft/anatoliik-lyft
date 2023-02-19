import React from 'react';

interface IOwnProps {
    className?: string;
    // TODO make label required
    label?: React.ReactNode;
    content?: React.ReactNode;
}

export type TProps = React.InputHTMLAttributes<HTMLInputElement> & IOwnProps;
