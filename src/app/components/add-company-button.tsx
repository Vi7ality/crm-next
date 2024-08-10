'use client';

import { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';
// import CompanyFormModal from './company-form-modal';
const CompanyFormModal = dynamic(() => import('./company-form-modal'));

const AddCompanyButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default AddCompanyButton;
