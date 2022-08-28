import { UserInterface } from "src/app/shared/types/user.interface";

export interface AuthStateInterface {
  isLoading: boolean;
  isSubmitting: boolean;
  errors: string[] | null;
  isLoggedIn: boolean | null;
  user: UserInterface | null;
}
