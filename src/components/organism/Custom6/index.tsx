"use client";
import setCustomDiffuser from "@/api/CustomDiffuser";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import Keyword from "@/components/molecule/Keyword";
import { customAtom } from "@/components/templates/CustomTemplate/JAtom";
import { useAtomValue } from "jotai";

interface CustomProps {
  complete: () => void;
  note: any;
}

const Custom6: React.FC<CustomProps> = ({ complete, note }) => {
  const custom = useAtomValue(customAtom);
  return (
    <div className="flex flex-col mt-60 items-center z-10">
      <Label className="text-center mb-2.5 textTest">
        향기의 키워드를 정리해봤어요
      </Label>
      <Label>제외하고 싶은 키워드가 있따면 삭제해보세요</Label>
      <div className="flex flex-row">
        <div className="flex flex-col items-start mr-10">
          <Label>LIKE</Label>
          <div className="flex flex-wrap content-start w-320 h-230 border border-black p-4">
            {note.like.map((value: string[], index: number) => {
              return <Keyword key={index}>{value}</Keyword>;
            })}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Label>HATE</Label>
          <div className="flex flex-wrap content-start w-320 h-230 border border-black p-4">
            {note.hate.map((value: string[], index: number) => {
              return <Keyword key={index}>{value}</Keyword>;
            })}
          </div>
        </div>
      </div>
      <Button
        className="w-300 h-50 bg-black text-white rounded-none mt-60"
        onClick={async () => {
          await setCustomDiffuser(custom.name, custom.image, 60000, note);
          localStorage.setItem(
            "selectedItems",
            JSON.stringify([
              {
                count: 1,
                product: {
                  id: 1,
                  Name: "Custom Diffuser -" + custom.name,
                  Price: 60000,
                },
              },
            ])
          );
          complete();
        }}
      >
        향기 담기
      </Button>
    </div>
  );
};

export default Custom6;
