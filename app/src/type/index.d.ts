declare module 'Common' {
  export interface Tag {
    index: number
    label: string
    img: any
    action: any
  }
}

declare module 'Store' {
  export interface State {
    search: Search
  }
  export interface Search {
    keyword: string
    dateRange: string
    tag: number
  }
}
