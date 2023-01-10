import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    // fn의 기능: mock 함수를 만드는 것
    // 내장 메서드인 fetch 함수를 mock fetch 함수로 덮어씌운다 (테스트 진행중에만 유효)
    window.fetch = jest.fn();
    // mockResolvedValueOnce: fetch 함수가 호출되었을 때 결정되어야 하는 값을 설정할 수 있게 해준다
    window.fetch.mockResolvedValueOnce({
      // json이 호출되었을 때 반환할 데이터를 작성
      // Async 컴포넌트 파일을 보면, fetch된 데이터를 json()으로 읽는데,
      // 이 과정에서 어떤걸 반환할지 작성하는 것이다
      json: async () => [{ id: 'p1', title: 'Test post' }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
