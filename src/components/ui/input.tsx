import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & { label?: string; error?: string }
>(({ className, type, ...props }, ref) => {
  return (
    <div className="w-full">
      {props.label && (
        <label className="block text-sm font-medium ">{props.label}</label>
      )}
      <input
        type={type}
        className={cn(
          'flex h-12 w-full mt-1 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
      {props.error && <p className="text-sm text-red-500">{props.error}</p>}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
