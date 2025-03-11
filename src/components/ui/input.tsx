import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & { label?: string; error?: string }
>(({ className, type, ...props }, ref) => {
  return (
    <div className="w-full">
      {props.label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {props.label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base shadow-sm transition-colors duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50 md:text-sm',
            props.error &&
              'border-red-300 focus:border-red-500 focus:ring-red-200',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
      {props.error && (
        <p className="mt-1.5 text-sm font-normal text-red-500">{props.error}</p>
      )}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
