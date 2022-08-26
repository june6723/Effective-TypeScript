/**
 * 문제2
 * 위의  PapagoParamsSource와 PapagoParamsTarget 를 조합하여 명세에서 언급하는
 * "번역할 수 있는 원본 언어와 목적 언어는 다음과 같습니다." 의 제약조건을 참고하여 PapagoParams 인터페이스를 개선해 주세요.
 * */

interface KoParams {
  source: 'ko';
  target: SupportedLanguague;
  text: string;
}
interface EnParams {
  source: 'en';
  target: 'ja'|'fr'|'zh-CN'|'zh-TW'|'ko';
  text: string;
}
interface JaParams {
  source: 'ja';
  target: 'zh-CN' | 'zh-TW' | 'ko';
  text: string;
}
interface ZhCnParams {
  source: 'zh-Cn';
  target: 'zh-TW';
  text: string;
}

type PapagoParams = KoParams | EnParams | JaParams | ZhCnParams;

const params: PapagoParams= {
  source: 'en',
  target: 'ja',
  text: 'Hello Typescript!'
}
