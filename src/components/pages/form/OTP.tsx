import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog'; // Adjust the import path as needed
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'; // Adjust the import path/library accordingly
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useStudentSessionStore } from '@/lib/store/useSession';
import { useRouter } from 'next/router';
import { processError } from '@/lib/error';
import AlterLoader from '@/components/global/AlterLoader';

interface FormValues {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  rollNo: string;
}

interface OTPVerificationDialogProps {
  open: boolean;
  data: FormValues;
  onSuccess: () => void;
  onClose: (value: boolean) => void;
}

const OTPVerificationDialog: React.FC<OTPVerificationDialogProps> = ({
  open,
  data,
  onSuccess,
  onClose,
}) => {
  const [otp, setOtp] = useState('');
  const { setStudentSession } = useStudentSessionStore();
  const router = useRouter();

  const verifyOtpMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        `https://backendbskilling-production-20ff.up.railway.app/api/form/verify-otp`,
        {
          phone: data.phone,
          otp,
          rollNo: data.rollNo,
        }
      );
      return res.data;
    },
    onSuccess: (data: UserSessionResponse) => {
      console.log(data);
      //   onSuccess();
      router.replace(`/form/course`);
      setStudentSession(data.student, data.sessionExpiry);
      onClose(false);
    },
    onError: (err) => {
      // alert('Failed to send OTP');
      toast.error(processError(err));
    },
  });

  const handleVerify = async () => {
    console.log(otp);
    console.log(data);
    verifyOtpMutation.mutate();
  };

  return (
    <>
      {verifyOtpMutation.isPending && <AlterLoader />}
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
            OTP Verification
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Please enter the 6-digit OTP sent to your phone.
          </p>
          <div className="flex justify-center">
            <InputOTP maxLength={6} onChange={(value: string) => setOtp(value)}>
              <InputOTPGroup className="flex space-x-2">
                <InputOTPSlot
                  index={0}
                  className="w-12 h-12 text-center border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <InputOTPSlot
                  index={1}
                  className="w-12 h-12 text-center border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <InputOTPSlot
                  index={2}
                  className="w-12 h-12 text-center border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </InputOTPGroup>
              <InputOTPSeparator className="hidden" />
              <InputOTPGroup className="flex space-x-2">
                <InputOTPSlot
                  index={3}
                  className="w-12 h-12 text-center border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <InputOTPSlot
                  index={4}
                  className="w-12 h-12 text-center border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <InputOTPSlot
                  index={5}
                  className="w-12 h-12 text-center border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <button
            onClick={() => {
              console.log(otp);
              handleVerify();
            }}
            className="w-full mt-8 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Verify OTP
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OTPVerificationDialog;

export interface UserSessionResponse {
  message: string;
  session: boolean;
  student: Student;
  sessionExpiry: number;
}
interface Student {
  _id: string;
  'S No': number;
  'University Name': string;
  'College Name': string;
  'College Code': string;
  Branch: string;
  District: string;
  Semester: number;
  'Student Name': string;
  'Student Email': string;
  'Student Phone': string;
  'Student RollNo': string;
  'Student NM Id': string;
  'Course Name': string;
  'Course ID': number;
  Student_Phone: string;
}
