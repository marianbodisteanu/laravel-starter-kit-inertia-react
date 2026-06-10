import { AppSidebarLayout as AppLayoutTemplate } from '@/layouts/app/app-sidebar-layout';
import type { AppLayoutProps } from '@/types';

export function AppLayout({ children, breadcrumbs, ...props }: AppLayoutProps) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {children}
        </AppLayoutTemplate>
    );
}
