export interface CategoryListItemType {
  label: string
  module: string
  //name: string
}

export interface CategoryListType {
  category: string
  items: CategoryListItemType[]
}