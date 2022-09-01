import { UserProfileInterface } from "src/app/userProfile/types/userProfile.interface";

export interface UserProfileStateInterface {
  data: UserProfileInterface | null;
  isLoading: boolean;
  errors: string | null;
}
