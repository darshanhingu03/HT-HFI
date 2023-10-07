import React, { useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from 'next/router';

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/menu')
    }, 3000)
  }, []);

  return (
    <div className="h-screen bg-green-600 flex flex-col justify-center items-center bg-success">
      <CheckCircleIcon
        style={{ fontSize: 150, color: 'white' }}
        className="m-4"
      />
      <p className="text-3xl font-medium text-white">Success!</p>
    </div>
  );
};

export default SuccessPage;
