export interface IFetchAccountData {
  /**
   * дата создания счета
   */
  createDate: string,
  /**
   * конец действия счета
   */
  endDate: string,
  /**
   * тип счета
   */
  type: string,
  /**
   * история операций
   */
  history: Object,
  /**
   * признак что счет не надо показывать
   */
  hide: boolean,
  /**
   * название счета
   */
  accountName: string,
  /**
   * номер счета
   */
  accountNumber: string,
  /**
   * сумма на счете
   */
  amount: number,
  /**
   * валюта счета
   */
  currency: string,
  /**
   * идентификатор
   */
  id: string,
  /**
   * имя пользователя
   */
  username: string,
  /**
   * id для DB
   */
  _id: string,
};

export interface ISaveResponse {};