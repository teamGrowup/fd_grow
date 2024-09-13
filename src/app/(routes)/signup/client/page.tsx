"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
// import DaumPostcodeEmbed from 'react-daum-postcode';
import { useDaumPostcodePopup } from "react-daum-postcode";
import { Address } from "react-daum-postcode";

export default function UserRegistrationForm() {
  const [email, setEmail] = useState("");
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [emailTimer, setEmailTimer] = useState(180);
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [emailVerificationError, setEmailVerificationError] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPhoneVerification, setShowPhoneVerification] = useState(false);
  const [phoneTimer, setPhoneTimer] = useState(180);
  const [phoneVerificationCode, setPhoneVerificationCode] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [phoneVerificationError, setPhoneVerificationError] = useState("");

  const [password, setPassword] = useState("");
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  // const { searchKakaoAddress } = useAuthApi();
  const open = useDaumPostcodePopup();

  // const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const [emailError, setEmailError] = useState("");

  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [isAgreeSendEmail, setIsAgreeSendEmail] = useState(false);
  const [isAgreeSendSms, setIsAgreeSendSms] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const checkPasswordRequirements = (pwd: string) => {
    setIsLengthValid(pwd.length >= 8);
    setHasUpperCase(/[A-Z]/.test(pwd));
    setHasLowerCase(/[a-z]/.test(pwd));
    setHasNumber(/\d/.test(pwd));
    setHasSpecialChar(/[@$!%*#?&]/.test(pwd));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordRequirements(newPassword);
  };

  const RequirementLabel = ({ met, text }: { met: boolean; text: string }) => (
    <p className={`text-xs ${met ? "text-green-500" : "text-red-500"}`}>
      {met ? "✓" : "✗"} {text}
    </p>
  );

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setIsConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSendVerificationEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
      return;
    }
    setEmailError("");
    setShowEmailVerification(true);
    setEmailTimer(180);
    setIsEmailVerified(false);
  };

  const handleSendPhoneVerification = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPhoneVerification(true);
    setPhoneTimer(180);
    setIsPhoneVerified(false);
  };

  const handleEmailVerification = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission
    if (emailVerificationCode === "1234") {
      setIsEmailVerified(true);
      setShowEmailVerification(false);
      setEmailVerificationError("");
      // Set the email input to the verified email
      setEmail(email);
    } else {
      setEmailVerificationError("잘못된 인증 코드입니다. 다시 확인해주세요.");
    }
  };

  const handlePhoneVerification = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission
    if (phoneVerificationCode === "5678") {
      setIsPhoneVerified(true);
      setShowPhoneVerification(false);
      setPhoneVerificationError("");
      // Keep the verified phone number in the input
      setPhoneNumber(phoneNumber);
    } else {
      setPhoneVerificationError("잘못된 인증 코드입니다. 다시 확인해주세요.");
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showEmailVerification && emailTimer > 0) {
      interval = setInterval(() => {
        setEmailTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showEmailVerification, emailTimer]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showPhoneVerification && phoneTimer > 0) {
      interval = setInterval(() => {
        setPhoneTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showPhoneVerification, phoneTimer]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // // Usage in your component
  // const handleAddressSearch = async () => {
  //   console.log("check searchQuery", searchQuery);
  //   setIsSearching(true);
  //   try {
  //     const results = await searchKakaoAddress(searchQuery);
  //     console.log("check results", results);
  //     setSearchResults(results);
  //   } catch (error) {
  //     console.error("Error searching for address:", error);
  //     setSearchResults([]);
  //   } finally {
  //     setIsSearching(false);
  //   }
  // };

  // const handleAddressSelect = (selectedAddress: string) => {
  //   setAddress(selectedAddress);
  //   setIsDialogOpen(false);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isEmailVerified) {
      alert("이메일 인증을 완료해주세요.");
      return;
    }
    
    if (!isPhoneVerified) {
      alert("전화번호 인증을 완료해주세요.");
      return;
    }

    const mandatoryFields = [
      { value: email, name: "이메일" },
      { value: password, name: "비밀번호" },
      { value: confirmPassword, name: "비밀번호 확인" },
      { value: name, name: "이름" },
      { value: nickname, name: "닉네임" },
      { value: phoneNumber, name: "전화번호" },
      { value: birthday, name: "생년월일" },
      { value: gender, name: "성별" },
      { value: address, name: "주소" },
      { value: postcode, name: "우편번호" },
    ];

    const emptyFields = mandatoryFields.filter(field => !field.value.trim());

    if (emptyFields.length > 0) {
      const emptyFieldNames = emptyFields.map(field => field.name).join(", ");
      alert(`다음 필수 항목을 입력해주세요: ${emptyFieldNames}`);
      return;
    }

    // Proceed with form submission
    alert("Form submitted successfully");
  };

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress);
    setPostcode(data.zonecode);
    setIsDialogOpen(false);
  };

  const handleClick = () => {
    // Calculate the center position
    const width = 500; // Set your desired width
    const height = 600; // Set your desired height
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    open({
      onComplete: handleComplete,
      width: width,
      height: height,
      left: left,
      top: top,
    });
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
        7,
        11
      )}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formattedNumber = formatPhoneNumber(input);
    setPhoneNumber(formattedNumber);
    setIsPhoneValid(/^[0-9-]*$/.test(input));
  };

  const RequiredLabel = ({ text }: { text: string }) => (
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {text} <span className="text-red-500">*</span>
    </label>
  );

  return (
    <div className="max-w-md p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <RequiredLabel text="이메일" />
          <div className="flex space-x-2 items-center">
            <Input
              id="email"
              type="email"
              placeholder="abcdefg@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-grow ${emailError ? 'border-red-500' : ''}`}
              disabled={isEmailVerified}
              required
            />
            {isEmailVerified ? (
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            ) : (
              <Button
                onClick={handleSendVerificationEmail}
                disabled={!email || showEmailVerification}
                className="whitespace-nowrap"
              >
                인증메일 보내기
              </Button>
            )}
          </div>
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          {showEmailVerification && !emailError && (
            <div className="space-y-2 mt-2">
              <div className="flex space-x-2 items-center">
                <Input
                  type="text"
                  placeholder="인증번호 입력"
                  value={emailVerificationCode}
                  onChange={(e) => setEmailVerificationCode(e.target.value)}
                  className="flex-grow"
                />
                <span className="text-sm text-gray-500">
                  {formatTime(emailTimer)}
                </span>
                <Button
                  onClick={handleEmailVerification}
                  className="whitespace-nowrap"
                >
                  인증하기
                </Button>
              </div>
              {emailVerificationError && (
                <p className="text-red-500 text-xs">{emailVerificationError}</p>
              )}
            </div>
          )}
        </div>
        <div>
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={isAgreeSendEmail}
              onChange={(e) => setIsAgreeSendEmail(e.target.checked)}
              className="mr-2 text-xs"
            />
            이메일 수신 동의
          </label>
        </div>
        <div>
          <RequiredLabel text="비밀번호" />
          <Input
            id="password"
            type="password"
            placeholder="************"
            value={password}
            onChange={handlePasswordChange}
            className={`${
              password &&
              isLengthValid &&
              hasUpperCase &&
              hasLowerCase &&
              hasNumber &&
              hasSpecialChar
                ? "border-green-500"
                : "border-gray-300"
            }`}
            required
          />
          <div className="mt-2 space-y-1">
            <RequirementLabel met={isLengthValid} text="최소 8자 이상" />
            <RequirementLabel met={hasUpperCase} text="대문자 포함" />
            <RequirementLabel met={hasLowerCase} text="소문자 포함" />
            <RequirementLabel met={hasNumber} text="숫자 포함" />
            <RequirementLabel
              met={hasSpecialChar}
              text="특수문자 포함 (@$!%*#?&)"
            />
          </div>
        </div>
        <div>
          <RequiredLabel text="비밀번호 확인" />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="************"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={`${
              confirmPassword && isConfirmPasswordValid
                ? "border-green-500"
                : "border-gray-300"
            }`}
            required
          />
          {confirmPassword && (
            <p
              className={`mt-2 text-xs ${
                isConfirmPasswordValid ? "text-green-500" : "text-red-500"
              }`}
            >
              {isConfirmPasswordValid
                ? "✓ 비밀번호가 일치합니다."
                : "✗ 비밀번호가 일치하지 않습니다."}
            </p>
          )}
        </div>
        <div>
          <RequiredLabel text="이름" />
          <Input
            id="name"
            type="text"
            placeholder="홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <RequiredLabel text="닉네임" />
          <Input
            id="nickname"
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <RequiredLabel text="생년월일" />
            <Input
              id="birthday"
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <RequiredLabel text="성별" />
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border rounded text-sm"
              required
            >
              <option value="">선택하세요</option>
              <option value="MALE">남성</option>
              <option value="FEMALE">여성</option>
            </select>
          </div>
        </div>
        <div>
        <RequiredLabel text="주소" />
          <div className="flex space-x-2 mb-2">
            <Input
              id="address"
              type="text"
              placeholder="주소"
              className="flex-grow"
              value={address}
              readOnly
              required
            />
            <Dialog open={isDialogOpen} onOpenChange={handleClick}>
              <DialogTrigger asChild>
                <Button className="whitespace-nowrap w-1/4">주소 검색</Button>
              </DialogTrigger>
            </Dialog>
          </div>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="상세주소"
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
              className="flex-grow"
            />
            <Input
              type="text"
              placeholder="우편번호"
              value={postcode}
              readOnly
              className="w-1/4"
            />
          </div>
        </div>
        <div>
          <RequiredLabel text="전화번호" />
          <div className="flex space-x-2 items-center">
            <Input
              id="phone"
              type="tel"
              placeholder="010-0000-0000"
              className={`flex-grow ${!isPhoneValid ? "border-red-500" : ""}`}
              value={phoneNumber}
              onChange={handlePhoneChange}
              maxLength={13}
              disabled={isPhoneVerified}
              required
            />
            {isPhoneVerified ? (
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            ) : (
              <Button
                onClick={handleSendPhoneVerification}
                disabled={
                  !phoneNumber || showPhoneVerification || !isPhoneValid
                }
                className="whitespace-nowrap"
              >
                전화번호 인증
              </Button>
            )}
          </div>
          {!isPhoneValid && (
            <p className="text-red-500 text-sm mt-1">숫자만 입력해주세요.</p>
          )}
        </div>
        {showPhoneVerification && (
          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
              <Input
                type="text"
                placeholder="인증번호 입력"
                value={phoneVerificationCode}
                onChange={(e) => setPhoneVerificationCode(e.target.value)}
                className="flex-grow"
              />
              <span className="text-sm text-gray-500">
                {formatTime(phoneTimer)}
              </span>
              <Button
                onClick={handlePhoneVerification}
                className="whitespace-nowrap"
              >
                {phoneVerificationError ? "재인증하기" : "인증하기"}
              </Button>
            </div>
            {phoneVerificationError && (
              <p className="text-red-500 text-xs">{phoneVerificationError}</p>
            )}
          </div>
        )}
        <div>
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={isAgreeSendSms}
              onChange={(e) => setIsAgreeSendSms(e.target.checked)}
              className="mr-2 text-xs"
            />
            SMS 수신 동의
          </label>
        </div>
        <Button type="submit" className="w-full bg-black text-white mt-6">
          회원가입
        </Button>
      </form>
    </div>
  );
}
