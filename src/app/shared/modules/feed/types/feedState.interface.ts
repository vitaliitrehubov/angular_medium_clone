import { FetchFeedResponseInterface } from "src/app/shared/modules/feed/types/fetchFeedResponse.interface";

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: FetchFeedResponseInterface | null;
}
