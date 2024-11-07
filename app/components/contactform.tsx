// contactform.tsx
'use client';

import React, { useState } from 'react';
import './contactform.css';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  // Penanganan form dan logic lainnya

  return (
    <form>
      {/* Form Elements */}
    </form>
  );
};

export default ContactForm;
