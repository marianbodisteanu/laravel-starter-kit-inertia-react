import { createInertiaApp, http, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { ComponentType } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from '@/components/ui/toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import { toastManager } from '@/lib/toast';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

http.onRequest((config) => {
    config.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        ...config.headers,
    };

    return config;
});

router.on('flash', (event) => {
    const flashToast = event.detail.flash.toast;

    if (flashToast) {
        toastManager.add({
            type: flashToast.type,
            title: flashToast.message,
        });
    }
});

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent<ComponentType>(
            `./pages/${name}.tsx`,
            import.meta.glob<ComponentType>('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <TooltipProvider>
                    <App {...props} />
                    <Toaster />
                </TooltipProvider>
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
