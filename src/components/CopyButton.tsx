import { useState } from 'react';
import './CopyButton.css';

interface CopyButtonProps {
    text: string;
}

export const CopyButton = ({ text }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button className="copy-btn" onClick={handleCopy} title="Copy">
            {copied ? '✓' : '📋'}
        </button>
    );
};