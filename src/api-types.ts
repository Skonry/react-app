export interface BasicProductAjaxDto {
  components?: ProductComponentAjaxDto[];
  id?: number;
  name?: string;
  uid?: string;
};

export interface CustomFieldAjaxDto {
  id?: string;
  slug?: string;
  value?: string;
};

export interface ImageLinkAjaxDto {
  default?: string;
  default_as_base64?: string;
  default_link?: string;
  small?: string;
  small_as_base64?: string;
};

export interface ImageResourceAjaxDto {
  created_at?: string;
  default_image?: boolean;
  file_path?: string;
  file_path_small?: string;
  id?: number;
  image_data?: string;
  type?: string;
  uid?: string;
};

export interface Money {
  amount?: number;
  currency?: string;
};
export interface Money3 {
  amount?: number;
  currency?: string;
};

export interface ProductAjaxDto {
  category?: ProductCategoryAjaxDto;
  category_id?: number;
  components?: ProductComponentAjaxDto[];
  connections?: ProductConnectionAjaxDto[];
  cost_price_gross_money?: Money;
  cost_price_money?: Money;
  critical_amount_level?: number;
  custom_fields?: CustomFieldAjaxDto[];
  custom_ids?: ProductCustomIdAjaxDto[];
  default_price_net_money?: Money3;
  default_volume?: number;
  description?: string;
  id?: number;
  image?: ImageResourceAjaxDto;
  image_link?: ImageLinkAjaxDto;
  last_price_money?: Money;
  max_price_money?: Money;
  measure_type?: "sztuka" | "kilogram" | "litr" | "opakowanie";
  name?: string;
  open_linkeds?: boolean;
  optimal_amount_level?: number;
  recipe_amount?: number;
  sale_price_net_money?: Money;
  sku?: string;
  state?: ProductStateAjaxDto;
  status?: "ENABLED" | "DISABLED" | "DELETED";
  tax?: TaxAjaxDto;
  tax_id?: number;
  type?: "BASIC" | "PACKAGE" | "COMPOSITE";
  uid?: string;
  updated_at?: string;
  weight?: number;
};

export interface ProductCategoryAjaxDto {
  id?: number;
  name?: string;
  status?: "ENABLED" | "DISABLED" | "DELETED";
  uid?: string;
  updated_at?: string;
};

export interface ProductComponentAjaxDto {
  amount?: number;
  category_name?: string;
  id?: number;
  measure_type?: "sztuka" | "kilogram" | "litr" | "opakowanie";
  product_cost_gross_money?: Money;
  product_cost_money?: Money;
  product_id?: number;
  product_name?: string;
  recipe_amount?: number;
  sub_product?: BasicProductAjaxDto;
  sub_product_type?: "BASIC" | "PACKAGE" | "COMPOSITE";
  unit_product_cost_gross_money?: Money;
  unit_product_cost_money?: Money;
};

export interface ProductConnectionAjaxDto {
  generic_dto?: ProductConnectionUpdateDto;
  id?: number;
  name?: string;
  package_uid?: string;
};

export interface ProductConnectionUpdateDto {
  id?: number;
  name?: string;
  packageUid?: string;
};

export interface ProductCustomIdAjaxDto {
  id?: number;
  type?: string;
  value?: string;
};

export interface ProductStateAjaxDto {
  available_amount?: number;
  commited_amount?: number;
  in_stock_amount?: number;
  incoming_amount?: number;
};

export interface TaxAjaxDto {
  amount?: number;
  code?: string;
  id?: number;
  name?: string;
  status?: "ENABLED" | "DISABLED" | "DELETED";
  updated_at?: string;
};