"use client";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative w-100vw h-45vw">
        <div className="bgOrangeStyle-home"></div>
        <div className="bgBlackStyle-home"></div>
        <div className="bgTextStyle">CUSTOM</div>
        <Label className="absolute bottom-10 left-10 text-white z-10 pretendardSemiBoldFont-24">
          아직 당신의 공간을 어떻게 채울지 결정하지 못하셨나요?
          <br />
          이제 당신의 공간에 추억과 향기를 담으세요.
        </Label>
        <Label className="absolute mt-22vw right-10 text-white z-10 pretendardSemiBoldFont-20">
          signature
        </Label>
      </div>
      <div className="flex flex-col items-center w-full h-1400  bg-gradient-to-b from-custom-orange to-black from-5% to-80% py-70">
        <img src="HomeImage.png"></img>
        <Label className="text-white text-center mt-90 pretendardBoldFont-40">
          당신의 공간을
          <br />
          당신의 추억으로
        </Label>
        <Label className="text-white text-center mt-110 pretendardSemiBoldFont-24">
          향기가 추억에 미치는 영향에 대해 알고 계신가요?
        </Label>
        <Label className="text-white text-center mt-60 pretendardSemiBoldFont-18">
          자극을 가장 민감하게 구별하는 오감은 후각입니다.
          <br />
          <br />
          향기는 우리가 추억하는 장소나 경험, 감정 상태로 되돌릴 수 있는 능력이
          있습니다.
          <br />
          <br />
          향기를 통해 떠올리는 추억들은 다른 감각을 통해 떠올리는 추억보다{" "}
          <br />
          감정적으로 더욱 풍부한 추억을 떠올리게 해줍니다.
        </Label>
        <Label className="text-white text-center mt-150 pretendardSemiBoldFont-20">
          이제 당신의 추억을 향기로 느껴보세요
          <br />
          당신의 추억을 당신의 공간에 담아보세요
        </Label>
        <Button
          className="border-2 border-white text-white w-200 h-50 rounded-full mt-10"
          onClick={() => {
            router.push("/custom");
          }}
        >
          <Label className="pretendardSemiBoldFont-20">추억 담기</Label>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
