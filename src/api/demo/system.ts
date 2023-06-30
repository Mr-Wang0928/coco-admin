import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

const url = '/basic-api';
enum Api {
  // AccountList = `${url}/system/getAccountList`,
  AccountList = `/api/system/getAccountList`,
  IsAccountExist = `${url}/system/accountExist`,
  DeptList = `${url}/system/getDeptList`,
  setRoleStatus = `${url}/system/setRoleStatus`,
  MenuList = `${url}/system/getMenuList`,
  RolePageList = `${url}/system/getRoleListByPage`,
  GetAllRoleList = `${url}/system/getAllRoleList`,
}

export const getAccountList = (params: AccountParams) => {
  console.log('params', params);

  return defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });
};

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
