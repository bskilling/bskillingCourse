import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Loader2 } from 'lucide-react';

export default function AlterLoader() {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="bg-transparent border-none">
        <div className="flex items-center justify-center w-full">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
