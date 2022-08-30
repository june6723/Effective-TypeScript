/**
 * 문제5
 * 회원가입 form을 만들어야합니다.
 * 아이디, 비밀번호, 비밀번호 확인 text input
 * 추가 정보입력 checkbox
 * (추가정보입력을 체크하면)
 * 주소, 전화번호 text input 을 구현하려고 합니다.
 * 타입을 좀 더 좁게 관리할 수 있도록 개선해주세요.
 * */
interface AdditionalInfo {
  address: string;
  phone: string;
}

interface BaseData {
  id: string;
  password: string;
  confirmPassword: string;
}
interface SignUpData extends BaseData {
  additionalInfo?: AdditionalInfo
}

declare function postSignUpToV1(signupForm: SignUpData): void;
declare function postSignUpToV2(signupForm: SignUpData): void;

const sendSignup = (formData: SignUpData) => {
  if (formData.additionalInfo) {
    postSignUpToV2(formData);
  } else {
    postSignUpToV1(formData);
  }
};
