export type CreateNewUserRequestModel = {
  id?: string;
  email: string;
  imie: string;
  nazwisko: string;
  haslo: string;
};

export type GetUsersListResponseModel = CreateNewUserRequestModel;
