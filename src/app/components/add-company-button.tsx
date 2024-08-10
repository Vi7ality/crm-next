'use client';

import { useState } from 'react';
import Button from './button';
import Modal from './modal';

const AddCompanyButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)} />
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default AddCompanyButton;
