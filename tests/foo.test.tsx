import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

describe.concurrent('foo', () => {
  afterEach(cleanup);
  it('should work', ({ expect }) => {
    const { container } = render(<div>bar</div>);
    expect(container.firstChild).toHaveTextContent('bar');
  });
});