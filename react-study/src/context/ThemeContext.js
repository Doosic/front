import {createContext} from 'react';

// createContext의 초기값이 가지는 의미.
// 상위 컴포넌트에서 Provider로 감싸지 않았을 때, 아무런 값이 없을때 불러와지는 기본값이다.
export const ThemeContext = createContext(null);