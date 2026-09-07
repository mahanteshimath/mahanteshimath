import type { ContactContent } from '@/types/content'

export const contact: ContactContent = {
  heading: 'Have an AI or data challenge worth solving?',
  description:
    'Tell me what you are building and where it is stuck. I read every message.',
  responseTime: 'I usually reply within two working days.',
  openTo: ['Consulting', 'Speaking', 'Advisory', 'Collaborations'],
  /**
   * Set this to a form endpoint (e.g. 'https://formspree.io/f/xxxxxxxx')
   * to receive submissions. While it is null, the form opens the
   * visitor's mail client with the message pre-filled instead.
   */
  formEndpoint: null,
}
