// components/common/Modal.tsx
import { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div 
                    className="fixed inset-0 transition-opacity" 
                    onClick={onClose}
                >
                    <div className="absolute inset-0"></div>
                </div>

                <div className="inline-block align-bottom bg-white text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border-2 border-gray-200/50 rounded-lg shadow-lg">
                </div>
            </div>
        </div>
    );
}