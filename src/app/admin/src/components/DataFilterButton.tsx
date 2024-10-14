import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Button } from "@/packages/ui/src";

type filterCategory = "count" | "money";

interface DataFilterButtonProps {
  setCategory: (category: filterCategory) => void;
}

const DataFilterButton: React.FC<DataFilterButtonProps> = ({ setCategory }) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Button className="text-md font-bold bg-black text-white py-6">
        데이터 필터링
      </Button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="bg-white border border-gray-200 rounded-md shadow-lg p-4"
        sideOffset={5}
      >
        <div className="flex flex-col gap-2">
          <Popover.Close asChild>
            <button
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
              onClick={() => setCategory("count")}
            >
              판매 건 수
            </button>
          </Popover.Close>
          <Popover.Close asChild>
            <button
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
              onClick={() => setCategory("money")}
            >
              판매액
            </button>
          </Popover.Close>
        </div>
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default DataFilterButton;
