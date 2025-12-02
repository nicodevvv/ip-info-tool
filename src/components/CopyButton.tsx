import { useState } from 'react';
import './CopyButton.css';
import { toast } from 'react-toastify';

interface CopyButtonProps {
    text: string;
}

export const CopyButton = ({ text }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        console.log('Copying text:', text);
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            toast.success('Copied to clipboard!', { position: "top-right", autoClose: 2000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined });
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <>
            <button className="copy-btn" onClick={handleCopy} title="Copy">
                {copied ? '✓' : '📋'}
            </button>
        </>
    );
};