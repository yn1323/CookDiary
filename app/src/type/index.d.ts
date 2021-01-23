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
    image: Image
  }
  export interface Search {
    keyword: string
    dateRange: string
    tag: string
  }
  export interface Component {
    isDrawerOpen: boolean
    isDialogOpen: boolean
    dialog: Dialog
    isImgUploading: boolean
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
    result: Post[]
  }
  export interface Image {
    isLoaded: boolean
    result: {
      [key: string]: string
    }
  }
  export interface Post {
    id?: string
    title: string
    tag: string
    date: string
    ingredients: string
    steps: string
    tips: string
  }
}

declare module 'Request' {
  export interface FetchList {
    [key: string]: any
    tag?: string
  }
}
