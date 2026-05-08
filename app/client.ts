import { createClient } from 'honox/client';
import { initContactForm } from '@/sections/contact/form-init';
import { initScrollReveal } from '@/sections/home/scroll-reveal';

createClient();
initScrollReveal();
initContactForm();
