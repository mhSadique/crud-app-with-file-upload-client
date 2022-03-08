const useGetTokenLocalStorage = () => {
    const token = window.localStorage.getItem('token');
    return JSON.parse(token);
}
export default useGetTokenLocalStorage;