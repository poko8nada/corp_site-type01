const IFRAME_ID = 'contact-form-iframe';

export function initContactForm(): void {
  const iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement | null;
  if (!iframe) return;

  let loadCount = 0;
  iframe.addEventListener('load', () => {
    loadCount++;
    if (loadCount === 2) {
      iframe.height = '250';
      iframe.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
