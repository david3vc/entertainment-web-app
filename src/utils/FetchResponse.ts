import { AxiosResponse } from 'axios';
import FetchErrorData from './FetchErrorData';

export default interface FetchResponse<T> extends AxiosResponse<T, FetchErrorData<T>> {}
