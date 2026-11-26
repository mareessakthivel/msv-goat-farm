export interface WhatsAppEnquiryOptions {
  /** Base WhatsApp phone number with country code (e.g. "919876543210" or "+91 98765 43210") */
  phoneNumber: string;
  /** Prefilled message text */
  message: string;
}

/**
 * Builds a clean WhatsApp click-to-chat URL with URL-encoded prefilled message.
 * Strips all non-digit characters (spaces, +, hyphens) and leading international zeros.
 * Falls back to an unaddressed prefilled share URL when the real farm number is still pending.
 */
export function buildWhatsAppUrl({ phoneNumber, message }: WhatsAppEnquiryOptions): string {
  const digits = phoneNumber.replace(/\D/g, '').replace(/^0+/, '');
  const encodedMessage = encodeURIComponent(message.trim());

  if (!digits || digits.length < 10) {
    return `https://wa.me/?text=${encodedMessage}`;
  }

  return `https://wa.me/${digits}?text=${encodedMessage}`;
}

/**
 * Builds a tel: href when a valid phone number is configured, or returns null when unconfirmed.
 */
export function buildPhoneHref(phoneNumber: string): string | null {
  const cleaned = phoneNumber.replace(/[^\d+]/g, '');
  if (!cleaned || cleaned.length < 10) {
    return null;
  }
  return `tel:${cleaned}`;
}
