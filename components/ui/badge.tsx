import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-900 text-white shadow-xs",
        secondary:
          "border-transparent bg-slate-100 text-slate-800 hover:bg-slate-200/80",
        destructive:
          "border-transparent bg-destructive text-white shadow-xs",
        outline: "text-slate-700 border-slate-300 bg-white",
        remote: "border-emerald-200 bg-emerald-50 text-emerald-800 font-medium",
        hybrid: "border-amber-200 bg-amber-50 text-amber-800 font-medium",
        onsite: "border-slate-200 bg-slate-100 text-slate-700 font-medium",
        primary: "border-blue-200 bg-blue-50 text-[#0a66c2] font-semibold",
        salary: "border-purple-200 bg-purple-50 text-purple-700 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
