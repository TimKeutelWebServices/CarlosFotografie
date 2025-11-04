export class ContactModel {
  name: string = ''
  surname: string = ''
  email: string = ''
  tel: string = ''
  startDate: Date = new Date(Date.now() + 12096e5)
  endDate: Date = new Date(Date.now() + 24192e5)
  message: string = ''
  package: number = 0
}

export class ContactModelTable extends ContactModel {
  rowKey: string = ''
  partitionKey: string = ''
  created: string = ''
}
