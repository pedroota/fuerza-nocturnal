import create from 'zustand';

type AuthTypes = {
  token: string;
  userId: string;
  updateUser: (userId: string, token: string) => void;
};

export const useAuth = create<AuthTypes>((set) => ({
  token: '',
  userId: '',

  updateUser(userId: string, token: string) {
    set(() => ({
      token: token,
      userId: userId,
    }));
  },
}));
