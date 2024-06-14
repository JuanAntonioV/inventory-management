'use server';

import { loginSchema } from '@/lib/validations';
import { redirect } from 'next/navigation';

export async function loginAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const validate = loginSchema.safeParse({ email, password });

  if (!validate.success) {
    return { error: validate.error.flatten().fieldErrors };
  }

  redirect('/dashboard');
}