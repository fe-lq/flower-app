import { httpPost } from '@/http';

export const userLogin = httpPost<any>('http://127.0.0.1:8890/user/login');
