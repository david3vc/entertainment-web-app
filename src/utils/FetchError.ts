import { AxiosError } from 'axios';
import FetchErrorData from './FetchErrorData';

export default interface FetchError<T> extends AxiosError<FetchErrorData<T>> {}
