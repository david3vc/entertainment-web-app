export default interface FetchErrorData<T> {
	message: string;
	errors?: T[];
}
