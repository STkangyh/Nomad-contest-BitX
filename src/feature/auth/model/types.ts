// src/features/auth/model/types.ts
export interface SignupForm {
  name: string;
  email: string;
  password: string;
}

export interface SignupFormState {
  data: SignupForm;
  isLoading: boolean;
  error: string | null;
}
