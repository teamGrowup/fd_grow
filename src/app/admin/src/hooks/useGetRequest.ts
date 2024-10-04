type statePropType = '' | 'approved' | 'pending' | 'denied';

interface GetRequestOptions {
    pageNo?: number;
}

const useGetRequest = (resourceType: string, state?: statePropType, options?: GetRequestOptions) => { // 상품 혹은 브랜드를 상태에 따라 다르게 get 할 수 있는 훅
    const getRequest = async () => {
        try {
            let url = `http://backend-api/admins/${resourceType}`;

            if (resourceType === 'brand') {
                const authorityStatus = state ? state.toUpperCase() : '';
                const pageNo = options?.pageNo ?? 0;
                url += `?authorityStatus=${authorityStatus}&pageNo=${pageNo}`;
            } else { //브랜드가 아닌 경우
                url += state ? `/${state}` : '';
            }

            const response = await fetch(url, {
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
