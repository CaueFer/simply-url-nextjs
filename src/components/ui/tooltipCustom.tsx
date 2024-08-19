import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface TooltipCustomProps {
  children: ReactNode;
  value: String;
}

export function TooltipCustom({ children, value }: TooltipCustomProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="bottom">{value}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
