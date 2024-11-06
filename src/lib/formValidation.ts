import axios from 'axios';
import { contactFormSchema } from '../schema/ContactFormSchema';
const contactForm = document.querySelector('#contact-form') as HTMLFormElement;
const alert = document.querySelector('#alertBox') as HTMLDivElement;
const alertText = alert.querySelector('p') as HTMLParagraphElement;

contactForm.addEventListener(
  'submit',
  async function (event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm).entries());
    const validationResult = contactFormSchema.safeParse(data);

    function showAlert(type: string, message: string): void {
      alert.className = `alert alert--${type}`;
      alertText.textContent = message;
      alert.style.display = 'block';
      setTimeout((): void => {
        alert.style.display = 'none';
      }, 5000);
    }

    if (validationResult.success) {
      const { name, email, message } = validationResult.data;
      try {
        await axios.post(`https://formspree.io/f/mnqygbrj`, {
          name,
          email,
          message,
        });
        showAlert('success', 'You message has been sent successfully.');
        contactForm.reset();
      } catch (error) {
        showAlert('danger', 'Failed to send message. Please try again later.');
      }
    } else {
      showAlert(
        'danger',
        'Please correct the errors in the form and try again.',
      );
    }
  },
);
