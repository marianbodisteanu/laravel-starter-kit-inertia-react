export type CleanupFn = () => void;

export function useMobileNavigation(): CleanupFn {
    return () => {
        document.body.style.removeProperty('pointer-events');
    };
}
