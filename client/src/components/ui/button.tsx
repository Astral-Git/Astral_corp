import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border border-transparent hover:bg-primary/90 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)]",
        destructive:
          "bg-destructive text-destructive-foreground border border-transparent hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_8px_rgba(255,255,255,0.15)] dark:hover:shadow-[0_0_8px_rgba(255,255,255,0.1)]",
        secondary:
          "bg-secondary text-secondary-foreground border border-transparent hover:bg-secondary/80 hover:shadow-[0_0_8px_hsl(var(--secondary)/0.2)]",
        ghost: "border border-transparent hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline border-none",
        glass: "bg-white/10 backdrop-blur-lg border border-white/20 text-foreground hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.15)]",
        hero: "bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-white border-2 border-transparent hover:scale-[1.02] hover:border-white/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.6)]",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_16px_hsl(var(--primary)/0.4)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
