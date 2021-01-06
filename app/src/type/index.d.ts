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
    component: Component
    post: Post
  }
  export interface Search {
    keyword: string
    dateRange: string
    tag: number
  }
  export interface Component {
    isDrawerOpen: boolean
    isDialogOpen: boolean
    dialog: Dialog
  }
  export interface Dialog {
    title: string
    component: any
  }
  export interface Post {
    id: string
    title: string
    tag: string
    date: string
    image: string
    ingredient: string
    step: string
    tip: string
  }
}
