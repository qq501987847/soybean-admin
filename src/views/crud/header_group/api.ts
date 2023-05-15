import { mockRequest } from '@/service/request';

const request = mockRequest;
const apiPrefix = '/crud/header-group';

function resHandle(res: any) {
  return res.data;
}
export async function GetList(query: any) {
  const res = await request.post(`${apiPrefix}/page`, query);
  return resHandle(res);
}

export async function AddObj(obj: any) {
  const res = await request.post(`${apiPrefix}/add`, obj);
  return resHandle(res);
}

export async function UpdateObj(obj: any) {
  const res = await request.post(`${apiPrefix}/update`, obj);
  return resHandle(res);
}

export async function DelObj(id: number) {
  const res = await request.post(`${apiPrefix}/delete`, { id });
  return resHandle(res);
}

export async function GetObj(id: number) {
  const res = await request.get(`${apiPrefix}/info`, { params: { id } });
  return resHandle(res);
}

export async function BatchDelete(ids: number[]) {
  const res = await request.post(`${apiPrefix}/batchDelete`, { ids });
  return resHandle(res);
}
