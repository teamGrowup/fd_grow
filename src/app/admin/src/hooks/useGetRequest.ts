const useGetRequest = (resourceType: string, state?: string) => { // 상품 혹은 브랜드를 상태에 따라 다르게 get 할 수 있는 훅
    const getRequest = async () => {
        try {
            const response = await fetch(`http://backend-api/admins/${resourceType}/${state ? `/${state}` : ""}`, {
                method: 'GET',
            })

            if (!response.ok) {
                throw new Error('Failed to fetch data...');
            }

            const data = await response.json();

            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    return { getRequest };
}

export default useGetRequest;
