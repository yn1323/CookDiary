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
    user: User
    post: Post
    list: List
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
  export interface User {
    id: string
  }
  export interface Dialog {
    title: string
    component: any
  }
  export interface List {
    isLoaded: boolean
    result: {
      id: string
      img: string
      title: string
      date: string
    }[]
  }
  export interface Post {
    id?: string
    title: string
    tag: string
    cookedDateList: string[]
    img: string
    ingredients: string
    steps: string
    tips: string
  }
}
