import { Head } from '@inertiajs/react';
import { AppearanceToggleTab as AppearanceTabs } from '@/components/appearance-tabs';
import { Heading } from '@/components/heading';
import { settingsLayout } from '@/layouts/settings/layout';
import type { BreadcrumbItem } from '@/types';
import { edit as editAppearance } from '@/wayfinder/routes/appearance';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Appearance settings',
        href: editAppearance(),
    },
];

function Update() {
    return (
        <>
            <Head title="Appearance settings" />

            <h1 className="sr-only">Appearance settings</h1>

            <div className="space-y-6">
                <Heading
                    variant="small"
                    title="Appearance settings"
                    description="Update your account's appearance settings"
                />
                <AppearanceTabs />
            </div>
        </>
    );
}

Update.layout = settingsLayout(breadcrumbs);

export default Update;
