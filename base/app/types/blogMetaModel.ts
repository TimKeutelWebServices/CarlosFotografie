export class BlogMeta {
  id: string = ''
  projectId: string = ''
  lastChanged: string = new Date().toISOString()
  title: string = ''
  created: string = new Date().toISOString()

  constructor(init?: Partial<BlogMeta>) {
    Object.assign(this, init)
  }
}

export class Blog {
  id: string = ''
  projectId: string = ''
  lastChanged: string = new Date().toISOString()
  title: string = ''
  content: string = ''
  created: string = new Date().toISOString()

  constructor(init?: Partial<BlogMeta>) {
    Object.assign(this, init)
  }
}
