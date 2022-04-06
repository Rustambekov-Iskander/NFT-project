interface IAvatar {
  original : string
  compressed : string
}


interface INftData {
    name: string;
    image: string;
    description: string;
    external_url: string
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

