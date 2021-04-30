export type CustomerData = {
    name?: string; 
    last_name?: string;
    email?: string;
    age?: string;
    termsAndCond?: boolean;
}

export type CustomerState = {
    user: CustomerData;
}

const customerInitialState: CustomerState = {
  user: {},
};

export { customerInitialState };