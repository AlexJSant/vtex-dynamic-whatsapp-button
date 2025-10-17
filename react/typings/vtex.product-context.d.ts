declare module 'vtex.product-context' {
  export interface ProductContext {
    product?: {
      productName?: string
      [key: string]: any
    } | null
    [key: string]: any
  }

  export function useProduct(): ProductContext | null
}


