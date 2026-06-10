import { useHttp } from '@inertiajs/react';
import { useState } from 'react';
import type { TwoFactorSecretKey, TwoFactorSetupData } from '@/types';
import {
    qrCode,
    recoveryCodes,
    secretKey,
} from '@/wayfinder/routes/two-factor';

export type UseTwoFactorAuthReturn = {
    qrCodeSvg: string | null;
    manualSetupKey: string | null;
    recoveryCodesList: string[];
    hasSetupData: boolean;
    errors: string[];
    clearErrors: () => void;
    clearSetupData: () => void;
    clearTwoFactorAuthData: () => void;
    fetchQrCode: () => Promise<void>;
    fetchSetupKey: () => Promise<void>;
    fetchSetupData: () => Promise<void>;
    fetchRecoveryCodes: () => Promise<void>;
};

export const OTP_MAX_LENGTH = 6;

export const useTwoFactorAuth = (): UseTwoFactorAuthReturn => {
    const qrCodeHttp = useHttp<Record<string, never>, TwoFactorSetupData>();
    const secretKeyHttp = useHttp<Record<string, never>, TwoFactorSecretKey>();
    const recoveryCodesHttp = useHttp<Record<string, never>, string[]>();

    const [qrCodeSvg, setQrCodeSvg] = useState<string | null>(null);
    const [manualSetupKey, setManualSetupKey] = useState<string | null>(null);
    const [recoveryCodesList, setRecoveryCodesList] = useState<string[]>([]);
    const [errors, setErrors] = useState<string[]>([]);

    const hasSetupData = qrCodeSvg !== null && manualSetupKey !== null;

    const fetchQrCode = async (): Promise<void> => {
        try {
            const { svg } = await qrCodeHttp.get(qrCode.url());
            setQrCodeSvg(svg);
        } catch {
            setErrors((prev) => [...prev, 'Failed to fetch QR code']);
            setQrCodeSvg(null);
        }
    };

    const fetchSetupKey = async (): Promise<void> => {
        try {
            const { secretKey: key } = await secretKeyHttp.get(secretKey.url());
            setManualSetupKey(key);
        } catch {
            setErrors((prev) => [...prev, 'Failed to fetch a setup key']);
            setManualSetupKey(null);
        }
    };

    const clearErrors = (): void => {
        setErrors([]);
    };

    const clearSetupData = (): void => {
        setManualSetupKey(null);
        setQrCodeSvg(null);
        clearErrors();
    };

    const clearTwoFactorAuthData = (): void => {
        clearSetupData();
        setRecoveryCodesList([]);
    };

    const fetchRecoveryCodes = async (): Promise<void> => {
        try {
            clearErrors();
            const codes = await recoveryCodesHttp.get(recoveryCodes.url());
            setRecoveryCodesList(codes);
        } catch {
            setErrors((prev) => [...prev, 'Failed to fetch recovery codes']);
            setRecoveryCodesList([]);
        }
    };

    const fetchSetupData = async (): Promise<void> => {
        try {
            clearErrors();
            await Promise.all([fetchQrCode(), fetchSetupKey()]);
        } catch {
            setQrCodeSvg(null);
            setManualSetupKey(null);
        }
    };

    return {
        qrCodeSvg,
        manualSetupKey,
        recoveryCodesList,
        hasSetupData,
        errors,
        clearErrors,
        clearSetupData,
        clearTwoFactorAuthData,
        fetchQrCode,
        fetchSetupKey,
        fetchSetupData,
        fetchRecoveryCodes,
    };
};
