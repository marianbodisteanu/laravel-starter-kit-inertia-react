import { Toast } from "@base-ui/react/toast"
import type { LucideIcon } from "lucide-react"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react"

import { toastManager } from "@/lib/toast"
import { cn } from "@/lib/utils"

const toastIcons: Record<string, LucideIcon> = {
  success: CircleCheckIcon,
  info: InfoIcon,
  warning: TriangleAlertIcon,
  error: CircleAlertIcon,
}

const toastIconStyles: Record<string, string> = {
  success: "text-emerald-500",
  info: "text-blue-500",
  warning: "text-amber-500",
  error: "text-destructive",
}

function ToastList() {
  const { toasts } = Toast.useToastManager()

  return toasts.map((toast) => {
    const Icon = toast.type ? toastIcons[toast.type] : undefined

    return (
      <Toast.Root
        key={toast.id}
        toast={toast}
        className={cn(
          "pointer-events-auto relative flex w-full items-start gap-2 rounded-lg border bg-popover p-4 text-popover-foreground shadow-lg transition-all duration-200",
          "data-[starting-style]:translate-y-2 data-[starting-style]:opacity-0",
          "data-[ending-style]:translate-y-2 data-[ending-style]:opacity-0",
          "data-[swipe-direction=down]:data-[ending-style]:translate-y-8",
          "data-[swipe-direction=right]:data-[ending-style]:translate-x-8"
        )}
        style={{
          transform:
            "translate(var(--toast-swipe-movement-x), var(--toast-swipe-movement-y))",
        }}
        swipeDirection={["down", "right"]}
        data-slot="toast"
      >
        {Icon && (
          <Icon
            className={cn(
              "mt-0.5 size-4 shrink-0",
              toast.type ? toastIconStyles[toast.type] : undefined
            )}
            aria-hidden="true"
          />
        )}
        <Toast.Content className="flex flex-1 flex-col gap-0.5">
          <Toast.Title className="text-sm font-medium" />
          <Toast.Description className="text-sm text-muted-foreground" />
        </Toast.Content>
        <Toast.Close
          className="shrink-0 rounded-sm text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close notification"
        >
          <XIcon className="size-4" />
        </Toast.Close>
      </Toast.Root>
    )
  })
}

function Toaster() {
  return (
    <Toast.Provider toastManager={toastManager}>
      <Toast.Portal>
        <Toast.Viewport className="fixed right-4 bottom-4 z-50 flex w-80 flex-col gap-2">
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  )
}

export { Toaster }
