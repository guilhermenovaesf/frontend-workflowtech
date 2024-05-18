import { UserLoginPipe } from './user-login.pipe';

describe('UserLoginPipe', () => {
  it('create an instance', () => {
    const pipe = new UserLoginPipe();
    expect(pipe).toBeTruthy();
  });
});
