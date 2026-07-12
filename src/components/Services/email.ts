import emailjs from "@emailjs/browser";

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
}

export const sendEmail = async (data: EmailData) => {

  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
   import.meta.env.VITE_EMAILJS_SERVICE_ID;
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    data,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};