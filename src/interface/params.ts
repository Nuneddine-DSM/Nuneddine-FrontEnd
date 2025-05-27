export type RootStackParamList = {
  AddressWebview: {
    onSelect: (data: { zonecode: string; resultAddress: string }) => void;
  };
};

export type EditProfileParams = {
  EditProfile: {
    name: string;
    accountId: string;
  };
};
