const initialCredentials = {
  email: "",
  password: "",
};

const initialDueTime = {
  time: {
    from: { hrs: 0, mins: 0 },
    to: { hrs: 0, mins: 0 },
  },
};

const initialDueTimeWithDate = {
  date: {
    from: "",
    to: "",
  },
  time: {
    from: { hrs: 0, mins: 0 },
    to: { hrs: 0, mins: 0 },
  },
};

export { initialCredentials, initialDueTime, initialDueTimeWithDate };
