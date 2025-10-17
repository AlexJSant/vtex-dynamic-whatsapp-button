declare module 'vtex.css-handles' {
  export type CssHandles<T extends readonly string[]> = Record<T[number], string>
  export function useCssHandles<T extends readonly string[]>(
    handles: T
  ): CssHandles<T>
}


