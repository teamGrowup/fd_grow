import { useCallback } from "react"; //허가, 거부 버튼 클릭 시 요청하는 훅

type ActionType = "approve" | "deny"; // approve와 deny만 허용

const useRequestAction = (resourceType: string, id?: string) => {
    const handleAction = useCallback(
        async (actionType: ActionType): Promise<void> => { // 반환 타입을 Promise<void>로 명시
            try {
                const response = await fetch(
                    `http://backend/admin/${resourceType}/${id ?? ''}/${actionType}`,
                    {
                        method: "PATCH",
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data...");
                }

                const alertMessage =
                    actionType === "approve"
                        ? "허가 상태로 변경하였습니다!"
                        : "미허가 상태로 변경하였습니다!";
                window.alert(alertMessage);
            } catch (error) {
                console.error(error);
            }
        },
        [resourceType, id]
    );

    return { handleAction };
};

export default useRequestAction;
