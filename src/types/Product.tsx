interface IAvatar {
  original : string
  compressed : string
}

interface INftData {
    name: string;
    image: string;
    description: string;
}

interface ICreator {
    user_id: number;
    display_name: string;
    public_address: string;
    custom_url: string;
}

export interface ProductItem {
  product_id: number;
  name: string;
  description: string;
  quantity: number;
  initial_price: number;
  type: string;
  created_by: ICreator;
  avatar: IAvatar;
  json_nft_data: INftData;
  created_at: string;
  updated_at: string;
  quantity_nfts_created: number;
  on_main_page: boolean;
  is_wearable: boolean;
  latest_price: number;
  quantity_available: number;
}

export interface Product {
  product: ProductItem;
}

export interface PostState {
  posts: any[];
  loading: boolean;
  error: null | string;
}

export enum PostActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCES = "FETCH_POSTS_SUCCES",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
}

interface FetchPostsAction {
  type: PostActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccesAction {
  type: PostActionTypes.FETCH_POSTS_SUCCES;
  payload: any[];
}

interface FetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostAction =
  | FetchPostsAction
  | FetchPostsSuccesAction
  | FetchPostsErrorAction;
