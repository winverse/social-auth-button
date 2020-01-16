module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', 'prettier', 'prettier/react'],
  rules: {
    'no-console': 0, // 콘솔 허용
    'import/no-cycle': [0, { maxDepth: 1 }], // 파일간 순환 import 허용
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'prefer-const': 0,
    'no-undef-init': 0, // undefined 초기화 선언 허용
    'consistent-return': 0, // 화살표 함수에서 return 허용
    'no-underscore-dangle': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0, // any 사용 허용
  },
};
